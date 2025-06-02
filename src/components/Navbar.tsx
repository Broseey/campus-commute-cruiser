
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Menu, Car, Calendar, HelpCircle, Info, LogIn, X, ChevronDown, LogOut, Settings, Truck } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // For demo purposes - in a real app, this would come from authentication context
  // Set to true to test the logged-in state, false for logged-out state
  const isAuthenticated = false;
  const currentUser = {
    name: "John Doe",
    email: "john.doe@unilag.edu.ng",
    avatar: null
  };

  // Custom hook to check if screen width is less than 900px
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileMenu(window.innerWidth < 900);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const menuItems = [
    { icon: Car, label: "My Rides", path: "/my-rides" },
    { icon: Calendar, label: "Schedule", path: "/schedule" },
    { icon: HelpCircle, label: "Help", path: "/help" },
    { icon: Info, label: "About", path: "/about" },
  ];

  const publicMenuItems = [
    { icon: Truck, label: "Drive", path: "/drive" },
    { icon: HelpCircle, label: "Help", path: "/help" },
    { icon: Info, label: "About", path: "/about" },
  ];

  const renderDesktopMenuItems = () => (
    <>
      {(isAuthenticated ? menuItems : publicMenuItems).map((item) => (
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
        <Button variant="ghost" size="icon" className="text-white hover:opacity-80">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full h-full p-0 m-0 max-w-full bg-black text-white border-none">
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex justify-between items-center py-4 px-6 border-b border-gray-700">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <span className="text-white font-bold text-2xl tracking-tight">Uniride</span>
            </Link>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="text-white hover:opacity-80 bg-transparent">
                <X className="h-6 w-6" />
              </Button>
            </SheetClose>
          </div>
          
          {/* Menu items */}
          <div className="flex-1 pt-8">
            {(isAuthenticated ? menuItems : publicMenuItems).map((item) => (
              <SheetClose asChild key={item.label}>
                <Link to={item.path}>
                  <div className="py-6 px-6 flex items-center hover:bg-gray-900">
                    <item.icon className="mr-5 h-6 w-6" />
                    <span className="text-xl font-medium">{item.label}</span>
                  </div>
                </Link>
              </SheetClose>
            ))}
            {isAuthenticated && (
              <SheetClose asChild>
                <Link to="/dashboard">
                  <div className="py-6 px-6 flex items-center hover:bg-gray-900">
                    <User className="mr-5 h-6 w-6" />
                    <span className="text-xl font-medium">Dashboard</span>
                  </div>
                </Link>
              </SheetClose>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  const UserMenu = () => (
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
          <Link to="/dashboard" className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/my-rides" className="cursor-pointer">
            <Car className="mr-2 h-4 w-4" />
            My Rides
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <nav className="bg-black py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <span className="text-white font-bold text-2xl tracking-tight">Uniride</span>
          </Link>
        </div>
        
        {/* Desktop menu - shows when screen width >= 900px */}
        {!isMobileMenu && (
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="bg-transparent border-none">
                {renderDesktopMenuItems()}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
        
        {/* Mobile menu and auth buttons - shows when screen width < 900px */}
        {isMobileMenu ? (
          <div className="flex items-center space-x-2">
            {/* Auth buttons next to hamburger menu */}
            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/signin">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 text-sm px-3 py-1 font-medium border-none">
                    Log in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="default" size="sm" className="bg-white text-black hover:bg-gray-100 text-sm px-3 py-1 font-medium">
                    Sign up
                  </Button>
                </Link>
              </div>
            )}
            {renderMobileMenu()}
          </div>
        ) : (
          /* Desktop auth buttons */
          <div className="flex items-center space-x-2">
            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/signin">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 font-medium border-none">
                    Log in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="default" size="sm" className="bg-white text-black hover:bg-gray-100 font-medium">
                    Sign up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
