export interface NFT {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  currency: string;
  creator: {
    name: string;
    address: string;
    avatar?: string;
  };
  likes: number;
  isLiked?: boolean;
  collection: string;
}

export interface NFTCollection {
  id: string;
  name: string;
  description: string;
  image: string;
  items: NFT[];
  creator: {
    name: string;
    address: string;
    avatar?: string;
  };
  floorPrice: number;
  totalVolume: number;
}