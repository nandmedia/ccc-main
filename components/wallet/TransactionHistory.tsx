"use client";

import { Card } from "@/components/ui/card";
import { History } from "lucide-react";

export function TransactionHistory() {
  return (
    <Card className="p-6 bg-zinc-800">
      <div className="flex items-center gap-3 mb-6">
        <History className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl font-semibold text-orange-500">Transaction History</h2>
      </div>
      <div className="text-zinc-400 text-center py-8">
        No transactions yet
      </div>
    </Card>
  );
}