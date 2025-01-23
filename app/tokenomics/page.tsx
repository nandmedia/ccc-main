"use client";

import { TokenomicsOverview } from "@/components/tokenomics/TokenomicsOverview";
import { SalePhases } from "@/components/tokenomics/SalePhases";
import { VestingSchedule } from "@/components/tokenomics/VestingSchedule";
import { CommunityRewards } from "@/components/tokenomics/CommunityRewards";
import { DeflatinaryMechanism } from "@/components/tokenomics/DeflatinaryMechanism";

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-zinc-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent mb-12">
          Cipher Chain Coin (CCC) Tokenomics
        </h1>
        
        <div className="space-y-16">
          <TokenomicsOverview />
          <SalePhases />
          <VestingSchedule />
          <CommunityRewards />
          <DeflatinaryMechanism />
        </div>
      </div>
    </div>
  );
}