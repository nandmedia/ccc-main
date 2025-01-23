"use client";

import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";
import { BackButton } from "@/components/common/BackButton";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-900 py-16">
      <div className="container mx-auto px-4">
        <BackButton className="mb-6" />
        
        <div className="flex items-center justify-center gap-3 mb-8">
          <Info className="w-8 h-8 text-orange-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            About Cipher Chain
          </h1>
        </div>

        {/* Rest of the component remains the same */}
      </div>
    </div>
  );
}