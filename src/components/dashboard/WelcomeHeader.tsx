
import React from "react";
import { User } from "lucide-react";

interface WelcomeHeaderProps {
  name: string;
}

const WelcomeHeader = ({ name }: WelcomeHeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center">
        <span className="mr-2">Welcome, {name}</span>
        <User className="h-5 w-5 text-gray-600" />
      </h1>
      <p className="text-gray-600">Plan your next journey with confidence. Your preferred routes are ready.</p>
    </div>
  );
};

export default WelcomeHeader;
