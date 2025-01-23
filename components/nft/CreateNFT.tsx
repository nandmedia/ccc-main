"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Upload, X } from 'lucide-react';
import Image from 'next/image';

export function CreateNFT() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    collection: ''
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, image: imagePreview });
  };

  return (
    <Card className="p-6 bg-zinc-800">
      <h2 className="text-2xl font-bold text-orange-500 mb-6">Create New NFT</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm text-zinc-400">NFT Image</label>
          <div className="relative aspect-square w-full max-w-md mx-auto border-2 border-dashed border-zinc-600 rounded-lg overflow-hidden">
            {imagePreview ? (
              <div className="relative h-full">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => setImagePreview(null)}
                  className="absolute top-2 right-2 p-1 bg-zinc-900/80 rounded-full"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center h-full cursor-pointer">
                <Upload className="w-8 h-8 text-zinc-400 mb-2" />
                <span className="text-sm text-zinc-400">Click to upload image</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-zinc-400">Name</label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-zinc-700 border-zinc-600"
            placeholder="Enter NFT name"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-zinc-400">Description</label>
          <Textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="bg-zinc-700 border-zinc-600"
            placeholder="Describe your NFT"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-zinc-400">Price (ETH)</label>
          <Input
            type="number"
            step="0.01"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="bg-zinc-700 border-zinc-600"
            placeholder="0.00"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-zinc-400">Collection</label>
          <Input
            value={formData.collection}
            onChange={(e) => setFormData({ ...formData, collection: e.target.value })}
            className="bg-zinc-700 border-zinc-600"
            placeholder="Collection name"
          />
        </div>

        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
          Create NFT
        </Button>
      </form>
    </Card>
  );
}