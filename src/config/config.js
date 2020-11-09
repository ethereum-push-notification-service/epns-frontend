import * as dotenv from "dotenv";
dotenv.config();

export default {
  /**
   * Web3 Related
   */
  etherscanAPI: process.env.REACT_APP_ETHERSCAN_API,

  infuraAPI: {
    projectID: process.env.REACT_APP_INFURA_PROJECT_ID,
    projectSecret: process.env.REACT_APP_INFURA_PROJECT_SECRET,
  },

  alchemyAPI: process.env.REACT_APP_ALCHEMY_API,

  web3MainnetProvider: process.env.REACT_APP_MAINNET_WEB3_PROVIDER,
  web3MainnetNetwork: process.env.REACT_APP_MAINNET_WEB3_NETWORK,
  web3MainnetSocket: process.env.REACT_APP_MAINNET_WEB3_SOCKET,

  web3RopstenProvider: process.env.REACT_APP_ROPSTEN_WEB3_PROVIDER,
  web3RopstenNetwork: process.env.REACT_APP_ROPSTEN_WEB3_NETWORK,
  web3RopstenSocket: process.env.REACT_APP_ROPSTEN_WEB3_SOCKET,

  /**
   * EPNS Related
   */
  deployedContract: process.env.REACT_APP_EPNS_DEPLOYED_CONTRACT,
  deployedContractABI: require('./epns_contract.json'),
};
