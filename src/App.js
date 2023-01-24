import logo from './logo.svg';
import './App.css';
import { Web3ReactProvider } from '@web3-react/core';
import Web from './components/Web'
import { ethers } from 'ethers';

function App() {
  const getLibrary = (provider) => {
    return new ethers.providers.Web3Provider(provider);
  }
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
   <Web />
    </Web3ReactProvider>
  );
}

export default App;
