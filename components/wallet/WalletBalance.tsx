"use client";

import { Card } from "@/components/ui/card";
import { Coins } from "lucide-react";

export function WalletBalance() {
  return (
    <Card className="p-6 bg-zinc-800">
      <div className="flex items-center gap-3 mb-6">
        <Coins className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl font-semibold text-orange-500">Balance</h2>
      </div>
      <div className="space-y-4">
        <div className="bg-zinc-700 p-4 rounded-lg">
          <p className="text-zinc-400">Available CCC</p>
          <p className="text-2xl font-bold text-white">0.00 CCC</p>
        </div>
        <div className="bg-zinc-700 p-4 rounded-lg">
          <p className="text-zinc-400">Development Fund Allocation</p>
          <p className="text-2xl font-bold text-white">Pending KYC</p>
        </div>
      </div>
    </Card>
  );
}