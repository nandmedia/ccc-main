"use client";

import { Card } from "@/components/ui/card";
import { Milestone, Flag, Rocket } from "lucide-react";

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Foundation",
    items: ["Token Launch", "Wallet Development", "Community Building"],
    icon: <Milestone className="w-6 h-6 text-orange-500" />,
  },
  {
    phase: "Phase 2",
    title: "Growth",
    items: ["DEX Integration", "Staking Platform", "NFT Marketplace"],
    icon: <Flag className="w-6 h-6 text-orange-500" />,
  },
  {
    phase: "Phase 3",
    title: "Expansion",
    items: ["Cross-chain Bridge", "Governance", "Enterprise Solutions"],
    icon: <Rocket className="w-6 h-6 text-orange-500" />,
  },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-zinc-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent mb-12">
          Cipher Chain Roadmap
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {roadmapItems.map((item) => (
            <Card key={item.phase} className="p-6 bg-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-white">{item.phase}</h3>
              </div>
              <h4 className="text-lg text-orange-400 mb-4">{item.title}</h4>
              <ul className="space-y-2">
                {item.items.map((listItem) => (
                  <li key={listItem} className="text-zinc-400">
                    • {listItem}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}