// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./CipherChainToken.sol";

contract NFTMarketplace is ERC721, ReentrancyGuard, Ownable {
    CipherChainToken public cccToken;
    
    uint256 public platformFeePercent = 2; // 2% platform fee
    uint256 public constant MAX_ROYALTY = 10; // 10% max royalty
    
    struct NFTItem {
        uint256 tokenId;
        address creator;
        uint256 price;
        uint256 royaltyPercent;
        bool isListed;
        string uri;
    }
    
    mapping(uint256 => NFTItem) public nftItems;
    uint256 private _tokenIds;
    
    event NFTMinted(
        uint256 indexed tokenId,
        address indexed creator,
        uint256 royaltyPercent,
        string uri
    );
    
    event NFTListed(
        uint256 indexed tokenId,
        address indexed seller,
        uint256 price
    );
    
    event NFTSold(
        uint256 indexed tokenId,
        address indexed seller,
        address indexed buyer,
        uint256 price
    );
    
    constructor(address _cccToken) 
        ERC721("Cipher Chain NFT", "CCNFT") 
        Ownable(msg.sender) 
    {
        cccToken = CipherChainToken(_cccToken);
    }
    
    function mintNFT(
        string memory uri,
        uint256 royaltyPercent
    ) external nonReentrant returns (uint256) {
        require(royaltyPercent <= MAX_ROYALTY, "Royalty too high");
        
        uint256 gasFee = calculateMintingFee(bytes(uri).length);
        require(
            cccToken.transferFrom(msg.sender, address(this), gasFee),
            "Gas fee transfer failed"
        );
        
        _tokenIds++;
        uint256 newTokenId = _tokenIds;
        
        _mint(msg.sender, newTokenId);
        
        nftItems[newTokenId] = NFTItem({
            tokenId: newTokenId,
            creator: msg.sender,
            price: 0,
            royaltyPercent: royaltyPercent,
            isListed: false,
            uri: uri
        });
        
        emit NFTMinted(newTokenId, msg.sender, royaltyPercent, uri);
        
        return newTokenId;
    }
    
    function listNFT(uint256 tokenId, uint256 price) external nonReentrant {
        require(ownerOf(tokenId) == msg.sender, "Not token owner");
        require(price > 0, "Price must be positive");
        
        nftItems[tokenId].price = price;
        nftItems[tokenId].isListed = true;
        
        emit NFTListed(tokenId, msg.sender, price);
    }
    
    function buyNFT(uint256 tokenId) external nonReentrant {
        NFTItem storage item = nftItems[tokenId];
        require(item.isListed, "NFT not listed");
        
        address seller = ownerOf(tokenId);
        uint256 price = item.price;
        
        // Calculate fees
        uint256 platformFee = (price * platformFeePercent) / 100;
        uint256 royaltyFee = (price * item.royaltyPercent) / 100;
        uint256 sellerAmount = price - platformFee - royaltyFee;
        
        // Transfer CCC tokens
        require(
            cccToken.transferFrom(msg.sender, address(this), platformFee),
            "Platform fee transfer failed"
        );
        require(
            cccToken.transferFrom(msg.sender, item.creator, royaltyFee),
            "Royalty transfer failed"
        );
        require(
            cccToken.transferFrom(msg.sender, seller, sellerAmount),
            "Seller payment failed"
        );
        
        // Transfer NFT
        _transfer(seller, msg.sender, tokenId);
        item.isListed = false;
        
        emit NFTSold(tokenId, seller, msg.sender, price);
    }
    
    function calculateMintingFee(uint256 dataSize) public pure returns (uint256) {
        // Base fee of 10 CCC
        uint256 baseFee = 10 * 10**18;
        
        // Additional fee based on data size (1 CCC per KB)
        uint256 sizeFeeFactor = dataSize / 1024;
        uint256 sizeFee = sizeFeeFactor * 10**18;
        
        return baseFee + sizeFee;
    }
    
    function setPlatformFee(uint256 _newFee) external onlyOwner {
        require(_newFee <= 5, "Fee cannot exceed 5%");
        platformFeePercent = _newFee;
    }
    
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        return nftItems[tokenId].uri;
    }
}