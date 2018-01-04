# Polymath Reserve Multisig

The purpose of multisig wallets is to increase security by requiring multiple
parties to agree on transactions before execution. Transactions can be executed
only when confirmed by a predefined number of owners.

<img src="./Polymath.png"/>

The Polymath reserve is used to store company funds and requires a board
approval to sign any transaction.

# Contract Address

Testnet:
[https://ropsten.etherscan.io/address/0x105a76e425a4f08bc42a7fe96cf592ed5c401fbd](https://ropsten.etherscan.io/address/0x105a76e425a4f08bc42a7fe96cf592ed5c401fbd)

## Smart Contract

The smart contract is a clone of the battle tested
[Gnosis Multisig Wallet](https://github.com/gnosis/MultiSigWallet/blob/master/contracts/MultiSigWallet.sol).

## Features

* Can hold Ether and all kind of tokens with multisig support
* Easy to use offline signing (cold wallet) support
* Integration with web3 wallets (Metamask, Mist, Parity, etc)
* Transaction data and log decoding, makes transactions more readable
* Interacting with any contracts with UI support
* Hardware wallet support (Ledger Wallet)
* Optional email notifications when an event is triggered or you are required to
  sign a transaction

## Reviewers

The following people have reviewed the code at the time of the linked commit:

* Stefan George ([Georgi87](https://github.com/Georgi87)):
  [b9405cc30de4615e325b1d46c71cdef670bdeadc](https://github.com/ConsenSys/MultiSigWallet/tree/b9405cc30de4615e325b1d46c71cdef670bdeadc)

## Being used by

* [Aragon](https://aragon.one/)
* [Bancor](https://www.bancor.network/)
* Brace
* [District0x](https://district0x.io/)
* [Golem](https://golem.network/)
* [MysteriumNetwork](https://mysterium.network/)
* [Weifund](http://weifund.io/)
* StabL
