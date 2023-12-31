# Voting Smart Contract

This project contains a Voting smart contract built using Solidity. Users can become candidates, vote for candidates, and get information about the candidates and their votes.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#Prerequisites)
- [Installation](#Installation)
- [Configuration](#Configuration)
- [Tests](#Tests)
- [Interacting](#Interacting)
- [Deployment](#deployment)
- [License](#license)

## Overview

The Voting smart contract allows participants to become candidates, receive votes, and view voting results. It prevents double voting and ensures fairness in the voting process.

## Prerequisites

To run this project, you need to have Node.js, npm, and Hardhat installed. Make sure you also have a compatible Ethereum development network available.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yaryhiin/voting-smart-contract.git
cd voting-smart-contract
```

2. Install dependecies:

```bash
npm install
```

## Configuration

Adjust any necessary configuration settings in the project files, such as network configuration in Hardhat scripts.

## Tests

Run tests to ensure the functionality of the smart contract:

```bash
npm test
```

## Interacting

Become a candidate by providing your name:

```js
becomeCandidate(string memory _candidateName);
```

Vote for a candidate by providing their address:

```js
Vote(address _candidate);
```

Get the number of votes received by a candidate:

```js
getVotes(address _candidate)
```

Get the address of a candidate at the specified index:

```js
getCandidates(uint256 index);
```

Get the name of a candidate:

```js
getCandidateName(address _candidate);
```

## Deployment

To deploy the Voting smart contract to a specific network:

1. Configure network settings in the Hardhat configuration.
2. Run the deployment script:

```bash
npm deploy-sepolia
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE.txt) file for details.
