"use client";

import { Card } from "@/components/ui/card";

interface SalePhaseProps {
  name: string;
  allocation: string;
  price: string;
  minPurchase: string;
  maxPurchase: string;
  duration: string;
}

export function SalePhaseCard({
  name,
  allocation,
  price,
  minPurchase,
  maxPurchase,
  duration
}: SalePhaseProps) {
  return (
    <Card className="p-4 bg-zinc-700">
      <h3 className="text-xl font-semibold text-orange-400 mb-4">{name}</h3>
      <div className="space-y-2 text-zinc-300">
        <p>Allocation: {allocation}</p>
        <p>Price: {price}</p>
        <p>Min Purchase: {minPurchase}</p>
        <p>Max Purchase: {maxPurchase}</p>
        <p>Duration: {duration}</p>
      </div>
    </Card>
  );
}