"use client";

import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo size={32} />
              <h3 className="text-xl font-bold text-orange-500">Cipher Chain</h3>
            </div>
            <p className="text-zinc-400">
              Next Generation Blockchain Solutions for Digital Assets
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-zinc-400 hover:text-orange-500">About</Link>
              <Link href="/whitepaper" className="text-zinc-400 hover:text-orange-500">White Paper</Link>
              <Link href="/faq" className="text-zinc-400 hover:text-orange-500">FAQ</Link>
              <Link href="/roadmap" className="text-zinc-400 hover:text-orange-500">Roadmap</Link>
            </nav>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Features</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/tokenomics" className="text-zinc-400 hover:text-orange-500">Tokenomics</Link>
              <Link href="/wallet" className="text-zinc-400 hover:text-orange-500">Wallet</Link>
              <Link href="/staking" className="text-zinc-400 hover:text-orange-500">Staking</Link>
              <Link href="/nft" className="text-zinc-400 hover:text-orange-500">NFT Marketplace</Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/cipherchainofficial" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-orange-500">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://x.com/cipherchainofficial" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-orange-500">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-orange-500">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://youtube.com/@cipherchainofficial?feature=shared" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-orange-500">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-400">
          <p>&copy; {currentYear} Cipher Chain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}