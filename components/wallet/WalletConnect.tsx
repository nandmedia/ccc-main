"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useWallet } from "@/hooks/useWallet";

export function WalletConnect() {
  const { account, balance, isConnected, connect } = useWallet();

  return (
    <Card className="p-6 bg-zinc-800">
      <div className="flex items-center gap-3 mb-6">
        <Wallet className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl font-semibold text-orange-500">Wallet Connection</h2>
      </div>
      {!isConnected ? (
        <Button 
          onClick={connect}
          className="w-full bg-orange-500 hover:bg-orange-600"
        >
          Connect MetaMask
        </Button>
      ) : (
        <div className="space-y-2 text-zinc-300">
          <p>Wallet Connected</p>
          <p className="text-sm text-zinc-400">Address: {account}</p>
          <p className="text-sm text-zinc-400">Balance: {balance} ETH</p>
        </div>
      )}
    </Card>
  );
}