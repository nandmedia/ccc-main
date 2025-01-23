require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    mainnet: {
      url: `http://0.0.0.0:${process.env.RPC_PORT || 8545}`,
      chainId: parseInt(process.env.NETWORK_ID || "1337"),
      accounts: {
        mnemonic: process.env.MNEMONIC || "test test test test test test test test test test test junk"
      },
      mining: {
        auto: true,
        interval: 5000
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
    data: "./data"
  },
  mocha: {
    timeout: 40000
  }
};