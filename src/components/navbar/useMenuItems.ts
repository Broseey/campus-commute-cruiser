
import { Car, Calendar, HelpCircle, Info, Truck } from "lucide-react";
import { MenuItem } from "./NavbarTypes";

export const useMenuItems = (isAuthenticated: boolean): MenuItem[] => {
  // All menu items shown to all users (both authenticated and non-authenticated)
  const allMenuItems: MenuItem[] = [
    { icon: Car, label: "My Rides", path: "/my-rides" },
    { icon: Calendar, label: "Schedule", path: "/schedule" },
    { icon: Truck, label: "Drive", path: "/drive" },
    { icon: HelpCircle, label: "Help", path: "/help" },
    { icon: Info, label: "About", path: "/about" },
  ];

  return allMenuItems;
};
