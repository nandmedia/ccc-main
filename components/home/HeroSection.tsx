"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SalePhasesModal } from "@/components/sale/SalePhasesModal";
import { Logo } from "@/components/common/Logo";

export function HeroSection() {
  const [showSalePhases, setShowSalePhases] = useState(false);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="mb-8">
          <Logo size={128} className="animate-pulse" />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
          Welcome to Cipher Chain
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl">
          The next generation blockchain platform for secure, scalable, and decentralized digital assets
        </p>
        <Button 
          className="bg-orange-500 hover:bg-orange-600"
          onClick={() => setShowSalePhases(true)}
        >
          View Sale Phases <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <SalePhasesModal 
        isOpen={showSalePhases} 
        onClose={() => setShowSalePhases(false)} 
      />
    </div>
  );
}