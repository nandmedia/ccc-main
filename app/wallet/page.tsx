"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WalletConnect } from "@/components/wallet/WalletConnect";
import { KYCVerification } from "@/components/wallet/KYCVerification";
import { WalletBalance } from "@/components/wallet/WalletBalance";
import { TransactionHistory } from "@/components/wallet/TransactionHistory";
import { SendCrypto } from "@/components/wallet/SendCrypto";
import { ReceiveCrypto } from "@/components/wallet/ReceiveCrypto";
import { SecuritySettings } from "@/components/wallet/SecuritySettings";
import { AuthForm } from "@/components/wallet/AuthForm";

export default function WalletPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent mb-12">
          CCC Wallet
        </h1>
        
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto">
            <AuthForm />
          </div>
        ) : (
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4 space-y-8">
              <WalletConnect />
              <WalletBalance />
              <KYCVerification email="cipherchaincoin@gmail.com" />
            </div>
            <div className="md:col-span-8">
              <Tabs defaultValue="send" className="space-y-8">
                <TabsList className="grid grid-cols-4 bg-zinc-800">
                  <TabsTrigger value="send">Send</TabsTrigger>
                  <TabsTrigger value="receive">Receive</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>
                <TabsContent value="send">
                  <SendCrypto />
                </TabsContent>
                <TabsContent value="receive">
                  <ReceiveCrypto />
                </TabsContent>
                <TabsContent value="history">
                  <TransactionHistory />
                </TabsContent>
                <TabsContent value="security">
                  <SecuritySettings />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}