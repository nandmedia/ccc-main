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

export function RoadmapSection() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">
        Roadmap
      </h2>
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
  );
}