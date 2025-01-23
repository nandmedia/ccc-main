const hre = require("hardhat");

async function main() {
  // Deploy LiquidityPoolManager
  const LiquidityPoolManager = await hre.ethers.getContractFactory("LiquidityPoolManager");
  const liquidityManager = await LiquidityPoolManager.deploy();
  await liquidityManager.deployed();
  console.log("LiquidityPoolManager deployed to:", liquidityManager.address);

  // Deploy TokenFactory
  const TokenFactory = await hre.ethers.getContractFactory("TokenFactory");
  const tokenFactory = await TokenFactory.deploy(liquidityManager.address);
  await tokenFactory.deployed();
  console.log("TokenFactory deployed to:", tokenFactory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });