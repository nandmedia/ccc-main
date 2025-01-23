"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, LogIn, Wallet, ChevronDown, Milestone, Flag, Rocket } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "White Paper", href: "/whitepaper" },
  ];

  const roadmapPhases = [
    {
      phase: "Phase 1: Foundation",
      items: ["Token Launch", "Wallet Development", "Community Building"],
      href: "/roadmap#phase-1",
      icon: <Milestone className="w-4 h-4 text-orange-500" />
    },
    {
      phase: "Phase 2: Growth",
      items: ["DEX Integration", "Staking Platform", "NFT Marketplace"],
      href: "/roadmap#phase-2",
      icon: <Flag className="w-4 h-4 text-orange-500" />
    },
    {
      phase: "Phase 3: Expansion",
      items: ["Cross-chain Bridge", "Governance", "Enterprise Solutions"],
      href: "/roadmap#phase-3",
      icon: <Rocket className="w-4 h-4 text-orange-500" />
    }
  ];

  const featureItems = [
    { label: "Tokenomics", href: "/tokenomics" },
    { label: "Wallet", href: "/wallet" },
    { label: "Staking", href: "/staking" },
    { label: "NFT Marketplace", href: "/nft" },
  ];

  const faqItems = [
    { 
      question: "What is Cipher Chain Coin (CCC)?",
      href: "/faq#what-is-ccc"
    },
    {
      question: "What is the total supply?",
      href: "/faq#total-supply"
    },
    {
      question: "How are tokens allocated?",
      href: "/faq#token-allocation"
    },
    {
      question: "How to participate?",
      href: "/faq#how-to-participate"
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Logo size={32} />
            <span className="text-xl font-bold text-orange-500">Cipher Chain</span>
          </Link>

          {/* Rest of the header content remains the same */}
          {/* ... */}
        </div>
      </div>
    </header>
  );
}