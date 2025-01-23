"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SalePhaseCard } from "./SalePhaseCard";

interface SalePhasesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export function SalePhasesModal({ isOpen, onClose }: SalePhasesModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-800 text-white max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-orange-500">Sale Phases</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {phases.map((phase) => (
            <SalePhaseCard key={phase.name} {...phase} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}