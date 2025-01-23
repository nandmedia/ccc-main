"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Check } from "lucide-react";

interface KYCVerificationProps {
  email: string;
}

export function KYCVerification({ email }: KYCVerificationProps) {
  const [kycStatus, setKycStatus] = useState<'pending' | 'verified' | 'unverified'>('unverified');
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    address: '',
    documentType: '',
    documentNumber: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setKycStatus('verified');
  };

  return (
    <Card className="p-6 bg-zinc-800">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl font-semibold text-orange-500">KYC Verification</h2>
      </div>

      {kycStatus === 'verified' ? (
        <div className="flex items-center gap-3 text-green-500">
          <Check className="w-5 h-5" />
          <span>KYC Verified</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Full Name"
            className="bg-zinc-700 border-zinc-600"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
          <Input
            type="date"
            className="bg-zinc-700 border-zinc-600"
            value={formData.dateOfBirth}
            onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
          />
          <Input
            type="text"
            placeholder="Address"
            className="bg-zinc-700 border-zinc-600"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
          />
          <Input
            type="text"
            placeholder="Document Type (Passport/ID)"
            className="bg-zinc-700 border-zinc-600"
            value={formData.documentType}
            onChange={(e) => setFormData({...formData, documentType: e.target.value})}
          />
          <Input
            type="text"
            placeholder="Document Number"
            className="bg-zinc-700 border-zinc-600"
            value={formData.documentNumber}
            onChange={(e) => setFormData({...formData, documentNumber: e.target.value})}
          />
          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
            Submit KYC
          </Button>
        </form>
      )}
    </Card>
  );
}