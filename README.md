# erc20-msig-approver
Calls ERC20 Approves from Gnosis Multisig Wallet

### Install

  ```
  cd erc20-msig-approver
  npm i
  ```
 
 ### Place Msig and Token address in script
 
  ```
  // Gnosis multisig wallet address 0xF8Bb210EeA6bCD92f060C58cA7d5a2b84FF03cD3
  var walletAddr = '0xF8Bb210EeA6bCD92f060C58cA7d5a2b84FF03cD3'
  
  // Token address 0xfe00c2ae296e752490425817339977a155e989fe
  var tokenAddr = '0x90ab6d52445a39de851d3521ea031862ca6e16e9'
  ```
  
  ### Run the script
  
  #### Be sure to account for 8 decimal places ie 1000000000000 = 10000 tokens
  ```
  cd src
  node approve.js [isser contract address] [amount]
  ```
  
  ex
  
  ```
  node approve.js 0x793a93d85e6fb723337fe0302a54125bcc084cce 1000000000000
  ```
