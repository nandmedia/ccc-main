// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/ILiquidityPool.sol";

contract LiquidityPoolManager is ILiquidityPool, Ownable, ReentrancyGuard {
    mapping(address => mapping(address => uint256)) public poolShares;
    mapping(address => mapping(address => uint256)) public reserves;
    
    uint256 public constant MINIMUM_LIQUIDITY = 1000;
    uint256 private unlocked = 1;
    
    modifier lock() {
        require(unlocked == 1, 'LOCKED');
        unlocked = 0;
        _;
        unlocked = 1;
    }

    constructor() Ownable(msg.sender) {}

    function addLiquidity(
        address token,
        address baseToken,
        uint256 amountToken,
        uint256 amountBaseToken,
        uint256 minLiquidity
    ) external nonReentrant lock returns (uint256 liquidityTokens) {
        require(token != address(0) && baseToken != address(0), "Invalid tokens");
        require(amountToken > 0 && amountBaseToken > 0, "Invalid amounts");

        uint256 totalSupply = poolShares[token][baseToken];
        
        if (totalSupply == 0) {
            liquidityTokens = _sqrt(amountToken * amountBaseToken);
            require(liquidityTokens >= MINIMUM_LIQUIDITY, "Insufficient liquidity");
            _mint(token, baseToken, address(0), MINIMUM_LIQUIDITY);
            liquidityTokens -= MINIMUM_LIQUIDITY;
        } else {
            liquidityTokens = _min(
                (amountToken * totalSupply) / reserves[token][baseToken],
                (amountBaseToken * totalSupply) / reserves[baseToken][token]
            );
        }
        
        require(liquidityTokens >= minLiquidity, "Insufficient liquidity tokens");

        // Transfer tokens
        require(
            IERC20(token).transferFrom(msg.sender, address(this), amountToken),
            "Token transfer failed"
        );
        require(
            IERC20(baseToken).transferFrom(msg.sender, address(this), amountBaseToken),
            "Base token transfer failed"
        );

        // Update reserves
        reserves[token][baseToken] = reserves[token][baseToken] + amountToken;
        reserves[baseToken][token] = reserves[baseToken][token] + amountBaseToken;

        // Mint liquidity tokens
        _mint(token, baseToken, msg.sender, liquidityTokens);

        emit LiquidityAdded(
            token,
            baseToken,
            amountToken,
            amountBaseToken,
            liquidityTokens
        );

        return liquidityTokens;
    }

    function removeLiquidity(
        address token,
        address baseToken,
        uint256 liquidityTokens,
        uint256 minTokenAmount,
        uint256 minBaseTokenAmount
    ) external nonReentrant lock returns (uint256 tokenAmount, uint256 baseTokenAmount) {
        require(liquidityTokens > 0, "Invalid liquidity tokens");
        
        uint256 totalSupply = poolShares[token][baseToken];
        require(totalSupply > 0, "Pool does not exist");

        tokenAmount = (liquidityTokens * reserves[token][baseToken]) / totalSupply;
        baseTokenAmount = (liquidityTokens * reserves[baseToken][token]) / totalSupply;

        require(tokenAmount >= minTokenAmount, "Insufficient token amount");
        require(baseTokenAmount >= minBaseTokenAmount, "Insufficient base token amount");

        // Burn liquidity tokens
        _burn(token, baseToken, msg.sender, liquidityTokens);

        // Update reserves
        reserves[token][baseToken] = reserves[token][baseToken] - tokenAmount;
        reserves[baseToken][token] = reserves[baseToken][token] - baseTokenAmount;

        // Transfer tokens
        require(
            IERC20(token).transfer(msg.sender, tokenAmount),
            "Token transfer failed"
        );
        require(
            IERC20(baseToken).transfer(msg.sender, baseTokenAmount),
            "Base token transfer failed"
        );

        emit LiquidityRemoved(
            token,
            baseToken,
            tokenAmount,
            baseTokenAmount,
            liquidityTokens
        );

        return (tokenAmount, baseTokenAmount);
    }

    function _mint(
        address token,
        address baseToken,
        address to,
        uint256 amount
    ) internal {
        poolShares[token][baseToken] += amount;
        poolShares[baseToken][token] += amount;
    }

    function _burn(
        address token,
        address baseToken,
        address from,
        uint256 amount
    ) internal {
        poolShares[token][baseToken] -= amount;
        poolShares[baseToken][token] -= amount;
    }

    function _sqrt(uint256 y) internal pure returns (uint256 z) {
        if (y > 3) {
            z = y;
            uint256 x = y / 2 + 1;
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
    }

    function _min(uint256 x, uint256 y) internal pure returns (uint256) {
        return x < y ? x : y;
    }
}