import { NFT } from '@/types/nft';

export const mockNFTs: NFT[] = [
  {
    id: '1',
    name: 'Cosmic Voyager #001',
    description: 'A journey through the digital cosmos',
    image: 'https://images.unsplash.com/photo-1634973357973-f2ed2657db3c',
    price: 0.5,
    currency: 'ETH',
    creator: {
      name: 'CryptoArtist',
      address: '0x1234...5678',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde'
    },
    likes: 42,
    collection: 'Cosmic Voyagers'
  },
  {
    id: '2',
    name: 'Digital Dreams #023',
    description: 'Where reality meets imagination',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
    price: 0.8,
    currency: 'ETH',
    creator: {
      name: 'DigitalDreamer',
      address: '0x8765...4321',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12'
    },
    likes: 29,
    collection: 'Digital Dreams'
  },
  {
    id: '3',
    name: 'Neon Genesis #105',
    description: 'Cyberpunk aesthetics in the digital age',
    image: 'https://images.unsplash.com/photo-1634973357978-c78a6c559c84',
    price: 1.2,
    currency: 'ETH',
    creator: {
      name: 'NeonArtist',
      address: '0x9876...5432',
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d'
    },
    likes: 56,
    collection: 'Neon Genesis'
  }
];