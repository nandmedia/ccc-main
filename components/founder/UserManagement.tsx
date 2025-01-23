"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Search, Ban, CheckCircle } from "lucide-react";

export function UserManagement() {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-zinc-800">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-semibold text-orange-500">User Management</h2>
          </div>
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search users..."
              className="bg-zinc-700 border-zinc-600"
            />
            <Button variant="ghost">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-6 gap-4 text-sm font-medium text-zinc-400 pb-2 border-b border-zinc-700">
            <div>Address</div>
            <div>Username</div>
            <div>KYC Status</div>
            <div>Balance</div>
            <div>Joined</div>
            <div>Actions</div>
          </div>

          {[1, 2, 3].map((i) => (
            <div key={i} className="grid grid-cols-6 gap-4 items-center py-2">
              <div className="text-sm text-zinc-300">0x1234...5678</div>
              <div className="text-sm text-zinc-300">User{i}</div>
              <div>
                {i === 1 ? (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500">
                    Pending
                  </span>
                )}
              </div>
              <div className="text-sm text-zinc-300">1,000 CCC</div>
              <div className="text-sm text-zinc-400">2024-02-{i}</div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  Details
                </Button>
                <Button variant="destructive" size="sm">
                  <Ban className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}