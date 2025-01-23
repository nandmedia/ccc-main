```tsx
"use client";

import { Card } from "@/components/ui/card";
import { Users, MessageSquare, Video, TrendingUp } from "lucide-react";

export function CommunityMetrics() {
  const metrics = [
    {
      label: "Total Followers",
      value: "1,234",
      icon: <Users className="w-5 h-5 text-orange-500" />,
      change: "+12%"
    },
    {
      label: "Active Discussions",
      value: "56",
      icon: <MessageSquare className="w-5 h-5 text-orange-500" />,
      change: "+8%"
    },
    {
      label: "Stream Views",
      value: "4,567",
      icon: <Video className="w-5 h-5 text-orange-500" />,
      change: "+15%"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="p-4 bg-zinc-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {metric.icon}
              <div>
                <p className="text-sm text-zinc-400">{metric.label}</p>
                <p className="text-2xl font-bold text-white">{metric.value}</p>
              </div>
            </div>
            <div className="flex items-center text-green-500">
              <TrendingUp className="w-4 h-4 mr-1" />
              {metric.change}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
```