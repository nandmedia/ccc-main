"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CoinsIcon, TrendingUp, Clock, AlertCircle } from "lucide-react";

export function StakingDashboard() {
  const [stakeAmount, setStakeAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleStake = async () => {
    setIsLoading(true);
    try {
      // Implement staking logic
      console.log("Staking:", stakeAmount);
    } catch (error) {
      console.error("Staking failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWithdraw = async () => {
    setIsLoading(true);
    try {
      // Implement withdrawal logic
      console.log("Withdrawing:", withdrawAmount);
    } catch (error) {
      console.error("Withdrawal failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClaimRewards = async () => {
    setIsLoading(true);
    try {
      // Implement rewards claim logic
      console.log("Claiming rewards");
    } catch (error) {
      console.error("Claim failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <StakingMetric
          title="Total Staked"
          value="0.00 CCC"
          icon={<CoinsIcon className="w-5 h-5 text-orange-500" />}
        />
        <StakingMetric
          title="APY"
          value="12.00%"
          icon={<TrendingUp className="w-5 h-5 text-green-500" />}
        />
        <StakingMetric
          title="Lock Period"
          value="7 days"
          icon={<Clock className="w-5 h-5 text-blue-500" />}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-zinc-800">
          <h3 className="text-xl font-semibold text-white mb-4">Stake Tokens</h3>
          <div className="space-y-4">
            <Input
              type="number"
              placeholder="Amount to stake"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
              className="bg-zinc-700 border-zinc-600"
            />
            <Button
              onClick={handleStake}
              disabled={isLoading}
              className="w-full bg-orange-500 hover:bg-orange-600"
            >
              Stake
            </Button>
          </div>
        </Card>

        <Card className="p-6 bg-zinc-800">
          <h3 className="text-xl font-semibold text-white mb-4">Withdraw Tokens</h3>
          <div className="space-y-4">
            <Input
              type="number"
              placeholder="Amount to withdraw"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              className="bg-zinc-700 border-zinc-600"
            />
            <Button
              onClick={handleWithdraw}
              disabled={isLoading}
              className="w-full bg-orange-500 hover:bg-orange-600"
            >
              Withdraw
            </Button>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-zinc-800">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">Pending Rewards</h3>
          <span className="text-2xl font-bold text-orange-500">0.00 CCC</span>
        </div>
        <Button
          onClick={handleClaimRewards}
          disabled={isLoading}
          className="w-full bg-orange-500 hover:bg-orange-600"
        >
          Claim Rewards
        </Button>
      </Card>

      <Card className="p-4 bg-zinc-800/50 border border-orange-500/20">
        <div className="flex items-center gap-2 text-orange-500">
          <AlertCircle className="w-5 h-5" />
          <p className="text-sm">
            Early withdrawal (before 7 days) will incur a 5% fee.
          </p>
        </div>
      </Card>
    </div>
  );
}

function StakingMetric({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <Card className="p-6 bg-zinc-800">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h3 className="text-lg font-medium text-zinc-300">{title}</h3>
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
    </Card>
  );
}