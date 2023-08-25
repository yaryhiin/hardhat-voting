require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: { // Adding new network
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 6
    },
    localHost: {
      url: "http://127.0.0.1:8545/",
      // Accounts are pushed by hardhat
      chainId: 31337
    }
  },
  //solidity: "0.8.19",
  solidity: {
    compilers: [ // We can add more than 1 version of solidity compilers
      {version: "0.8.8"},
    ]
  },
  etherscan: { // Adding our Etherscan verify
    apiKey: ETHERSCAN_API_KEY
  },
  gasReporter: { // Adding gas report
    enabled: true, // Enabling it
    outputFile: "gas-report.txt", // Storing gas report in file
    noColors: true,
  },
  namedAccounts: {
    deployer: {
      default: 0
    },
    user: {
      default: 1
    }
  }
};
