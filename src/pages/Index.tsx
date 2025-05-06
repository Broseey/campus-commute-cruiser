
import { useState } from "react";
import Navbar from "@/components/Navbar";
import AvailableRides from "@/components/AvailableRides";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Calendar, CreditCard, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RideBookingFormNew from "@/components/RideBookingFormNew";

const Index = () => {
  const [activeTab, setActiveTab] = useState("book");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 px-4 py-6 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header section with Uber-like styling */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
            Campus Rides Made Easy
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-6">
            Book affordable rides to and from your university with just a few clicks.
            Join existing rides or book a full vehicle for your journey.
          </p>
          <Link to="/how-it-works">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white transform hover:scale-105 transition-all duration-200">
              Learn how it works
            </Button>
          </Link>
        </div>
        
        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column - Booking form */}
          <div className="w-full md:w-1/2 flex justify-center">
            <RideBookingFormNew />
          </div>
          
          {/* Right column - Available rides */}
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="book" className="data-[state=active]:bg-accent data-[state=active]:text-white">Available Rides</TabsTrigger>
                  <TabsTrigger value="schedule" className="data-[state=active]:bg-accent data-[state=active]:text-white">How It Works</TabsTrigger>
                </TabsList>
                <TabsContent value="book" className="mt-4">
                  <AvailableRides />
                </TabsContent>
                <TabsContent value="schedule" className="mt-4">
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold">How to Book Your Ride</h2>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-start">
                        <div className="bg-accent/10 rounded-full p-3 mr-4 hover:shadow-glow transition-all duration-300">
                          <MapPin className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-medium">1. Choose Your Route</h3>
                          <p className="text-sm text-gray-600">
                            Select your departure and destination locations.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-accent/10 rounded-full p-3 mr-4 hover:shadow-glow transition-all duration-300">
                          <Calendar className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-medium">2. Pick Date & Time</h3>
                          <p className="text-sm text-gray-600">
                            Choose when you want to travel.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-accent/10 rounded-full p-3 mr-4 hover:shadow-glow transition-all duration-300">
                          <Car className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-medium">3. Select Vehicle</h3>
                          <p className="text-sm text-gray-600">
                            Choose from available vehicles or join an existing ride.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-accent/10 rounded-full p-3 mr-4 hover:shadow-glow transition-all duration-300">
                          <CreditCard className="h-6 w-6 text-accent" />
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
                          <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-white transform hover:scale-105 transition-all duration-200">
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
        </div>
        
        {/* Features section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-accent-dark">Why Choose CampusRide?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 hover:shadow-glow transition-all duration-300">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Share & Save</h3>
              <p className="text-gray-600">
                Join existing rides and split the cost with other students for affordable travel.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 hover:shadow-glow transition-all duration-300">
                <Car className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Vehicle Options</h3>
              <p className="text-gray-600">
                Choose from Sienna, Hiace bus, Long bus, or Corolla based on your needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 hover:shadow-glow transition-all duration-300">
                <MapPin className="h-6 w-6 text-accent" />
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
            0% { box-shadow: 0 0 0 rgba(244, 78, 28, 0.4); }
            50% { box-shadow: 0 0 10px rgba(244, 78, 28, 0.7); }
            100% { box-shadow: 0 0 0 rgba(244, 78, 28, 0.4); }
          }
          
          .hover\\:shadow-glow:hover {
            animation: glow 2s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
