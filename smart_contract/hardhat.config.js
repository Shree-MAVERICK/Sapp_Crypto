require( "@nomiclabs/hardhat-waffle" );

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/lKZYOUjPn5uB95NZC4NqZl5GhwyIbIs2",
      accounts: [ 'a736ca411a810fcece39eb126144684f51cab1d4cac4363fed2f957f4a80001f' ]
    }
  }
}