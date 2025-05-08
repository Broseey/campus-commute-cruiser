
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
      
      <div className="flex-1 px-4 py-6 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Hero section with improved layout for small screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          <div className="order-2 md:order-1">
            {/* Left column - Heading and form with improved spacing */}
            <div className="text-left mb-4 md:mb-8 px-2 md:px-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 tracking-tight">
                Campus Rides Made Easy
              </h1>
              <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6 max-w-md">
                Book affordable rides to and from your university with just a few clicks.
                Join existing rides or book a full vehicle for your journey.
              </p>
              <Link to="/how-it-works" className="hidden md:inline-block">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-200">
                  Learn how it works
                </Button>
              </Link>
            </div>
            
            {/* Booking form with improved mobile responsiveness */}
            <div className="mt-4 md:mt-0">
              <RideBookingFormNew />
            </div>
          </div>
          
          {/* Right column - Image with proper sizing for all screens */}
          <div className="order-1 md:order-2 h-[250px] md:h-auto mb-4 md:mb-0">
            <HeroImage />
          </div>
        </div>
        
        {/* Available rides section - Better spacing for small screens */}
        <div className="mb-8 md:mb-16 px-2 md:px-0">
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 md:p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-2">
                <TabsTrigger value="book" className="data-[state=active]:bg-black data-[state=active]:text-white">Available Rides</TabsTrigger>
                <TabsTrigger value="schedule" className="data-[state=active]:bg-black data-[state=active]:text-white">How It Works</TabsTrigger>
              </TabsList>
              <TabsContent value="book" className="mt-4">
                <AvailableRides />
              </TabsContent>
              <TabsContent value="schedule" className="mt-4">
                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-lg md:text-xl font-semibold">How to Book Your Ride</h2>
                  
                  <div className="grid grid-cols-1 gap-3 md:gap-4">
                    <div className="flex items-start">
                      <div className="bg-campusorange-100 rounded-full p-2 md:p-3 mr-3 md:mr-4 hover:shadow-glow-orange transition-all duration-300">
                        <MapPin className="h-5 w-5 md:h-6 md:w-6 text-campusorange-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">1. Choose Your Route</h3>
                        <p className="text-xs md:text-sm text-gray-600">
                          Select your departure and destination locations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-campusorange-100 rounded-full p-2 md:p-3 mr-3 md:mr-4 hover:shadow-glow-orange transition-all duration-300">
                        <Calendar className="h-5 w-5 md:h-6 md:w-6 text-campusorange-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">2. Pick Date & Time</h3>
                        <p className="text-xs md:text-sm text-gray-600">
                          Choose when you want to travel.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-campusorange-100 rounded-full p-2 md:p-3 mr-3 md:mr-4 hover:shadow-glow-orange transition-all duration-300">
                        <Car className="h-5 w-5 md:h-6 md:w-6 text-campusorange-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">3. Select Vehicle</h3>
                        <p className="text-xs md:text-sm text-gray-600">
                          Choose from available vehicles or join an existing ride.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-campusorange-100 rounded-full p-2 md:p-3 mr-3 md:mr-4 hover:shadow-glow-orange transition-all duration-300">
                        <CreditCard className="h-5 w-5 md:h-6 md:w-6 text-campusorange-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">4. Confirm & Pay</h3>
                        <p className="text-xs md:text-sm text-gray-600">
                          Review your booking and make payment to confirm.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-2 md:mt-4 text-center">
                      <Link to="/how-it-works">
                        <Button variant="outline" size="sm" className="border-black text-black hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-200">
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
        
        {/* Features section - Improved for small screens */}
        <div className="mt-8 md:mt-16 px-2 md:px-0">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-campusorange-700">Why Choose CampusRide?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-campusorange-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4 hover:shadow-glow-orange transition-all duration-300">
                <Users className="h-5 w-5 md:h-6 md:w-6 text-campusorange-600" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">Share & Save</h3>
              <p className="text-sm md:text-base text-gray-600">
                Join existing rides and split the cost with other students for affordable travel.
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-campusorange-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4 hover:shadow-glow-orange transition-all duration-300">
                <Car className="h-5 w-5 md:h-6 md:w-6 text-campusorange-600" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">Vehicle Options</h3>
              <p className="text-sm md:text-base text-gray-600">
                Choose from Sienna, Hiace bus, Long bus, or Corolla based on your needs.
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="bg-campusorange-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4 hover:shadow-glow-orange transition-all duration-300">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-campusorange-600" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">Campus Focused</h3>
              <p className="text-sm md:text-base text-gray-600">
                Specialized in routes between universities and major cities for students.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer - Consistent spacing */}
      <footer className="bg-white py-4 md:py-6 mt-8 md:mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm md:text-base">
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
