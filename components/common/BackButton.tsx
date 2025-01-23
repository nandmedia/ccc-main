"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  className?: string;
}

export function BackButton({ className = "" }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => router.back()}
      className={`flex items-center gap-2 text-zinc-400 hover:text-orange-500 ${className}`}
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </Button>
  );
}