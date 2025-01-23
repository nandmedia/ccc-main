"use client";

import { NFT } from '@/types/nft';
import { NFTCard } from './NFTCard';

interface NFTGridProps {
  nfts: NFT[];
  onBuy?: (nft: NFT) => void;
}

export function NFTGrid({ nfts, onBuy }: NFTGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {nfts.map((nft) => (
        <NFTCard key={nft.id} nft={nft} onBuy={onBuy} />
      ))}
    </div>
  );
}