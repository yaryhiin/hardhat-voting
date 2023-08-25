const { deployments, ethers, getNamedAccounts } = require("hardhat");
const { assert, expect } = require("chai");
const { developmentChains } = require("../../helper-hardhat-config");

!developmentChains.includes(network.name) ? describe.skip :
    describe("Voting", async function () {
        let voting;
        let deployer;

        this.beforeEach(async function () {
            deployer = (await getNamedAccounts()).deployer;
            await deployments.fixture(["all"]);
            voting = await ethers.getContractAt("Voting", deployer);
        })

        describe("becomeCandidate", async function () {
            it("Adds candidate correctly", async function () {
                await voting.becomeCandidate("Check");
                const response = await voting.getCandidates(0);
                assert.equal(response, deployer);
            })
            it("Checks if already a candidate", async function () {
                await voting.becomeCandidate("Check");
                await expect(voting.becomeCandidate("Check 2")).to.be.reverted;
            })
            it("Sets candidate name correctly", async function () {
                const name = "Check";
                await voting.becomeCandidate(name);
                const response = await voting.getCandidateName(deployer);
                assert.equal(response, name);
            })
        })

        describe("Vote", async function () {
            it("Voting works correctly", async function () {
                await voting.Vote(deployer);
                const response = await voting.getVotes(deployer);
                assert.equal(response, 1);
            })
            it("Checks if already voted", async function () {
                await voting.Vote(deployer);
                await expect(voting.Vote(deployer)).to.be.reverted;
            })
        })
    })