```tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Video, Settings, Users } from "lucide-react";

export function LiveStreamManager() {
  const [streamSettings, setStreamSettings] = useState({
    title: "",
    description: "",
    scheduledFor: "",
    isPrivate: false
  });

  const handleStartStream = () => {
    // Implement stream start logic
    console.log("Starting stream with settings:", streamSettings);
  };

  return (
    <div className="space-y-4">
      <Card className="p-4 bg-zinc-700">
        <h3 className="text-lg font-semibold text-white mb-4">Stream Settings</h3>
        <div className="space-y-4">
          <Input
            placeholder="Stream Title"
            value={streamSettings.title}
            onChange={(e) => setStreamSettings({ ...streamSettings, title: e.target.value })}
            className="bg-zinc-600 border-zinc-500"
          />
          <Input
            placeholder="Description"
            value={streamSettings.description}
            onChange={(e) => setStreamSettings({ ...streamSettings, description: e.target.value })}
            className="bg-zinc-600 border-zinc-500"
          />
          <Input
            type="datetime-local"
            value={streamSettings.scheduledFor}
            onChange={(e) => setStreamSettings({ ...streamSettings, scheduledFor: e.target.value })}
            className="bg-zinc-600 border-zinc-500"
          />
          <Button onClick={handleStartStream} className="w-full bg-orange-500 hover:bg-orange-600">
            <Video className="w-4 h-4 mr-2" />
            Start Stream
          </Button>
        </div>
      </Card>
    </div>
  );
}
```