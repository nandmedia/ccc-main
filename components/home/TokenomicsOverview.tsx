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
    <div className="bg-zinc-800/50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">
          Tokenomics Overview
        </h2>
        <Card className="p-6 bg-zinc-800">
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
      </div>
    </div>
  );
}