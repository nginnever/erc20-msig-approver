'use strict'

const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
const tokenAbi = require('./tokenAbi.js')
const walletAbi = require('./walletAbi.js')

// Token address 0xfe00c2ae296e752490425817339977a155e989fe
var tokenAddr = '0xfa8c5242b2d07d926a19994b4a21c35940a52837'
var tokenContract = web3.eth.contract(tokenAbi)
var tokenInst = tokenContract.at(tokenAddr)

// Gnosis multisig wallet address 0xF8Bb210EeA6bCD92f060C58cA7d5a2b84FF03cD3
var walletAddr = '0x8402468d7170b627b470a400824fd1be4089bc9d'
var walletContract = web3.eth.contract(walletAbi)
var walletInst = walletContract.at(walletAddr)

// check properly formatted address
if(!web3._extend.utils.isAddress(process.argv[2])) {
  console.log("supplied address is incorrect")
  return
}

// check supplied token amount is greater than 0
if(process.argv[3] < 0) {
  console.log("must approve greater than 0 tokens")
  return
}

//console.log(web3.eth.accounts)

// Arg1: Address we are approving funds to
// Arg2: The amount to approve
var myCallData = tokenInst.approve.getData(process.argv[2], process.argv[3]);

var tx = walletInst.submitTransaction(tokenAddr, 0, myCallData, {from:web3.eth.accounts[3], gas:1000000})

console.log(process.argv[3] + " Tokens have been approved... tx hash: " + tx)
