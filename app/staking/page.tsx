"use client";

import { StakingDashboard } from "@/components/staking/StakingDashboard";
import { CoinsIcon } from "lucide-react";

export default function StakingPage() {
  return (
    <div className="min-h-screen bg-zinc-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <CoinsIcon className="w-8 h-8 text-orange-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Staking Dashboard
          </h1>
        </div>

        <StakingDashboard />
      </div>
    </div>
  );
}