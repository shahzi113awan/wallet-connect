import { WalletConnectConnector } from "@web3-react/walletconnect-connector";


const ALL_SUPPORTED_CHAIN_IDS = [1,3, 4, 5]

const INFURA_NETWORK_URLS = {
  1: "https://mainnet.infura.io/v3/49b6fd52341b451895ffd30042b84114",
  3: "https://ropsten.infura.io/v3/49b6fd52341b451895ffd30042b84114",
  4: "https://rinkeby.infura.io/v3/49b6fd52341b451895ffd30042b84114",
  5: "https://goeril.infura.io/v3/49b6fd52341b451895ffd30042b84114",
}


const walletconnect = new WalletConnectConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
  rpc: INFURA_NETWORK_URLS,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true
});

export const connectors = {
  walletConnect: walletconnect,
};
