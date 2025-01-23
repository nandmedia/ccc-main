```tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageSquare, Calendar } from "lucide-react";

export function AMASessionManager() {
  const [session, setSession] = useState({
    topic: "",
    description: "",
    date: "",
    duration: "",
    maxParticipants: ""
  });

  const handleScheduleAMA = () => {
    // Implement AMA scheduling logic
    console.log("Scheduling AMA session:", session);
  };

  return (
    <div className="space-y-4">
      <Card className="p-4 bg-zinc-700">
        <h3 className="text-lg font-semibold text-white mb-4">Schedule AMA Session</h3>
        <div className="space-y-4">
          <Input
            placeholder="Topic"
            value={session.topic}
            onChange={(e) => setSession({ ...session, topic: e.target.value })}
            className="bg-zinc-600 border-zinc-500"
          />
          <Input
            placeholder="Description"
            value={session.description}
            onChange={(e) => setSession({ ...session, description: e.target.value })}
            className="bg-zinc-600 border-zinc-500"
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="datetime-local"
              value={session.date}
              onChange={(e) => setSession({ ...session, date: e.target.value })}
              className="bg-zinc-600 border-zinc-500"
            />
            <Input
              type="number"
              placeholder="Duration (minutes)"
              value={session.duration}
              onChange={(e) => setSession({ ...session, duration: e.target.value })}
              className="bg-zinc-600 border-zinc-500"
            />
          </div>
          <Input
            type="number"
            placeholder="Max Participants"
            value={session.maxParticipants}
            onChange={(e) => setSession({ ...session, maxParticipants: e.target.value })}
            className="bg-zinc-600 border-zinc-500"
          />
          <Button onClick={handleScheduleAMA} className="w-full bg-orange-500 hover:bg-orange-600">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule AMA
          </Button>
        </div>
      </Card>
    </div>
  );
}
```