
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import { User } from "./NavbarTypes";

interface AuthButtonsProps {
  isAuthenticated: boolean;
  currentUser: User;
  isMobile?: boolean;
}

const AuthButtons = ({ isAuthenticated, currentUser, isMobile = false }: AuthButtonsProps) => {
  if (isAuthenticated) {
    return <UserMenu currentUser={currentUser} />;
  }

  const buttonSize = isMobile ? "sm" : "sm";
  const buttonClasses = isMobile ? "text-sm px-3 py-1" : "";

  return (
    <div className="flex items-center space-x-2">
      <Link to="/signin">
        <Button 
          variant="ghost" 
          size={buttonSize} 
          className={`text-white hover:bg-white/10 font-medium border-none ${buttonClasses}`}
        >
          Log in
        </Button>
      </Link>
      <Link to="/signup">
        <Button 
          variant="default" 
          size={buttonSize} 
          className={`bg-white text-black hover:bg-gray-100 font-medium ${buttonClasses}`}
        >
          Sign up
        </Button>
      </Link>
    </div>
  );
};

export default AuthButtons;
