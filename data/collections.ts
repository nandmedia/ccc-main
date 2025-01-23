import { NFTCollection } from '@/types/nft';
import { mockNFTs } from './NFTs';

export const mockCollections: NFTCollection[] = [
  {
    id: 'cosmic-voyagers',
    name: 'Cosmic Voyagers',
    description: 'A collection of digital art exploring the cosmos and beyond',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
    items: mockNFTs.filter(nft => nft.collection === 'Cosmic Voyagers'),
    creator: {
      name: 'CryptoArtist',
      address: '0x1234...5678',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde'
    },
    floorPrice: 0.5,
    totalVolume: 120
  },
  {
    id: 'digital-dreams',
    name: 'Digital Dreams',
    description: 'Where imagination meets digital artistry',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead',
    items: mockNFTs.filter(nft => nft.collection === 'Digital Dreams'),
    creator: {
      name: 'DigitalDreamer',
      address: '0x8765...4321',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12'
    },
    floorPrice: 0.8,
    totalVolume: 85
  }
];