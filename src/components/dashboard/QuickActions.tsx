
import React from "react";
import { Button } from "@/components/ui/button";
import { Car, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const QuickActions = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Link to="/book" className="w-full">
        <Button className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-base transition-all duration-300 hover:scale-[1.02]">
          <Car className="mr-2 h-5 w-5" />
          Book a Ride
        </Button>
      </Link>
      <Link to="/schedule" className="w-full">
        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 h-14 text-base transition-all duration-300 hover:scale-[1.02]">
          <Calendar className="mr-2 h-5 w-5" />
          Schedule Ride
        </Button>
      </Link>
    </div>
  );
};

export default QuickActions;
