"use client";

import { Card } from "@/components/ui/card";

const phases = [
  {
    name: "Pre-sale",
    allocation: "15%",
    price: "$0.10",
    minPurchase: "1,000 CCC",
    maxPurchase: "50,000 CCC",
    duration: "30 days"
  },
  {
    name: "Private Sale",
    allocation: "15%",
    price: "$0.15",
    minPurchase: "5,000 CCC",
    maxPurchase: "100,000 CCC",
    duration: "45 days"
  },
  {
    name: "Public Sale",
    allocation: "10%",
    price: "$0.20",
    minPurchase: "100 CCC",
    maxPurchase: "10,000 CCC",
    duration: "60 days"
  }
];

export function SalePhases() {
  return (
    <Card className="p-6 bg-zinc-800">
      <h2 className="text-2xl font-semibold text-orange-500 mb-6">Sale Phases</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {phases.map((phase) => (
          <Card key={phase.name} className="p-4 bg-zinc-700">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">{phase.name}</h3>
            <div className="space-y-2 text-zinc-300">
              <p>Allocation: {phase.allocation}</p>
              <p>Price: {phase.price}</p>
              <p>Min Purchase: {phase.minPurchase}</p>
              <p>Max Purchase: {phase.maxPurchase}</p>
              <p>Duration: {phase.duration}</p>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}