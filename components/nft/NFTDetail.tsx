"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { NFT } from '@/types/nft';
import { Heart, Share2, ArrowLeft } from 'lucide-react';

interface NFTDetailProps {
  nft: NFT;
  onBack: () => void;
  onBuy: (nft: NFT) => void;
}

export function NFTDetail({ nft, onBack, onBuy }: NFTDetailProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="flex items-center text-zinc-400 hover:text-orange-500 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to marketplace
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={nft.image}
            alt={nft.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{nft.name}</h1>
            <p className="text-zinc-400">{nft.description}</p>
          </div>

          <Card className="p-4 bg-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-zinc-400">Current Price</p>
                <p className="text-2xl font-bold text-white">
                  {nft.price} {nft.currency}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <Button
              onClick={() => onBuy(nft)}
              className="w-full bg-orange-500 hover:bg-orange-600"
            >
              Buy Now
            </Button>
          </Card>

          <Card className="p-4 bg-zinc-800">
            <h2 className="text-lg font-semibold text-white mb-4">Creator</h2>
            <div className="flex items-center gap-3">
              <Image
                src={nft.creator.avatar || ''}
                alt={nft.creator.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-white">{nft.creator.name}</p>
                <p className="text-sm text-zinc-400">{nft.creator.address}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-zinc-800">
            <h2 className="text-lg font-semibold text-white mb-4">Collection</h2>
            <p className="text-zinc-400">{nft.collection}</p>
          </Card>
        </div>
      </div>
    </div>
  );
}