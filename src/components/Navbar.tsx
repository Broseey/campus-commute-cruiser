
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
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // For demo purposes, let's assume the user is authenticated
  // In a real application, you would check authentication status
  const isAuthenticated = false;

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
    // { icon: Home, label: "Home", path: "/" },
    { icon: Car, label: "My Rides", path: "/my-rides" },
    { icon: Calendar, label: "Schedule", path: "/schedule" },
    { icon: HelpCircle, label: "How It Works", path: "/how-it-works" },
    { icon: Info, label: "About", path: "/about" },
  ];

  const renderDesktopMenuItems = () => (
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
        <Button variant="ghost" size="icon" className="text-white hover:opacity-80">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full h-full p-0 m-0 max-w-full bg-black text-white border-none">
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex justify-between items-center py-4 px-6 border-b border-gray-700">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <span className="text-white font-bold text-2xl tracking-tight">CampusRide</span>
            </Link>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="text-white hover:opacity-80 bg-transparent">
                <X className="h-6 w-6" />
              </Button>
            </SheetClose>
          </div>
          
          {/* Menu items */}
          <div className="flex-1 pt-8">
            {menuItems.map((item) => (
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

  return (
    <nav className="bg-black py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <span className="text-white font-bold text-2xl tracking-tight">CampusRide</span>
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
          <div className="flex items-center space-x-3">
            {/* Auth buttons next to hamburger menu */}
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button variant="default" size="sm" className="bg-white text-black hover:bg-gray-100 text-sm px-3 py-1">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link to="/signin">
                <Button variant="default" size="sm" className="bg-white text-black hover:bg-gray-100 text-sm px-3 py-1">
                  Sign In
                </Button>
              </Link>
            )}
            {renderMobileMenu()}
          </div>
        ) : (
          /* Desktop auth buttons */
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
    </nav>
  );
};

export default Navbar;
