"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Heart, Share2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { NFT } from '@/types/nft';

interface NFTCardProps {
  nft: NFT;
  onBuy?: (nft: NFT) => void;
}

export function NFTCard({ nft, onBuy }: NFTCardProps) {
  const [isLiked, setIsLiked] = useState(nft.isLiked || false);
  const [likes, setLikes] = useState(nft.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: nft.name,
        text: nft.description,
        url: window.location.href,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const handleBuy = () => {
    if (onBuy) {
      onBuy(nft);
    }
  };

  return (
    <Card className="overflow-hidden bg-zinc-800 hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-square">
        <Image
          src={nft.image}
          alt={nft.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{nft.name}</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={handleLike}
              className="p-2 rounded-full hover:bg-zinc-700 transition-colors"
            >
              <Heart
                className={`w-5 h-5 ${isLiked ? 'fill-orange-500 text-orange-500' : 'text-zinc-400'}`}
              />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-zinc-700 transition-colors"
            >
              <Share2 className="w-5 h-5 text-zinc-400" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src={nft.creator.avatar || ''}
            alt={nft.creator.name}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-sm text-zinc-400">{nft.creator.name}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-400">Price</p>
            <p className="text-lg font-semibold text-white">
              {nft.price} {nft.currency}
            </p>
          </div>
          <Button
            onClick={handleBuy}
            className="bg-orange-500 hover:bg-orange-600"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </Card>
  );
}