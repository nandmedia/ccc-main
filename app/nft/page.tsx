"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { NFTGrid } from '@/components/nft/NFTGrid';
import { NFTDetail } from '@/components/nft/NFTDetail';
import { CreateNFT } from '@/components/nft/CreateNFT';
import { SearchBar } from '@/components/nft/SearchBar';
import { CollectionGrid } from '@/components/nft/CollectionGrid';
import { CollectionDetail } from '@/components/nft/CollectionDetail';
import { CreateToken } from '@/components/token/CreateToken';
import { CreateLiquidityPool } from '@/components/liquidity/CreateLiquidityPool';
import { mockNFTs } from '@/data/NFTs';
import { mockCollections } from '@/data/collections';
import { NFT, NFTCollection } from '@/types/nft';
import { Wallet, Plus, Grid, LayoutGrid, Coins, Droplets } from 'lucide-react';

type View = 'nfts' | 'collections' | 'nft-detail' | 'collection-detail' | 'create' | 'create-token' | 'create-pool';

export default function NFTMarketplace() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [currentView, setCurrentView] = useState<View>('nfts');
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);
  const [selectedCollection, setSelectedCollection] = useState<NFTCollection | null>(null);
  const [filteredNFTs, setFilteredNFTs] = useState(mockNFTs);
  const [filteredCollections, setFilteredCollections] = useState(mockCollections);

  const handleConnect = () => {
    setIsWalletConnected(true);
  };

  const handleSearch = (query: string) => {
    if (currentView === 'nfts') {
      const filtered = mockNFTs.filter(nft => 
        nft.name.toLowerCase().includes(query.toLowerCase()) ||
        nft.creator.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredNFTs(filtered);
    } else {
      const filtered = mockCollections.filter(collection => 
        collection.name.toLowerCase().includes(query.toLowerCase()) ||
        collection.creator.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCollections(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            NFT Marketplace
          </h1>
          <div className="flex items-center gap-4">
            {currentView === 'nfts' || currentView === 'collections' ? (
              <>
                <Button
                  onClick={() => setCurrentView(currentView === 'nfts' ? 'collections' : 'nfts')}
                  variant="outline"
                >
                  {currentView === 'nfts' ? (
                    <>
                      <LayoutGrid className="w-4 h-4 mr-2" />
                      View Collections
                    </>
                  ) : (
                    <>
                      <Grid className="w-4 h-4 mr-2" />
                      View NFTs
                    </>
                  )}
                </Button>
                <Button
                  onClick={() => setCurrentView('create')}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create NFT
                </Button>
                <Button
                  onClick={() => setCurrentView('create-token')}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  <Coins className="w-4 h-4 mr-2" />
                  Create Token
                </Button>
                <Button
                  onClick={() => setCurrentView('create-pool')}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  <Droplets className="w-4 h-4 mr-2" />
                  Create Pool
                </Button>
              </>
            ) : null}
            <Button
              onClick={handleConnect}
              className={`${
                isWalletConnected ? 'bg-green-500' : 'bg-orange-500 hover:bg-orange-600'
              }`}
            >
              <Wallet className="w-4 h-4 mr-2" />
              {isWalletConnected ? 'Connected' : 'Connect Wallet'}
            </Button>
          </div>
        </div>

        {(currentView === 'nfts' || currentView === 'collections') && (
          <div className="mb-8 max-w-xl">
            <SearchBar onSearch={handleSearch} />
          </div>
        )}

        {currentView === 'nfts' && (
          <NFTGrid 
            nfts={filteredNFTs} 
            onBuy={(nft) => {
              setSelectedNFT(nft);
              setCurrentView('nft-detail');
            }} 
          />
        )}

        {currentView === 'collections' && (
          <CollectionGrid 
            collections={filteredCollections}
            onSelect={(collection) => {
              setSelectedCollection(collection);
              setCurrentView('collection-detail');
            }}
          />
        )}

        {currentView === 'nft-detail' && selectedNFT && (
          <NFTDetail
            nft={selectedNFT}
            onBack={() => setCurrentView('nfts')}
            onBuy={(nft) => {
              if (!isWalletConnected) {
                alert('Please connect your wallet first');
                return;
              }
              console.log('Buying NFT:', nft);
            }}
          />
        )}

        {currentView === 'collection-detail' && selectedCollection && (
          <CollectionDetail
            collection={selectedCollection}
            onBack={() => setCurrentView('collections')}
            onNFTSelect={(nftId) => {
              const nft = selectedCollection.items.find(item => item.id === nftId);
              if (nft) {
                setSelectedNFT(nft);
                setCurrentView('nft-detail');
              }
            }}
          />
        )}

        {currentView === 'create' && (
          <div className="max-w-2xl mx-auto">
            <CreateNFT />
          </div>
        )}

        {currentView === 'create-token' && (
          <div className="max-w-2xl mx-auto">
            <CreateToken />
          </div>
        )}

        {currentView === 'create-pool' && (
          <div className="max-w-2xl mx-auto">
            <CreateLiquidityPool />
          </div>
        )}
      </div>
    </div>
  );
}