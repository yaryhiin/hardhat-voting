const { getNamedAccounts, ethers } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config")
const { assert } = require("chai");

developmentChains.includes(network.name) ? describe.skip :
    describe("Voting", async function () {
        let voting;
        let deployer;
        this.beforeEach(async function () {
            deployer = (await getNamedAccounts()).deployer;
            voting = await ethers.getContractAt("Voting", deployer);

        })

        it("Allows people to become candidates and vote", async function () {
            const name = "Check";
            await voting.becomeCandidate(name);
            await voting.Vote(deployer);
            const votes = await voting.getVotes(deployer);
            const candidateName = await voting.getCandidateName(deployer);
            const candidateAddress = await voting.getCandidates(0)
            assert.equal(votes, 1);
            assert.equal(candidateName, name);
            assert.equal(candidateAddress, deployer);
        })
    })