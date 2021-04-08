const Adoption = artifacts.require("Adoption");

module.exports = function(_deployer) {
  _deployer.deploy(Adoption);
  // Use deployer to state migration tasks.
};
