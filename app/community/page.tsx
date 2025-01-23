```tsx
"use client";

import { CreatorDashboard } from "@/components/community/CreatorDashboard";
import { CommentSection } from "@/components/community/CommentSection";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function CommunityHub() {
  return (
    <div className="min-h-screen bg-zinc-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Users className="w-8 h-8 text-orange-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Community Hub
          </h1>
        </div>

        <div className="grid gap-8">
          <CreatorDashboard />
          
          <Card className="p-6 bg-zinc-800">
            <h2 className="text-2xl font-semibold text-orange-500 mb-6">Community Discussions</h2>
            <CommentSection />
          </Card>
        </div>
      </div>
    </div>
  );
}
```