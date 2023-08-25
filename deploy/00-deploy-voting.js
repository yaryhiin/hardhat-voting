const {developmentChains} = require("../helper-hardhat-config");
const {network} = require("hardhat");
const {verify} = require("../utils/verify");

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();

    const voting = await deploy("Voting", {
        from: deployer,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1
    })

    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        // Verify
        await verify(voting.address);
    }
    log("--------------------------------------");
}
module.exports.tags = ["all", "voting"];