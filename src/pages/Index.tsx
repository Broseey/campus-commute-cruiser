
import { useState } from "react";
import Navbar from "@/components/Navbar";
import AvailableRides from "@/components/AvailableRides";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Calendar, CreditCard, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RideBookingFormNew from "@/components/RideBookingFormNew";
import HeroImage from "@/components/HeroImage";

const Index = () => {
  const [activeTab, setActiveTab] = useState("book");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 px-4 py-10 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Hero section with enhanced positioning */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-20 mt-8">
          <div className="flex flex-col justify-center">
            {/* Left column - Heading and form with better spacing */}
            <div className="text-left mb-10 max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-none">
                Campus Rides Made Easy
              </h1>
              <p className="text-campusorange-600 font-medium text-base mb-8">
                Safe and reliable transport for students
              </p>
              <Link to="/how-it-works">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-200 rounded-[3.5rem] md:rounded-[5.5rem]">
                  Learn how it works
                </Button>
              </Link>
            </div>
            
            {/* Booking form with added spacing */}
            <div className="bg-transparent rounded-[3.5rem] md:rounded-[5.5rem] transition-all duration-300">
              <RideBookingFormNew />
            </div>
          </div>
          
          {/* Right column - Image space (only visible on xl screens and above) */}
          <div className="hidden xl:flex items-center justify-center">
            <HeroImage />
          </div>
        </div>
        
        {/* Available rides section */}
        <div className="mb-16">
          <div className="bg-white rounded-[3.5rem] md:rounded-[5.5rem] shadow-sm hover:shadow-md transition-all duration-300 p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="book" className="data-[state=active]:bg-black data-[state=active]:text-white rounded-[3rem]">Available Rides</TabsTrigger>
                <TabsTrigger value="schedule" className="data-[state=active]:bg-black data-[state=active]:text-white rounded-[3rem]">How It Works</TabsTrigger>
              </TabsList>
              <TabsContent value="book" className="mt-4">
                <AvailableRides />
              </TabsContent>
              <TabsContent value="schedule" className="mt-4">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">How to Book Your Ride</h2>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start">
                      <div className="bg-campusorange-100 rounded-[3rem] p-3 mr-4 hover:shadow-glow-orange transition-all duration-300">
                        <MapPin className="h-6 w-6 text-campusorange-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">1. Choose Your Route</h3>
                        <p className="text-sm text-gray-600">
                          Select your departure and destination locations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-campusorange-100 rounded-[3rem] p-3 mr-4 hover:shadow-glow-orange transition-all duration-300">
                        <Calendar className="h-6 w-6 text-campusorange-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">2. Pick Date & Time</h3>
                        <p className="text-sm text-gray-600">
                          Choose when you want to travel.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-campusorange-100 rounded-[3rem] p-3 mr-4 hover:shadow-glow-orange transition-all duration-300">
                        <Car className="h-6 w-6 text-campusorange-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">3. Select Vehicle</h3>
                        <p className="text-sm text-gray-600">
                          Choose from available vehicles or join an existing ride.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-campusorange-100 rounded-[3rem] p-3 mr-4 hover:shadow-glow-orange transition-all duration-300">
                        <CreditCard className="h-6 w-6 text-campusorange-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">4. Confirm & Pay</h3>
                        <p className="text-sm text-gray-600">
                          Review your booking and make payment to confirm.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link to="/how-it-works">
                        <Button variant="outline" size="sm" className="border-black text-black hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-200 rounded-[3rem]">
                          Learn more
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Features section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-campusorange-700">Why Choose CampusRide?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-[3.5rem] md:rounded-[5.5rem] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-campusorange-100 w-12 h-12 rounded-[3rem] flex items-center justify-center mb-4 hover:shadow-glow-orange transition-all duration-300">
                <Users className="h-6 w-6 text-campusorange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Share & Save</h3>
              <p className="text-gray-600">
                Join existing rides and split the cost with other students for affordable travel.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-[3.5rem] md:rounded-[5.5rem] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-campusorange-100 w-12 h-12 rounded-[3rem] flex items-center justify-center mb-4 hover:shadow-glow-orange transition-all duration-300">
                <Car className="h-6 w-6 text-campusorange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Vehicle Options</h3>
              <p className="text-gray-600">
                Choose from Sienna, Hiace bus, Long bus, or Corolla based on your needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-[3.5rem] md:rounded-[5.5rem] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-campusorange-100 w-12 h-12 rounded-[3rem] flex items-center justify-center mb-4 hover:shadow-glow-orange transition-all duration-300">
                <MapPin className="h-6 w-6 text-campusorange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Campus Focused</h3>
              <p className="text-gray-600">
                Specialized in routes between universities and major cities for students.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>© 2023 CampusRide. All rights reserved.</p>
        </div>
      </footer>
      
      {/* Add global styles for special effects */}
      <style>
        {`
          @keyframes glow {
            0% { box-shadow: 0 0 0 rgba(255, 153, 0, 0.4); }
            50% { box-shadow: 0 0 10px rgba(255, 153, 0, 0.7); }
            100% { box-shadow: 0 0 0 rgba(255, 153, 0, 0.4); }
          }
          
          .hover\\:shadow-glow-orange:hover {
            animation: glow 2s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
