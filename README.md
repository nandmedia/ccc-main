# Cipher Chain

A next-generation blockchain platform for secure, scalable, and decentralized digital assets.

## Features

- Custom ERC-20 token (CCC)
- NFT Marketplace
- Staking Platform
- Liquidity Pools
- Token Factory
- Web3 Wallet Integration

## Prerequisites

- Node.js 20.x
- Docker and Docker Compose
- Git

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/your-username/cipher-chain.git
cd cipher-chain
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```
PRIVATE_KEY=your_wallet_private_key
CIPHER_CHAIN_RPC_URL=http://localhost:8545
NETWORK_ID=1337
```

5. Start local blockchain node:
```bash
npm run start:chain
```

6. Deploy smart contracts:
```bash
npm run deploy:cipherchain
```

7. Start development server:
```bash
npm run dev
```

## Project Structure

```
cipher-chain/
├── app/                    # Next.js pages and routing
├── components/            # React components
├── contracts/            # Solidity smart contracts
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and types
├── public/              # Static assets
├── scripts/             # Deployment and setup scripts
├── styles/             # Global styles
└── tests/              # Test files
```

## Smart Contracts

- `CipherChainToken.sol`: Main ERC-20 token contract
- `NFTMarketplace.sol`: NFT marketplace implementation
- `Staking.sol`: Token staking and rewards
- `LiquidityPoolManager.sol`: AMM liquidity pool management
- `TokenFactory.sol`: Custom token creation

## Development

```bash
# Run tests
npm test

# Run contract tests
npm run test:contracts

# Generate test coverage
npm run coverage

# Deploy to testnet
npm run deploy:testnet

# Deploy to mainnet
npm run deploy:mainnet
```

## Testing

The project includes:
- Unit tests for smart contracts
- Integration tests for frontend components
- End-to-end tests using Cypress

Run all tests:
```bash
npm test
```

## Deployment

1. Configure deployment network in `hardhat.config.ts`
2. Set environment variables
3. Deploy contracts:
```bash
npm run deploy:cipherchain
```

## Security

- All smart contracts are audited
- Implements OpenZeppelin security standards
- Regular security updates and patches

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details