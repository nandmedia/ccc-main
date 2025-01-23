"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Coins, Plus } from "lucide-react";

export function CreateToken() {
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    decimals: "18",
    initialSupply: "",
    baseToken: "",
    baseTokenAmount: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement token creation logic here
    console.log("Creating token:", formData);
  };

  return (
    <Card className="p-6 bg-zinc-800">
      <div className="flex items-center gap-3 mb-6">
        <Coins className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl font-semibold text-orange-500">Create New Token</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Token Name</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-zinc-700 border-zinc-600"
              placeholder="My Token"
              required
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Token Symbol</label>
            <Input
              value={formData.symbol}
              onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
              className="bg-zinc-700 border-zinc-600"
              placeholder="MTK"
              required
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Decimals</label>
            <Input
              value={formData.decimals}
              onChange={(e) => setFormData({ ...formData, decimals: e.target.value })}
              className="bg-zinc-700 border-zinc-600"
              type="number"
              min="0"
              max="18"
              required
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Initial Supply</label>
            <Input
              value={formData.initialSupply}
              onChange={(e) => setFormData({ ...formData, initialSupply: e.target.value })}
              className="bg-zinc-700 border-zinc-600"
              type="number"
              min="1"
              required
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Base Token</label>
            <Select 
              value={formData.baseToken}
              onValueChange={(value) => setFormData({ ...formData, baseToken: value })}
            >
              <SelectTrigger className="bg-zinc-700 border-zinc-600">
                <SelectValue placeholder="Select base token" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eth">ETH</SelectItem>
                <SelectItem value="usdc">USDC</SelectItem>
                <SelectItem value="usdt">USDT</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Base Token Amount</label>
            <Input
              value={formData.baseTokenAmount}
              onChange={(e) => setFormData({ ...formData, baseTokenAmount: e.target.value })}
              className="bg-zinc-700 border-zinc-600"
              type="number"
              min="0"
              placeholder="Amount of base token for liquidity"
            />
          </div>
        </div>

        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
          Create Token
        </Button>
      </form>
    </Card>
  );
}