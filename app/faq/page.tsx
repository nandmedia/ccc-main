"use client";

import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Cipher Chain Coin (CCC)?",
    answer: "CCC is a cryptocurrency designed to power a decentralized ecosystem, offering innovative tokenomics and utility within blockchain applications."
  },
  {
    question: "What is the total supply of CCC?",
    answer: "The total supply of CCC is fixed at 100 million tokens."
  },
  {
    question: "How are CCC tokens allocated?",
    answer: "CCC tokens are allocated as follows: 35% for pre-sale (pre-sale, private sale, and public sale phases), 30% for development funds, 20% for team and developers with a vesting schedule, 5% for community rewards, and 10% for reserve funds."
  },
  {
    question: "How does CCC ensure deflationary tokenomics?",
    answer: "CCC employs a token-burning mechanism that reduces the supply by burning a percentage of transaction fees within its ecosystem."
  },
  {
    question: "How can I participate in the CCC ecosystem?",
    answer: "You can participate by investing in CCC during the pre-sale or public sale phases, engaging with the community through social media and other platforms, and using CCC-powered DApps and participating in staking and reward programs."
  },
  {
    question: "What makes CCC different from other cryptocurrencies?",
    answer: "CCC's unique combination of deflationary mechanisms, structured tokenomics, and community-centric rewards sets it apart from other cryptocurrencies."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-zinc-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <HelpCircle className="w-8 h-8 text-orange-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6 bg-zinc-800">
              <h3 className="text-xl font-semibold text-orange-500 mb-3">{faq.question}</h3>
              <p className="text-zinc-300">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}