'use strict'

const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
const tokenAbi = require('./tokenAbi.js')
const walletAbi = require('./walletAbi.js')

// Token address 0xfe00c2ae296e752490425817339977a155e989fe
var tokenAddr = '0xfe00c2ae296e752490425817339977a155e989fe'
var tokenContract = web3.eth.contract(tokenAbi)
var tokenInst = tokenContract.at(tokenAddr)

// Gnosis multisig wallet address 0xF8Bb210EeA6bCD92f060C58cA7d5a2b84FF03cD3
var walletAddr = '0xF8Bb210EeA6bCD92f060C58cA7d5a2b84FF03cD3'
var walletContract = web3.eth.contract(walletAbi)
var walletInst = walletContract.at(walletAddr)

console.log(process.argv[2])
console.log(process.argv[3])
var myCallData = tokenInst.approve.getData(process.argv[2], process.argv[3]);
console.log(myCallData)

walletInst.submitTransaction(tokenAddr, 0, myCallData, {from:web3.eth.accounts[3], gas:500000})
//console.log(web3.eth.getBalance(web3.eth.accounts[0]))