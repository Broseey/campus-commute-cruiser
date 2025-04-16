
import { Button } from "@/components/ui/button";
import { User, Menu, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-purple-600 font-bold text-2xl">CampusRide</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
