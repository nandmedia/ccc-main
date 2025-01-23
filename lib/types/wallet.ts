export interface Transaction {
  id: string;
  type: 'send' | 'receive';
  amount: number;
  currency: string;
  address: string;
  timestamp: Date;
  status: 'pending' | 'completed' | 'failed';
  fee?: number;
}

export interface WalletBalance {
  currency: string;
  amount: number;
  usdValue: number;
}

export interface NetworkFee {
  slow: number;
  medium: number;
  fast: number;
  recommended: 'slow' | 'medium' | 'fast';
}

export interface CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  network: string;
  testnet: boolean;
}