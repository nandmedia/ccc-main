"use client";

import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const tokenomicsData = [
  { name: "Pre Sale", value: 35, color: "#f97316" },
  { name: "Development Fund", value: 30, color: "#84cc16" },
  { name: "Team/Developers", value: 20, color: "#06b6d4" },
  { name: "Community Rewards", value: 5, color: "#8b5cf6" },
  { name: "Reserve Funds", value: 10, color: "#ec4899" },
];

export function TokenomicsOverview() {
  return (
    <Card className="p-6 bg-zinc-800">
      <h2 className="text-2xl font-semibold text-orange-500 mb-6">Token Distribution</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={tokenomicsData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={160}
              paddingAngle={5}
              dataKey="value"
            >
              {tokenomicsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 text-center">
        <p className="text-zinc-400">
          Total Supply: <span className="text-white font-semibold">100,000,000 CCC</span>
        </p>
      </div>
    </Card>
  );
}