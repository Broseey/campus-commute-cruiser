
import React from "react";
import { Heart } from "lucide-react";

interface WelcomeHeaderProps {
  name: string;
}

const WelcomeHeader = ({ name }: WelcomeHeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center">
        <span className="mr-2">Welcome back, {name}</span>
        <Heart className="h-5 w-5 text-coral-500 fill-coral-500 animate-pulse-gentle" />
      </h1>
      <p className="text-gray-600">Ready for your next adventure? Where are you heading today?</p>
    </div>
  );
};

export default WelcomeHeader;
