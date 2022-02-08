require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/rFHgIPcbXMuSl8xPRlrwcEvCBSm4EOZ5',
      accounts: [`0xaed18517b02566597ac057394f9ab24468c5f31215030ac25df06448db7d909e`],

    },
    rospten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/reLJH-_RQXFf2eH5dr5rCV-CkN3TjH5s',
      accounts: [`0xaed18517b02566597ac057394f9ab24468c5f31215030ac25df06448db7d909e`],

    },
    matic: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/N5gZqsy9imVP8JOYdhT2BxusQMUJ8Hm0',
      accounts: [`0xaed18517b02566597ac057394f9ab24468c5f31215030ac25df06448db7d909e`],

    },
  },
};
