"use client";

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { NFTCollection } from '@/types/nft';
import { ImageIcon, TrendingUp } from 'lucide-react';

interface CollectionCardProps {
  collection: NFTCollection;
  onClick: (collection: NFTCollection) => void;
}

export function CollectionCard({ collection, onClick }: CollectionCardProps) {
  return (
    <Card 
      className="overflow-hidden bg-zinc-800 hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => onClick(collection)}
    >
      <div className="relative aspect-[2/1]">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{collection.name}</h3>
          <div className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-zinc-400" />
            <span className="text-sm text-zinc-400">{collection.items.length} items</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src={collection.creator.avatar || ''}
            alt={collection.creator.name}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-sm text-zinc-400">{collection.creator.name}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-zinc-700">
          <div>
            <p className="text-sm text-zinc-400">Floor Price</p>
            <p className="text-lg font-semibold text-white">{collection.floorPrice} ETH</p>
          </div>
          <div>
            <p className="text-sm text-zinc-400">Volume</p>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <p className="text-lg font-semibold text-white">{collection.totalVolume} ETH</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}