var StepanToken = artifacts.require("./StepanToken.sol");

module.exports = function(deployer) {
  deployer.deploy(StepanToken);
};
