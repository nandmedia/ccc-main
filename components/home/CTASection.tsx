"use client";

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

export function CTASection() {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Cipher Chain',
          text: 'Check out Cipher Chain - The next generation blockchain platform!',
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that don't support the Web Share API
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="bg-zinc-800 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">
          Join the Future of Digital Assets
        </h2>
        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
          Be part of the next generation blockchain ecosystem. Share Cipher Chain with your friends and join our growing community.
        </p>
        <Button 
          className="bg-orange-500 hover:bg-orange-600"
          onClick={handleShare}
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share with Friends
        </Button>
      </div>
    </div>
  );
}