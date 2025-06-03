
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DriverUserMenu from "./DriverUserMenu";
import { User } from "./NavbarTypes";

interface DriverAuthButtonsProps {
  isAuthenticated: boolean;
  currentUser: User;
  isMobile?: boolean;
}

const DriverAuthButtons = ({ isAuthenticated, currentUser, isMobile = false }: DriverAuthButtonsProps) => {
  if (isAuthenticated) {
    return <DriverUserMenu currentUser={currentUser} />;
  }

  const buttonSize = isMobile ? "sm" : "sm";
  const buttonClasses = isMobile ? "text-sm px-3 py-1" : "";

  return (
    <div className="flex items-center space-x-2">
      <Link to="/driver-signin">
        <Button 
          variant="ghost" 
          size={buttonSize} 
          className={`text-white hover:bg-white/10 font-medium border-none ${buttonClasses}`}
        >
          Login
        </Button>
      </Link>
      <Link to="/driver-signup">
        <Button 
          variant="default" 
          size={buttonSize} 
          className={`bg-white text-black hover:bg-gray-100 font-medium ${buttonClasses}`}
        >
          Become a Driver
        </Button>
      </Link>
    </div>
  );
};

export default DriverAuthButtons;
