// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Staking is ReentrancyGuard, Ownable {
    IERC20 public stakingToken;
    
    uint256 public constant YEAR = 365 days;
    uint256 public apy = 1200; // 12% APY (basis points)
    uint256 public earlyWithdrawalFee = 500; // 5% fee (basis points)
    uint256 public minStakingPeriod = 7 days;
    
    struct Stake {
        uint256 amount;
        uint256 startTime;
        uint256 lastClaimTime;
    }
    
    mapping(address => Stake) public stakes;
    
    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event RewardsClaimed(address indexed user, uint256 amount);
    
    constructor(address _stakingToken) Ownable(msg.sender) {
        stakingToken = IERC20(_stakingToken);
    }
    
    function stake(uint256 amount) external nonReentrant {
        require(amount > 0, "Cannot stake 0");
        require(
            stakingToken.transferFrom(msg.sender, address(this), amount),
            "Transfer failed"
        );
        
        Stake storage userStake = stakes[msg.sender];
        if (userStake.amount > 0) {
            // Claim existing rewards before adding new stake
            _claimRewards(msg.sender);
        }
        
        userStake.amount += amount;
        userStake.startTime = block.timestamp;
        userStake.lastClaimTime = block.timestamp;
        
        emit Staked(msg.sender, amount);
    }
    
    function withdraw(uint256 amount) external nonReentrant {
        Stake storage userStake = stakes[msg.sender];
        require(userStake.amount >= amount, "Insufficient stake");
        
        // Claim rewards before withdrawal
        _claimRewards(msg.sender);
        
        uint256 fee = 0;
        if (block.timestamp - userStake.startTime < minStakingPeriod) {
            fee = (amount * earlyWithdrawalFee) / 10000;
        }
        
        uint256 withdrawAmount = amount - fee;
        userStake.amount -= amount;
        
        require(
            stakingToken.transfer(msg.sender, withdrawAmount),
            "Transfer failed"
        );
        
        if (fee > 0) {
            // Transfer fee to contract owner
            require(
                stakingToken.transfer(owner(), fee),
                "Fee transfer failed"
            );
        }
        
        emit Withdrawn(msg.sender, withdrawAmount);
    }
    
    function claimRewards() external nonReentrant {
        _claimRewards(msg.sender);
    }
    
    function _claimRewards(address user) internal {
        Stake storage userStake = stakes[user];
        require(userStake.amount > 0, "No stake found");
        
        uint256 rewards = calculateRewards(user);
        if (rewards > 0) {
            require(
                stakingToken.transfer(user, rewards),
                "Rewards transfer failed"
            );
            userStake.lastClaimTime = block.timestamp;
            
            emit RewardsClaimed(user, rewards);
        }
    }
    
    function calculateRewards(address user) public view returns (uint256) {
        Stake memory userStake = stakes[user];
        if (userStake.amount == 0) return 0;
        
        uint256 duration = block.timestamp - userStake.lastClaimTime;
        return (userStake.amount * apy * duration) / (YEAR * 10000);
    }
    
    function getStakeInfo(address user) external view returns (
        uint256 stakedAmount,
        uint256 pendingRewards,
        uint256 stakingStartTime,
        uint256 lastRewardsClaim
    ) {
        Stake memory userStake = stakes[user];
        return (
            userStake.amount,
            calculateRewards(user),
            userStake.startTime,
            userStake.lastClaimTime
        );
    }
    
    function setAPY(uint256 _apy) external onlyOwner {
        require(_apy <= 10000, "APY too high"); // Max 100%
        apy = _apy;
    }
    
    function setEarlyWithdrawalFee(uint256 _fee) external onlyOwner {
        require(_fee <= 3000, "Fee too high"); // Max 30%
        earlyWithdrawalFee = _fee;
    }
    
    function setMinStakingPeriod(uint256 _period) external onlyOwner {
        require(_period <= 30 days, "Period too long");
        minStakingPeriod = _period;
    }
}