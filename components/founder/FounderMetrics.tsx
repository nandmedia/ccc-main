"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Users, Coins, ArrowUpRight, DollarSign, Activity } from "lucide-react";

const mockData = [
  { date: "2024-01", users: 1200, volume: 45000, price: 0.12 },
  { date: "2024-02", users: 1800, volume: 75000, price: 0.15 },
  { date: "2024-03", users: 2200, volume: 95000, price: 0.18 },
];

export function FounderMetrics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Total Users"
          value="2,234"
          change="+12.5%"
          icon={<Users className="w-5 h-5 text-orange-500" />}
        />
        <MetricCard
          title="Trading Volume"
          value="$95,000"
          change="+8.3%"
          icon={<Activity className="w-5 h-5 text-orange-500" />}
        />
        <MetricCard
          title="Token Price"
          value="$0.18"
          change="+20%"
          icon={<DollarSign className="w-5 h-5 text-orange-500" />}
        />
        <MetricCard
          title="Total Staked"
          value="450,000 CCC"
          change="+5.2%"
          icon={<Coins className="w-5 h-5 text-orange-500" />}
        />
      </div>

      <Card className="p-6 bg-zinc-800">
        <h3 className="text-xl font-semibold text-white mb-6">Platform Growth</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "none",
                  borderRadius: "0.5rem",
                }}
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#F97316"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="volume"
                stroke="#22C55E"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}

function MetricCard({ title, value, change, icon }: { title: string; value: string; change: string; icon: React.ReactNode }) {
  return (
    <Card className="p-6 bg-zinc-800">
      <div className="flex items-center justify-between mb-4">
        {icon}
        <div className="flex items-center text-green-500 text-sm">
          {change}
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </div>
      </div>
      <h3 className="text-zinc-400 text-sm">{title}</h3>
      <p className="text-2xl font-bold text-white mt-1">{value}</p>
    </Card>
  );
}