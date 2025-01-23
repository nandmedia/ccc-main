// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./CustomToken.sol";
import "./LiquidityPoolManager.sol";

contract TokenFactory is Ownable, ReentrancyGuard {
    LiquidityPoolManager public liquidityManager;
    
    event TokenCreated(
        address indexed tokenAddress,
        string name,
        string symbol,
        uint256 totalSupply,
        address indexed creator
    );

    event LiquidityPoolCreated(
        address indexed token,
        address indexed baseToken,
        uint256 tokenAmount,
        uint256 baseTokenAmount,
        uint256 liquidityTokens
    );

    constructor(address _liquidityManager) Ownable(msg.sender) {
        liquidityManager = LiquidityPoolManager(_liquidityManager);
    }

    function createTokenWithLiquidity(
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 initialSupply,
        address baseToken,
        uint256 baseTokenAmount
    ) external nonReentrant returns (address tokenAddress) {
        // Deploy new token
        CustomToken newToken = new CustomToken(
            name,
            symbol,
            initialSupply,
            msg.sender
        );
        tokenAddress = address(newToken);

        emit TokenCreated(
            tokenAddress,
            name,
            symbol,
            initialSupply,
            msg.sender
        );

        // Setup liquidity pool if base token is provided
        if (baseToken != address(0) && baseTokenAmount > 0) {
            // Transfer base tokens from sender
            require(
                IERC20(baseToken).transferFrom(msg.sender, address(this), baseTokenAmount),
                "Base token transfer failed"
            );

            // Approve liquidity manager to spend tokens
            IERC20(tokenAddress).approve(address(liquidityManager), initialSupply);
            IERC20(baseToken).approve(address(liquidityManager), baseTokenAmount);

            // Add liquidity
            uint256 liquidityTokens = liquidityManager.addLiquidity(
                tokenAddress,
                baseToken,
                initialSupply,
                baseTokenAmount,
                0 // Min liquidity tokens
            );

            emit LiquidityPoolCreated(
                tokenAddress,
                baseToken,
                initialSupply,
                baseTokenAmount,
                liquidityTokens
            );
        }

        return tokenAddress;
    }
}