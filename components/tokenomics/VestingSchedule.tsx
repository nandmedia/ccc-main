"use client";

import { Card } from "@/components/ui/card";

const vestingDetails = [
  {
    category: "Development Fund",
    schedule: "1-year cliff followed by monthly vesting for 3-6 years",
    purpose: "Fund ecosystem tools, DApp infrastructure, marketing, and partnerships"
  },
  {
    category: "Team/Developers",
    schedule: "5-year cliff followed by monthly vesting over 5-9 years",
    purpose: "Build long-term trust and ensure team commitment"
  },
  {
    category: "Reserve Funds",
    schedule: "1-year cliff followed by monthly vesting for 3-4 years",
    purpose: "Emergency liquidity and strategic partnerships"
  }
];

export function VestingSchedule() {
  return (
    <Card className="p-6 bg-zinc-800">
      <h2 className="text-2xl font-semibold text-orange-500 mb-6">Vesting Schedule</h2>
      <div className="space-y-6">
        {vestingDetails.map((detail) => (
          <div key={detail.category} className="border-l-4 border-orange-500 pl-4">
            <h3 className="text-xl font-semibold text-white mb-2">{detail.category}</h3>
            <p className="text-zinc-400 mb-2">Schedule: {detail.schedule}</p>
            <p className="text-zinc-400">Purpose: {detail.purpose}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}