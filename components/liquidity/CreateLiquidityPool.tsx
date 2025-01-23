"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Droplets } from "lucide-react";

export function CreateLiquidityPool() {
  const [formData, setFormData] = useState({
    token: "",
    baseToken: "",
    tokenAmount: "",
    baseTokenAmount: "",
    slippageTolerance: "0.5"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement liquidity pool creation logic here
    console.log("Creating liquidity pool:", formData);
  };

  return (
    <Card className="p-6 bg-zinc-800">
      <div className="flex items-center gap-3 mb-6">
        <Droplets className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl font-semibold text-orange-500">Create Liquidity Pool</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Token</label>
            <Select 
              value={formData.token}
              onValueChange={(value) => setFormData({ ...formData, token: value })}
            >
              <SelectTrigger className="bg-zinc-700 border-zinc-600">
                <SelectValue placeholder="Select token" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="custom">Custom Token</SelectItem>
                <SelectItem value="eth">ETH</SelectItem>
                <SelectItem value="usdc">USDC</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Token Amount</label>
            <Input
              value={formData.tokenAmount}
              onChange={(e) => setFormData({ ...formData, tokenAmount: e.target.value })}
              className="bg-zinc-700 border-zinc-600"
              type="number"
              min="0"
              step="0.000001"
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
              step="0.000001"
              required
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Slippage Tolerance (%)</label>
            <Input
              value={formData.slippageTolerance}
              onChange={(e) => setFormData({ ...formData, slippageTolerance: e.target.value })}
              className="bg-zinc-700 border-zinc-600"
              type="number"
              min="0.1"
              max="5"
              step="0.1"
              required
            />
          </div>
        </div>

        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
          Create Pool
        </Button>
      </form>
    </Card>
  );
}