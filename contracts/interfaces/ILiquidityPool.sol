// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface ILiquidityPool {
    event LiquidityAdded(
        address indexed token,
        address indexed baseToken,
        uint256 tokenAmount,
        uint256 baseTokenAmount,
        uint256 liquidityTokens
    );

    event LiquidityRemoved(
        address indexed token,
        address indexed baseToken,
        uint256 tokenAmount,
        uint256 baseTokenAmount,
        uint256 liquidityTokens
    );

    function addLiquidity(
        address baseToken,
        uint256 amountToken,
        uint256 amountBaseToken,
        uint256 minLiquidity
    ) external returns (uint256 liquidityTokens);

    function removeLiquidity(
        address baseToken,
        uint256 liquidityTokens,
        uint256 minTokenAmount,
        uint256 minBaseTokenAmount
    ) external returns (uint256 tokenAmount, uint256 baseTokenAmount);
}