
import { useState } from "react";
import Navbar from "@/components/Navbar";
import RideBookingForm from "@/components/RideBookingForm";
import AvailableRides from "@/components/AvailableRides";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Calendar, CreditCard, MapPin, Users, Navigation, Route, BookOpen } from "lucide-react";

// Hero Illustration Component
const HeroIllustration = () => (
  <div className="relative w-full h-40 md:h-60 mb-6 overflow-hidden rounded-xl bg-gradient-to-r from-campusblue-50 to-campusblue-100">
    <div className="absolute bottom-0 right-0 transform translate-x-16 translate-y-8">
      <div className="w-40 h-40 bg-campusblue-200 rounded-full opacity-50"></div>
    </div>
    <div className="absolute top-0 left-0 transform -translate-x-8 -translate-y-8">
      <div className="w-24 h-24 bg-campusblue-300 rounded-full opacity-30"></div>
    </div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10">
      <Car className="w-16 h-16 text-campusblue-600 mb-2" />
      <span className="text-campusblue-800 font-semibold">Campus Transportation</span>
    </div>
    <div className="absolute bottom-4 left-8 hidden md:block">
      <Users className="w-10 h-10 text-campusblue-500" />
    </div>
    <div className="absolute top-4 right-8 hidden md:block">
      <MapPin className="w-10 h-10 text-campusblue-500" />
    </div>
  </div>
);

const Index = () => {
  const [activeTab, setActiveTab] = useState("book");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 px-4 py-6 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header section with illustration */}
        <div className="text-center mb-8">
          <HeroIllustration />
          <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight text-gray-900">
            Campus Rides Made Easy
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Book affordable rides to and from your university with just a few clicks.
            Join existing rides or book a full vehicle for your journey.
          </p>
        </div>
        
        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column - Booking form */}
          <div className="w-full md:w-1/2 flex justify-center">
            <RideBookingForm />
          </div>
          
          {/* Right column - Available rides */}
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="book">Available Rides</TabsTrigger>
                  <TabsTrigger value="schedule">How It Works</TabsTrigger>
                </TabsList>
                <TabsContent value="book" className="mt-4">
                  <AvailableRides />
                </TabsContent>
                <TabsContent value="schedule" className="mt-4">
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold">How to Book Your Ride</h2>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-start">
                        <div className="bg-campusblue-100 rounded-full p-3 mr-4">
                          <MapPin className="h-6 w-6 text-campusblue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">1. Choose Your Route</h3>
                          <p className="text-sm text-gray-600">
                            Select your departure and destination locations.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-campusblue-100 rounded-full p-3 mr-4">
                          <Calendar className="h-6 w-6 text-campusblue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">2. Pick Date & Time</h3>
                          <p className="text-sm text-gray-600">
                            Choose when you want to travel.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-campusblue-100 rounded-full p-3 mr-4">
                          <Car className="h-6 w-6 text-campusblue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">3. Select Vehicle</h3>
                          <p className="text-sm text-gray-600">
                            Choose from available vehicles or join an existing ride.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-campusblue-100 rounded-full p-3 mr-4">
                          <CreditCard className="h-6 w-6 text-campusblue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">4. Confirm & Pay</h3>
                          <p className="text-sm text-gray-600">
                            Review your booking and make payment to confirm.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        
        {/* Features section with illustrations */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-campusblue-700">Why Choose CampusRide?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden">
              <div className="bg-campusblue-100 w-full h-24 absolute top-0 left-0 rounded-t-lg"></div>
              <div className="relative z-10">
                <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <Users className="h-6 w-6 text-campusblue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Share & Save</h3>
                <p className="text-gray-600">
                  Join existing rides and split the cost with other students for affordable travel.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden">
              <div className="bg-campusblue-100 w-full h-24 absolute top-0 left-0 rounded-t-lg"></div>
              <div className="relative z-10">
                <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <Car className="h-6 w-6 text-campusblue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Vehicle Options</h3>
                <p className="text-gray-600">
                  Choose from Sienna, Hiace bus, Long bus, or Corolla based on your needs.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden">
              <div className="bg-campusblue-100 w-full h-24 absolute top-0 left-0 rounded-t-lg"></div>
              <div className="relative z-10">
                <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <MapPin className="h-6 w-6 text-campusblue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Campus Focused</h3>
                <p className="text-gray-600">
                  Specialized in routes between universities and major cities for students.
                </p>
              </div>
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
    </div>
  );
};

export default Index;
