
import React from "react";
import { Button } from "@/components/ui/button";
import { Car, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const QuickActions = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleBookRide = () => {
    if (user) {
      // User is authenticated, allow booking
      navigate('/dashboard');
    } else {
      // User is not authenticated, redirect to signup
      navigate('/signup');
    }
  };

  const handleScheduleRide = () => {
    if (user) {
      // User is authenticated, allow scheduling
      navigate('/schedule');
    } else {
      // User is not authenticated, redirect to signup
      navigate('/signup');
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <Button 
        onClick={handleBookRide}
        className="w-full bg-black text-white hover:bg-neutral-800 h-14 text-base rounded-[3.5rem] md:rounded-[5.5rem]"
      >
        <Car className="mr-2 h-5 w-5" />
        Book a Ride
      </Button>
      <Button 
        onClick={handleScheduleRide}
        variant="outline" 
        className="w-full border-black text-black hover:bg-black hover:text-white h-14 text-base rounded-[3.5rem] md:rounded-[5.5rem]"
      >
        <Calendar className="mr-2 h-5 w-5" />
        Schedule Ride
      </Button>
    </div>
  );
};

export default QuickActions;
