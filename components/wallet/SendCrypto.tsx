"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, AlertCircle } from "lucide-react";
import { NetworkFee } from "@/lib/types/wallet";

const SUPPORTED_CURRENCIES = [
  { id: "btc", name: "Bitcoin", symbol: "BTC" },
  { id: "eth", name: "Ethereum", symbol: "ETH" },
  { id: "ccc", name: "Cipher Chain Coin", symbol: "CCC" },
];

export function SendCrypto() {
  const [currency, setCurrency] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [fees, setFees] = useState<NetworkFee>({
    slow: 0.0001,
    medium: 0.0002,
    fast: 0.0003,
    recommended: "medium"
  });
  const [selectedFee, setSelectedFee] = useState<"slow" | "medium" | "fast">("medium");

  const handleSend = async () => {
    // Implement send transaction logic
    console.log("Sending transaction...");
  };

  return (
    <Card className="p-6 bg-zinc-800">
      <h2 className="text-2xl font-semibold text-orange-500 mb-6">Send Cryptocurrency</h2>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-zinc-400 mb-2 block">Select Currency</label>
          <Select value={currency} onValueChange={setCurrency}>
            <SelectTrigger className="bg-zinc-700 border-zinc-600">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              {SUPPORTED_CURRENCIES.map((curr) => (
                <SelectItem key={curr.id} value={curr.id}>
                  {curr.name} ({curr.symbol})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm text-zinc-400 mb-2 block">Recipient Address</label>
          <Input
            type="text"
            placeholder="Enter wallet address"
            className="bg-zinc-700 border-zinc-600"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-zinc-400 mb-2 block">Amount</label>
          <Input
            type="number"
            placeholder="0.00"
            className="bg-zinc-700 border-zinc-600"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-zinc-400 mb-2 block">Transaction Fee</label>
          <div className="grid grid-cols-3 gap-4">
            {(["slow", "medium", "fast"] as const).map((speed) => (
              <button
                key={speed}
                className={`p-3 rounded-lg border ${
                  selectedFee === speed
                    ? "border-orange-500 bg-orange-500/10"
                    : "border-zinc-600 bg-zinc-700"
                }`}
                onClick={() => setSelectedFee(speed)}
              >
                <div className="text-sm font-medium text-white capitalize">{speed}</div>
                <div className="text-xs text-zinc-400">{fees[speed]} {currency}</div>
              </button>
            ))}
          </div>
        </div>

        <Button
          className="w-full bg-orange-500 hover:bg-orange-600"
          onClick={handleSend}
        >
          <ArrowRight className="w-4 h-4 mr-2" />
          Send Transaction
        </Button>
      </div>
    </Card>
  );
}