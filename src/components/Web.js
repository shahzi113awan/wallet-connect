import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors";
import { Contract, providers } from "ethers";
import { NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI } from './constants'

export default function Home() {
 

  const card = {
    background: "#999",
    maxWidth: "600px",
    margin: "0 auto",
    borderRadius: "8px",
    padding: "20px",
    fontSize: "1.5rem"
  }

  const walletButton = {
    border: "1px solid black",
    padding: "10px",
    borderRadius: "4px",
    maxWidth: "fit-content",
    margin: "10px auto",
    color: "white",
    cursor: "pointer"
  }

  const { library, chainId, account, activate, deactivate, active } = useWeb3React();
  const [name, setName] = useState()
  const [ENS, setENS] = useState()
  const [loading, setLoading] = useState(false)

 activate(connectors.walletConnect, (err,ee) => {
      window.alert(err,ee)

    });

  // Set MM/walletConnect provider in localStorage
  const setProvider = (type) => { window.localStorage.setItem("provider", type) };

  // Unset MM/walletConnect provider in localStorage
  const refreshState = () => { window.localStorage.setItem("provider", undefined) };

  const disconnect = () => {
    refreshState();
    deactivate();
    setName()
  };

 

  const lookupENS = async () => {
    const provider = await library.provider;
    const web3Provider = new providers.Web3Provider(provider)
    console.log({ account })
    const _ens = await web3Provider.lookupAddress(account)
    if (_ens) setENS(_ens)
  }


 

  const connectWalletConnect = async () => {
    let isCancelled = false;
    await activate(connectors.walletConnect, () => {
      window.alert("Connection Rejected");
      isCancelled = true;
    });

    if (!isCancelled) {
      setProvider("walletConnect");
      window.alert("Connected Successfully");
    }
  }


  // useEffect(() => {
  //   const provider = window.localStorage.getItem("provider");
  //   if (provider) activate(connectors[provider]);
  // }, [activate]);

  // useEffect(() => {
  //   if (!account) return;
  //   if (!library) return;
  //   lookupENS().then(() => {
  //     console.log("DONE")
  //   }).catch(err => console.log('err', err))

  // }, [account, library])

  return (

    <div style={card}>
    
      {
        !account && (
          <>
            <p onClick={()=>connectWalletConnect()} style={walletButton}>WalletConnect</p>
          </>
        )
      }
    </div>

  );
}
