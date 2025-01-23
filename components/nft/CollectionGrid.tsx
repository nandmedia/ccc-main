"use client";

import { NFTCollection } from '@/types/nft';
import { CollectionCard } from './CollectionCard';

interface CollectionGridProps {
  collections: NFTCollection[];
  onSelect: (collection: NFTCollection) => void;
}

export function CollectionGrid({ collections, onSelect }: CollectionGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {collections.map((collection) => (
        <CollectionCard
          key={collection.id}
          collection={collection}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}