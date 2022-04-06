const Token1 = artifacts.require("Token1");
const Token2 = artifacts.require("Token2");
const CSAMM = artifacts.require("CSAMM");

module.exports = function  (deployer) {
  deployer.then(async () => {
    try {
      const token1 = await Token1.deployed();
      const token2 = await Token2.deployed();
      await deployer.deploy(CSAMM, token1.address, token2.address);

      const csamm = await CSAMM.deployed();

      console.log(`CSAMM deployed at: ${csamm.address}`);

    } catch (error) {
      console.log(error)
    }
  })
};
