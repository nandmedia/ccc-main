import { useState, useCallback } from 'react';
import { ethers } from 'ethers';
import StakingABI from '@/contracts/abis/Staking.json';

export function useStaking(contractAddress: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const stake = useCallback(async (amount: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, StakingABI, signer);
      
      const tx = await contract.stake(ethers.utils.parseEther(amount));
      await tx.wait();
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Transaction failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [contractAddress]);

  const withdraw = useCallback(async (amount: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, StakingABI, signer);
      
      const tx = await contract.withdraw(ethers.utils.parseEther(amount));
      await tx.wait();
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Transaction failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [contractAddress]);

  const claimRewards = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, StakingABI, signer);
      
      const tx = await contract.claimRewards();
      await tx.wait();
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Transaction failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [contractAddress]);

  const getStakeInfo = useCallback(async (address: string) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, StakingABI, provider);
      
      const info = await contract.getStakeInfo(address);
      return {
        stakedAmount: ethers.utils.formatEther(info.stakedAmount),
        pendingRewards: ethers.utils.formatEther(info.pendingRewards),
        stakingStartTime: new Date(info.stakingStartTime.toNumber() * 1000),
        lastRewardsClaim: new Date(info.lastRewardsClaim.toNumber() * 1000)
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch stake info');
      return null;
    }
  }, [contractAddress]);

  return {
    stake,
    withdraw,
    claimRewards,
    getStakeInfo,
    isLoading,
    error
  };
}