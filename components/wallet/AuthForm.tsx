"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, Mail, User } from "lucide-react";

export function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Implement signup logic
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Implement login logic
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <Card className="p-6 bg-zinc-800">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-zinc-700">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-orange-500" />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-zinc-700 border-zinc-600"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-orange-500" />
                <Input
                  type="password"
                  placeholder="Password"
                  className="bg-zinc-700 border-zinc-600"
                  required
                />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-orange-500 hover:bg-orange-600"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="signup">
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-orange-500" />
                <Input
                  type="text"
                  placeholder="Username"
                  className="bg-zinc-700 border-zinc-600"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-orange-500" />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-zinc-700 border-zinc-600"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-orange-500" />
                <Input
                  type="password"
                  placeholder="Password"
                  className="bg-zinc-700 border-zinc-600"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-orange-500" />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  className="bg-zinc-700 border-zinc-600"
                  required
                />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-orange-500 hover:bg-orange-600"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </Card>
  );
}