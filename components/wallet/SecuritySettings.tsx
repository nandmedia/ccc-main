"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Shield, Key, Smartphone } from "lucide-react";

export function SecuritySettings() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [multiSigEnabled, setMultiSigEnabled] = useState(false);
  const [hardwareWalletEnabled, setHardwareWalletEnabled] = useState(false);

  return (
    <Card className="p-6 bg-zinc-800">
      <h2 className="text-2xl font-semibold text-orange-500 mb-6">Security Settings</h2>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Smartphone className="w-5 h-5 text-orange-500" />
            <div>
              <h3 className="text-white font-medium">Two-Factor Authentication</h3>
              <p className="text-sm text-zinc-400">Add an extra layer of security to your account</p>
            </div>
          </div>
          <Switch
            checked={twoFactorEnabled}
            onCheckedChange={setTwoFactorEnabled}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Key className="w-5 h-5 text-orange-500" />
            <div>
              <h3 className="text-white font-medium">Multi-Signature Wallet</h3>
              <p className="text-sm text-zinc-400">Require multiple signatures for transactions</p>
            </div>
          </div>
          <Switch
            checked={multiSigEnabled}
            onCheckedChange={setMultiSigEnabled}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-orange-500" />
            <div>
              <h3 className="text-white font-medium">Hardware Wallet Support</h3>
              <p className="text-sm text-zinc-400">Connect your hardware wallet for enhanced security</p>
            </div>
          </div>
          <Switch
            checked={hardwareWalletEnabled}
            onCheckedChange={setHardwareWalletEnabled}
          />
        </div>

        <Button className="w-full bg-orange-500 hover:bg-orange-600">
          Save Security Settings
        </Button>
      </div>
    </Card>
  );
}