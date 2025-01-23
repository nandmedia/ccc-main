"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Code, Pause, Play, Shield } from "lucide-react";

export function ContractManagement() {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-zinc-800">
        <div className="flex items-center gap-3 mb-6">
          <Code className="w-6 h-6 text-orange-500" />
          <h2 className="text-2xl font-semibold text-orange-500">Contract Administration</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Contract Status</h3>
            <div className="grid grid-cols-2 gap-4">
              <Button className="w-full bg-red-500 hover:bg-red-600">
                <Pause className="w-4 h-4 mr-2" />
                Pause
              </Button>
              <Button className="w-full bg-green-500 hover:bg-green-600">
                <Play className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Contract Upgrades</h3>
            <div className="flex gap-2">
              <Input
                placeholder="New Implementation Address"
                className="bg-zinc-700 border-zinc-600"
              />
              <Button className="bg-orange-500 hover:bg-orange-600">
                Upgrade
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-zinc-800">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-orange-500" />
          <h2 className="text-2xl font-semibold text-orange-500">Security Controls</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Access Control</h3>
            <div className="space-y-2">
              <Input
                placeholder="Address"
                className="bg-zinc-700 border-zinc-600"
              />
              <div className="grid grid-cols-2 gap-2">
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  Grant Role
                </Button>
                <Button className="w-full bg-red-500 hover:bg-red-600">
                  Revoke Role
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Emergency Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="destructive" className="w-full">
                Emergency Stop
              </Button>
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                Transfer Ownership
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}