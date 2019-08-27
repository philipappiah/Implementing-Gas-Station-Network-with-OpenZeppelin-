INITIAL STEP:
You can clone the openzeppelin start-up project from https://github.com/OpenZeppelin/starter-kit. It contains React, OpenZeppelin SDK & OpenZeppelin Contracts. You can also create your own contract from start up. 

STEP 1:
Implement openzeppelin gas station network interface in your smart contract

STEP 2:
Deploy smart contract either locally, on Ropsten, Rinkeby or Main Ethereum network
  a. cd into the project and run this command to install OpenZeppelin cli 'https://github.com/OpenZeppelin/starter-kit'.
  b. Run 'oz init' to initialize the project
  c. Run 'oz create' to compile and deploy the contract. Follow the steps to set up the project and deploy.
  

step 3:
After deployment, the contract balance is empty and therefore cannot fund non ether transactions and therefore we will need to fund our smart contract.

STEP 4:
To fund, the smart contract on a test network like Ropsteen, we will us the online-gsn-tool by following this link https://gsn.openzeppelin.com/recipients
b. To fund the smart contract on a local network we will use 'oz-gsn fund-recipient --recipient "contract address" ' command.

STEP 5:
We then have to provide our smart contract's address and specify the amount to send to the contract and voila, we are good to go. We have now set up a Gas station Network in our dapp.
Users can now interact with the smart contract without even having metamask installed or any ether wallet installed.

STEP 6:
Non-ether users will have to pay for the gaseless transaction by other means such as credit card, paypal et al.





