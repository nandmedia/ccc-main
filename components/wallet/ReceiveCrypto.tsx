"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { QrCode, Copy, Check } from "lucide-react";

const SUPPORTED_CURRENCIES = [
  { id: "btc", name: "Bitcoin", symbol: "BTC" },
  { id: "eth", name: "Ethereum", symbol: "ETH" },
  { id: "ccc", name: "Cipher Chain Coin", symbol: "CCC" },
];

export function ReceiveCrypto() {
  const [currency, setCurrency] = useState("");
  const [copied, setCopied] = useState(false);
  const walletAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="p-6 bg-zinc-800">
      <h2 className="text-2xl font-semibold text-orange-500 mb-6">Receive Cryptocurrency</h2>
      
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

        <div className="bg-zinc-700 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-zinc-400">Your Wallet Address</span>
            <Button
              variant="ghost"
              size="sm"
              className="text-orange-500"
              onClick={handleCopy}
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>
          <p className="text-sm text-white break-all">{walletAddress}</p>
        </div>

        <div className="flex justify-center p-8 bg-zinc-700 rounded-lg">
          <QrCode className="w-32 h-32 text-orange-500" />
        </div>

        <p className="text-sm text-zinc-400 text-center">
          Send only {currency || "supported cryptocurrencies"} to this address.
          Sending other assets may result in permanent loss.
        </p>
      </div>
    </Card>
  );
}