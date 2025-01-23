"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { NFTCollection } from '@/types/nft';
import { ArrowLeft, TrendingUp, Users, DollarSign } from 'lucide-react';
import { NFTGrid } from './NFTGrid';

interface CollectionDetailProps {
  collection: NFTCollection;
  onBack: () => void;
  onNFTSelect: (nftId: string) => void;
}

export function CollectionDetail({ collection, onBack, onNFTSelect }: CollectionDetailProps) {
  return (
    <div className="space-y-8">
      <button
        onClick={onBack}
        className="flex items-center text-zinc-400 hover:text-orange-500"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to collections
      </button>

      <div className="relative h-64 rounded-xl overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{collection.name}</h1>
          <div className="flex items-center gap-2">
            <Image
              src={collection.creator.avatar || ''}
              alt={collection.creator.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-zinc-400">by {collection.creator.name}</span>
          </div>
        </div>
      </div>

      <p className="text-zinc-400">{collection.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 bg-zinc-800">
          <div className="flex items-center gap-3">
            <DollarSign className="w-5 h-5 text-orange-500" />
            <div>
              <p className="text-sm text-zinc-400">Floor Price</p>
              <p className="text-xl font-bold text-white">{collection.floorPrice} ETH</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-zinc-800">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <div>
              <p className="text-sm text-zinc-400">Total Volume</p>
              <p className="text-xl font-bold text-white">{collection.totalVolume} ETH</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-zinc-800">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-orange-500" />
            <div>
              <p className="text-sm text-zinc-400">Items</p>
              <p className="text-xl font-bold text-white">{collection.items.length}</p>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Collection Items</h2>
        <NFTGrid nfts={collection.items} onBuy={(nft) => onNFTSelect(nft.id)} />
      </div>
    </div>
  );
}