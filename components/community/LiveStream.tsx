"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Video, Users, MessageSquare, Share2 } from "lucide-react";

export function LiveStream() {
  const [isLive, setIsLive] = useState(false);
  const [viewerCount, setViewerCount] = useState(0);
  const [streamTitle, setStreamTitle] = useState("");

  const startStream = () => {
    if (!streamTitle) return;
    setIsLive(true);
    // Implement actual streaming logic here
  };

  return (
    <div className="space-y-4">
      {!isLive ? (
        <Card className="p-6 bg-zinc-800">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">Start Live Stream</h2>
          <div className="space-y-4">
            <Input
              value={streamTitle}
              onChange={(e) => setStreamTitle(e.target.value)}
              placeholder="Stream Title"
              className="bg-zinc-700 border-zinc-600"
            />
            <Button 
              onClick={startStream}
              className="w-full bg-orange-500 hover:bg-orange-600"
            >
              <Video className="w-4 h-4 mr-2" />
              Go Live
            </Button>
          </div>
        </Card>
      ) : (
        <Card className="p-6 bg-zinc-800">
          <div className="aspect-video bg-zinc-900 rounded-lg mb-4 flex items-center justify-center">
            <Video className="w-12 h-12 text-zinc-600" />
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">{streamTitle}</h2>
            <div className="flex items-center gap-4">
              <span className="flex items-center text-zinc-400">
                <Users className="w-4 h-4 mr-1" />
                {viewerCount}
              </span>
              <Button variant="destructive" onClick={() => setIsLive(false)}>
                End Stream
              </Button>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              <MessageSquare className="w-4 h-4 mr-2" />
              Chat
            </Button>
            <Button variant="outline" className="flex-1">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}