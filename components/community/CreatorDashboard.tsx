```tsx
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LiveStreamManager } from "./LiveStreamManager";
import { AMASessionManager } from "./AMASessionManager";
import { CommunityMetrics } from "./CommunityMetrics";
import { Users, Video, MessageSquare } from "lucide-react";

export function CreatorDashboard() {
  return (
    <Card className="p-6 bg-zinc-800">
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl font-semibold text-orange-500">Creator Dashboard</h2>
      </div>

      <CommunityMetrics />

      <Tabs defaultValue="streams" className="mt-6">
        <TabsList className="grid w-full grid-cols-2 bg-zinc-700">
          <TabsTrigger value="streams">
            <Video className="w-4 h-4 mr-2" />
            Live Streams
          </TabsTrigger>
          <TabsTrigger value="ama">
            <MessageSquare className="w-4 h-4 mr-2" />
            AMA Sessions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="streams">
          <LiveStreamManager />
        </TabsContent>

        <TabsContent value="ama">
          <AMASessionManager />
        </TabsContent>
      </Tabs>
    </Card>
  );
}
```