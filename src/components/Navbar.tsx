
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Menu, Bell, X, Home, Car, Calendar, HelpCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Car, label: "My Rides", path: "/my-rides" },
    { icon: Calendar, label: "Schedule", path: "/schedule" },
    { icon: HelpCircle, label: "Help", path: "/help" },
  ];

  const renderMenuItems = () => (
    <>
      {menuItems.map((item) => (
        <NavigationMenuItem key={item.label}>
          <Link to={item.path}>
            <div className="flex items-center gap-2 px-4 py-2 text-white hover:opacity-80 transition-opacity">
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </div>
          </Link>
        </NavigationMenuItem>
      ))}
    </>
  );

  const renderMobileMenu = () => (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white hover:opacity-80 md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px] bg-black text-white">
        <div className="flex flex-col gap-4 pt-10">
          {menuItems.map((item) => (
            <SheetClose asChild key={item.label}>
              <Link to={item.path}>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-white hover:opacity-80 bg-transparent"
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  {item.label}
                </Button>
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <nav className="bg-black py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <span className="text-white font-bold text-2xl tracking-tight">CampusRide</span>
          </Link>
        </div>
        
        {!isMobile && (
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="bg-transparent border-none">
                {renderMenuItems()}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-white hover:opacity-80 bg-transparent">
            <Bell className="h-5 w-5" />
          </Button>
          
          {isMobile ? (
            renderMobileMenu()
          ) : (
            <Button variant="ghost" size="icon" className="text-white hover:opacity-80 bg-transparent">
              <User className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
