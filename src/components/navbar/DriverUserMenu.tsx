
import React from "react";
import { Button } from "@/components/ui/button";
import { User, ChevronDown, LogOut, Settings, Truck, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User as UserType } from "./NavbarTypes";

interface DriverUserMenuProps {
  currentUser: UserType;
}

const DriverUserMenu = ({ currentUser }: DriverUserMenuProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="text-white hover:bg-white/10 border-none">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          <span className="font-medium">{currentUser.name}</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <div className="px-3 py-2 border-b">
        <p className="font-medium">{currentUser.name}</p>
        <p className="text-sm text-gray-500">{currentUser.email}</p>
      </div>
      <DropdownMenuItem asChild>
        <Link to="/driver-dashboard" className="cursor-pointer">
          <Truck className="mr-2 h-4 w-4" />
          Driver Dashboard
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link to="/driver-earnings" className="cursor-pointer">
          <DollarSign className="mr-2 h-4 w-4" />
          Earnings
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings className="mr-2 h-4 w-4" />
        Driver Settings
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut className="mr-2 h-4 w-4" />
        Sign Out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default DriverUserMenu;
