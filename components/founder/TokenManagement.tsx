"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Coins, Lock, Users, ArrowRight } from "lucide-react";

export function TokenManagement() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="p-6 bg-zinc-800">
        <div className="flex items-center gap-3 mb-6">
          <Coins className="w-6 h-6 text-orange-500" />
          <h2 className="text-2xl font-semibold text-orange-500">Token Controls</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Mint Tokens</label>
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Amount"
                className="bg-zinc-700 border-zinc-600"
              />
              <Button className="bg-orange-500 hover:bg-orange-600">
                Mint
              </Button>
            </div>
          </div>

          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Burn Tokens</label>
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Amount"
                className="bg-zinc-700 border-zinc-600"
              />
              <Button variant="destructive">
                Burn
              </Button>
            </div>
          </div>

          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Transfer Tokens</label>
            <div className="space-y-2">
              <Input
                placeholder="Recipient Address"
                className="bg-zinc-700 border-zinc-600"
              />
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Amount"
                  className="bg-zinc-700 border-zinc-600"
                />
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-zinc-800">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="w-6 h-6 text-orange-500" />
          <h2 className="text-2xl font-semibold text-orange-500">Vesting Controls</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Add Vesting Schedule</label>
            <div className="space-y-2">
              <Input
                placeholder="Beneficiary Address"
                className="bg-zinc-700 border-zinc-600"
              />
              <Input
                type="number"
                placeholder="Amount"
                className="bg-zinc-700 border-zinc-600"
              />
              <div className="grid grid-cols-2 gap-2">
                <Input
                  type="number"
                  placeholder="Cliff (months)"
                  className="bg-zinc-700 border-zinc-600"
                />
                <Input
                  type="number"
                  placeholder="Duration (months)"
                  className="bg-zinc-700 border-zinc-600"
                />
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                Create Schedule
              </Button>
            </div>
          </div>

          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Revoke Vesting</label>
            <div className="flex gap-2">
              <Input
                placeholder="Beneficiary Address"
                className="bg-zinc-700 border-zinc-600"
              />
              <Button variant="destructive">
                Revoke
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}