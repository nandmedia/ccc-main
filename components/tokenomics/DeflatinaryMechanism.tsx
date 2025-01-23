"use client";

import { Card } from "@/components/ui/card";
import { Flame } from "lucide-react";

export function DeflatinaryMechanism() {
  return (
    <Card className="p-6 bg-zinc-800">
      <div className="flex items-center gap-3 mb-6">
        <Flame className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl font-semibold text-orange-500">Deflationary Mechanism</h2>
      </div>
      <div className="space-y-4">
        <div className="bg-zinc-700 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-2">Transaction Burn</h3>
          <p className="text-zinc-400">0.5% of each transaction is automatically burned, permanently reducing the total supply</p>
        </div>
        <div className="bg-zinc-700 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-2">Gas Fee Distribution</h3>
          <p className="text-zinc-400">30% of gas fees are burned, 40% go to validators, and 30% to the development fund</p>
        </div>
      </div>
    </Card>
  );
}