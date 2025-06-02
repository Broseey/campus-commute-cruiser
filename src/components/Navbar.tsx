
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DesktopMenu from "./navbar/DesktopMenu";
import MobileMenu from "./navbar/MobileMenu";
import AuthButtons from "./navbar/AuthButtons";
import { useMenuItems } from "./navbar/useMenuItems";
import { User } from "./navbar/NavbarTypes";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // For demo purposes - in a real app, this would come from authentication context
  // Set to true to test the logged-in state, false for logged-out state
  const isAuthenticated = false;
  const currentUser: User = {
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

  const menuItems = useMenuItems(isAuthenticated);

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
            <DesktopMenu menuItems={menuItems} />
          </div>
        )}
        
        {/* Mobile menu and auth buttons - shows when screen width < 900px */}
        {isMobileMenu ? (
          <div className="flex items-center space-x-2">
            {/* Auth buttons next to hamburger menu */}
            <AuthButtons 
              isAuthenticated={isAuthenticated} 
              currentUser={currentUser} 
              isMobile={true} 
            />
            <MobileMenu 
              menuItems={menuItems}
              isAuthenticated={isAuthenticated}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
        ) : (
          /* Desktop auth buttons */
          <div className="flex items-center space-x-2">
            <AuthButtons 
              isAuthenticated={isAuthenticated} 
              currentUser={currentUser} 
              isMobile={false} 
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
