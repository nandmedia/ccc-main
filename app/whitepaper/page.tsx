"use client";

import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-zinc-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <FileText className="w-8 h-8 text-orange-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Cipher Chain Coin (CCC) White Paper
          </h1>
        </div>
        
        <Card className="p-8 bg-zinc-800 prose prose-invert max-w-none">
          <p className="text-lg text-zinc-300 mb-8">
            Cipher Chain Coin (CCC) is a blockchain-based cryptocurrency designed to fuel a decentralized ecosystem of tools, applications, and services. With a fixed supply of 100 million tokens, CCC integrates innovative tokenomics to promote growth, incentivize adoption, and maintain long-term value. This document outlines CCC's purpose, token allocation, deflationary mechanisms, and roadmap to establish its position as a robust digital asset.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">Purpose</h2>
              <p className="text-zinc-300">
                CCC aims to revolutionize the blockchain ecosystem by providing a versatile and sustainable digital asset that powers next-generation decentralized applications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">Technology</h2>
              <p className="text-zinc-300">
                Built on cutting-edge blockchain technology, CCC ensures high throughput, low latency, and robust security while maintaining decentralization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">Ecosystem</h2>
              <p className="text-zinc-300">
                The CCC ecosystem encompasses various components including DeFi protocols, NFT marketplaces, and cross-chain bridges, creating a comprehensive platform for digital asset management.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}