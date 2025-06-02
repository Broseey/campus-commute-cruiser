
import { Car, Calendar, HelpCircle, Info, Truck } from "lucide-react";
import { MenuItem } from "./NavbarTypes";

export const useMenuItems = (isAuthenticated: boolean): MenuItem[] => {
  // Standard menu items shown to all users (including non-authenticated)
  const standardMenuItems: MenuItem[] = [
    { icon: Truck, label: "Drive", path: "/drive" },
    { icon: HelpCircle, label: "Help", path: "/help" },
    { icon: Info, label: "About", path: "/about" },
  ];

  // Additional menu items only shown to authenticated users
  const authenticatedMenuItems: MenuItem[] = [
    { icon: Car, label: "My Rides", path: "/my-rides" },
    { icon: Calendar, label: "Schedule", path: "/schedule" },
    { icon: Truck, label: "Drive", path: "/drive" },
    { icon: HelpCircle, label: "Help", path: "/help" },
    { icon: Info, label: "About", path: "/about" },
  ];

  return isAuthenticated ? authenticatedMenuItems : standardMenuItems;
};
