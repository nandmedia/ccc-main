"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900">
      <HeroSection />
      <CTASection />
    </main>
  );
}