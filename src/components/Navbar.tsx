
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Menu, Home, Car, Calendar, HelpCircle, Info, LogIn, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
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

  // For demo purposes, let's assume the user is authenticated
  // In a real application, you would check authentication status
  const isAuthenticated = false;

  const menuItems = [
    // { icon: Home, label: "Home", path: "/" },
    { icon: Car, label: "My Rides", path: "/my-rides" },
    { icon: Calendar, label: "Schedule", path: "/schedule" },
    { icon: HelpCircle, label: "How It Works", path: "/how-it-works" },
    { icon: Info, label: "About", path: "/about" },
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
          <Menu className="h-7 w-7" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full h-full p-0 m-0 max-w-full bg-black text-black border-none">
        <div className="flex justify-between items-center py-4 px-6 border-b border-gray-200 bg-white">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <span className="text-black font-bold text-2xl tracking-tight">CampusRide</span>
          </Link>
          <div className="flex items-center space-x-2">
            {isAuthenticated ? (
              <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                <Button variant="default" size="sm" className="bg-black text-white hover:bg-neutral-800">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                <Button variant="default" size="sm" className="bg-black text-white hover:bg-neutral-800">
                  Sign In
                </Button>
              </Link>
            )}
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="text-black hover:opacity-80 bg-transparent">
                <X className="h-7 w-7" />
              </Button>
            </SheetClose>
          </div>
        </div>
        <div className="flex flex-col pt-8 bg-black text-white">
          {menuItems.map((item) => (
            <SheetClose asChild key={item.label}>
              <Link to={item.path}>
                <div className="py-6 px-6 flex items-center hover:bg-gray-900">
                  <item.icon className="mr-5 h-7 w-7" />
                  <span className="text-2xl font-medium">{item.label}</span>
                </div>
              </Link>
            </SheetClose>
          ))}
          {isAuthenticated && (
            <SheetClose asChild>
              <Link to="/dashboard">
                <div className="py-6 px-6 flex items-center hover:bg-gray-900">
                  <User className="mr-5 h-7 w-7" />
                  <span className="text-2xl font-medium">Dashboard</span>
                </div>
              </Link>
            </SheetClose>
          )}
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
          {isMobile ? (
            renderMobileMenu()
          ) : (
            <div className="flex items-center space-x-2">
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button variant="default" size="sm" className="bg-white text-black hover:bg-gray-100">
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link to="/signin">
                  <Button variant="default" size="sm" className="bg-white text-black hover:bg-gray-100">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
