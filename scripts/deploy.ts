import { ethers } from "hardhat";
import { verify } from "./verify";

async function main() {
  // Deploy CipherChainToken
  const CipherChainToken = await ethers.getContractFactory("CipherChainToken");
  const token = await CipherChainToken.deploy();
  await token.deployed();
  console.log("CipherChainToken deployed to:", token.address);

  // Deploy LiquidityPoolManager
  const LiquidityPoolManager = await ethers.getContractFactory("LiquidityPoolManager");
  const liquidityManager = await LiquidityPoolManager.deploy();
  await liquidityManager.deployed();
  console.log("LiquidityPoolManager deployed to:", liquidityManager.address);

  // Deploy TokenFactory
  const TokenFactory = await ethers.getContractFactory("TokenFactory");
  const tokenFactory = await TokenFactory.deploy(liquidityManager.address);
  await tokenFactory.deployed();
  console.log("TokenFactory deployed to:", tokenFactory.address);

  // Deploy Staking
  const Staking = await ethers.getContractFactory("Staking");
  const staking = await Staking.deploy(token.address);
  await staking.deployed();
  console.log("Staking deployed to:", staking.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });