"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Settings as SettingsIcon, Bell, Shield, DollarSign } from "lucide-react";

export function Settings() {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-zinc-800">
        <div className="flex items-center gap-3 mb-6">
          <SettingsIcon className="w-6 h-6 text-orange-500" />
          <h2 className="text-2xl font-semibold text-orange-500">Platform Settings</h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <Bell className="w-5 h-5 text-orange-500" />
              Notifications
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-zinc-400">Email Alerts</label>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-zinc-400">Security Alerts</label>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-zinc-400">Price Alerts</label>
                <Switch />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-500" />
              Security
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-zinc-400">Two-Factor Authentication</label>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-zinc-400">IP Whitelist</label>
                <Switch />
              </div>
              <Input
                placeholder="Backup Email Address"
                className="bg-zinc-700 border-zinc-600"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-orange-500" />
              Fee Settings
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-zinc-400 block mb-2">Transaction Fee (%)</label>
                <Input
                  type="number"
                  placeholder="0.5"
                  className="bg-zinc-700 border-zinc-600"
                />
              </div>
              <div>
                <label className="text-sm text-zinc-400 block mb-2">NFT Marketplace Fee (%)</label>
                <Input
                  type="number"
                  placeholder="2.5"
                  className="bg-zinc-700 border-zinc-600"
                />
              </div>
            </div>
          </div>

          <Button className="w-full bg-orange-500 hover:bg-orange-600">
            Save Changes
          </Button>
        </div>
      </Card>
    </div>
  );
}