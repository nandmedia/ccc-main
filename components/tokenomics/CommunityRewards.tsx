"use client";

import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const rewards = [
  {
    action: "Social Media Engagement",
    reward: "1,000 CCC",
    details: "Follow and interact with Cipher Chain on Twitter, YouTube, Telegram, GitHub, LinkedIn, TikTok, Discord, Instagram"
  },
  {
    action: "Wallet Setup & KYC",
    reward: "100 CCC",
    details: "Download CCC wallet DApp & complete KYC verification"
  },
  {
    action: "Initial Deposit",
    reward: "900 CCC",
    details: "Deposit $100 within 7 days of signing up"
  }
];

export function CommunityRewards() {
  return (
    <Card className="p-6 bg-zinc-800">
      <h2 className="text-2xl font-semibold text-orange-500 mb-6">Community Rewards</h2>
      <div className="grid gap-6">
        {rewards.map((reward) => (
          <div key={reward.action} className="flex items-start gap-4">
            <div className="mt-1">
              <Check className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{reward.action}</h3>
              <p className="text-orange-400 font-medium">Reward: {reward.reward}</p>
              <p className="text-zinc-400">{reward.details}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}