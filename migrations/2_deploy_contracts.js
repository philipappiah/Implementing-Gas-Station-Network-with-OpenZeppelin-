
var Auction = artifacts.require("./Counter.sol");

module.exports = function(deployer) {
  deployer.deploy(Auction);
 
};
