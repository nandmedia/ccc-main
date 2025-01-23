// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract CipherChainToken is ERC20, Ownable, ReentrancyGuard {
    uint256 public constant INITIAL_SUPPLY = 100_000_000 * 10**18; // 100M tokens
    uint256 public platformFeePercent = 2; // 2% platform fee
    
    constructor() ERC20("Cipher Chain Coin", "CCC") Ownable(msg.sender) {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function setPlatformFee(uint256 _newFee) external onlyOwner {
        require(_newFee <= 5, "Fee cannot exceed 5%");
        platformFeePercent = _newFee;
    }

    function calculateGasFee(uint256 tokenSupply, uint256 complexity) public pure returns (uint256) {
        // Base fee of 100 CCC
        uint256 baseFee = 100 * 10**18;
        
        // Additional fee based on supply (1 CCC per million tokens)
        uint256 supplyFee = (tokenSupply / (1_000_000 * 10**18)) * 10**18;
        
        // Complexity multiplier (1-5)
        uint256 complexityFee = baseFee * complexity / 5;
        
        return baseFee + supplyFee + complexityFee;
    }
}