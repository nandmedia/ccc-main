import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export function useWallet() {
  const [account, setAccount] = useState<string>('');
  const [balance, setBalance] = useState<string>('0');
  const [isConnected, setIsConnected] = useState(false);

  async function connect() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(accounts[0]);
        setAccount(accounts[0]);
        setBalance(ethers.utils.formatEther(balance));
        setIsConnected(true);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      window.open('https://metamask.io/download/', '_blank');
    }
  }

  async function signMessage(message: string) {
    if (!isConnected) return;
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      return await signer.signMessage(message);
    } catch (error) {
      console.error('Error signing message:', error);
    }
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setAccount(accounts[0] || '');
        setIsConnected(!!accounts[0]);
      });
    }
  }, []);

  return {
    account,
    balance,
    isConnected,
    connect,
    signMessage
  };
}