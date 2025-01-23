"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FounderMetrics } from "@/components/founder/FounderMetrics";
import { TokenManagement } from "@/components/founder/TokenManagement";
import { ContractManagement } from "@/components/founder/ContractManagement";
import { UserManagement } from "@/components/founder/UserManagement";
import { Settings } from "@/components/founder/Settings";
import { Shield } from "lucide-react";

export default function FounderDashboard() {
  return (
    <div className="min-h-screen bg-zinc-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-orange-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Founder Dashboard
          </h1>
        </div>

        <Tabs defaultValue="metrics" className="space-y-8">
          <TabsList className="grid grid-cols-5 bg-zinc-800">
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
            <TabsTrigger value="token">Token</TabsTrigger>
            <TabsTrigger value="contracts">Contracts</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="metrics">
            <FounderMetrics />
          </TabsContent>

          <TabsContent value="token">
            <TokenManagement />
          </TabsContent>

          <TabsContent value="contracts">
            <ContractManagement />
          </TabsContent>

          <TabsContent value="users">
            <UserManagement />
          </TabsContent>

          <TabsContent value="settings">
            <Settings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}