
import { useState } from "react";
import Navbar from "@/components/Navbar";
import RideBookingForm from "@/components/RideBookingForm";
import AvailableRides from "@/components/AvailableRides";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Calendar, CreditCard, MapPin, Users } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("book");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section with Uber-style car illustration */}
      <div className="w-full bg-gradient-to-b from-white to-gray-100 flex flex-col md:flex-row items-center justify-between py-6 md:py-12 px-4 md:px-12" style={{minHeight: 320}}>
        <div className="flex-1 flex flex-col items-center md:items-start md:pl-6 pt-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-black">Campus Rides Made Easy</h1>
          <p className="text-gray-800 max-w-2xl md:text-lg mb-6">
            Book affordable rides to and from your university with just a few clicks. Join existing rides or book a full vehicle for your journey.
          </p>
        </div>
        <div className="flex-1 w-full flex justify-center items-center">
          <img
            src="/lovable-uploads/1eaa90ec-bc51-4767-973f-6f70ca568685.png"
            alt="CampusRide Cars"
            className="max-h-60 md:max-h-72 w-auto object-contain drop-shadow-lg"
            style={{ background: "transparent" }}
            loading="lazy"
          />
        </div>
      </div>
      
      <div className="flex-1 px-4 py-6 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left column - Booking form */}
          <div className="w-full md:w-1/2 flex justify-center items-start">
            <div className="flex flex-col w-full">
              {/* Add an image header to the form on smaller screens */}
              <div className="md:hidden w-full flex justify-center mb-4">
                <img
                  src="/lovable-uploads/bee217b3-8e43-4785-a8f1-9496714038f8.png"
                  alt="Happy Student"
                  className="rounded-2xl max-h-36 object-cover shadow-md"
                  loading="lazy"
                />
              </div>
              <RideBookingForm />
            </div>
          </div>
          
          {/* Right column - Available rides, with illustrative image */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col gap-4">
              <div className="hidden md:flex justify-center w-full mb-1">
                <img
                  src="/lovable-uploads/bee217b3-8e43-4785-a8f1-9496714038f8.png"
                  alt="Student traveler illustration"
                  className="w-full max-h-40 object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
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
                        <span className="bg-black rounded-full p-3 mr-4"><MapPin className="h-6 w-6 text-white" /></span>
                        <div>
                          <h3 className="font-medium">1. Choose Your Route</h3>
                          <p className="text-sm text-gray-700">
                            Select your departure and destination locations.
                          </p>
                        </div>
                      </div>  
                      <div className="flex items-start">
                        <span className="bg-black rounded-full p-3 mr-4"><Calendar className="h-6 w-6 text-white" /></span>
                        <div>
                          <h3 className="font-medium">2. Pick Date & Time</h3>
                          <p className="text-sm text-gray-700">
                            Choose when you want to travel.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-black rounded-full p-3 mr-4"><Car className="h-6 w-6 text-white" /></span>
                        <div>
                          <h3 className="font-medium">3. Select Vehicle</h3>
                          <p className="text-sm text-gray-700">
                            Choose from available vehicles or join an existing ride.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-black rounded-full p-3 mr-4"><CreditCard className="h-6 w-6 text-white" /></span>
                        <div>
                          <h3 className="font-medium">4. Confirm & Pay</h3>
                          <p className="text-sm text-gray-700">
                            Review your booking and make payment to confirm.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            {/* Extra illustration below ride cards */}
            <div className="mt-6 flex items-center justify-center">
              <img
                src="/lovable-uploads/1b58a762-8c1f-4cb2-8a90-75055e817a6a.png"
                alt="Students Group"
                className="max-h-40 object-contain rounded-lg w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
        {/* Features section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-black">Why Choose CampusRide?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-bold text-lg mb-2">Share & Save</h3>
              <p className="text-gray-700">
                Join existing rides and split the cost with other students for affordable travel.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-bold text-lg mb-2">Vehicle Options</h3>
              <p className="text-gray-700">
                Choose from Sienna, Hiace bus, Long bus, or Corolla based on your needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-bold text-lg mb-2">Campus Focused</h3>
              <p className="text-gray-700">
                Specialized in routes between universities and major cities for students.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white py-6 mt-16 border-t">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>© 2023 CampusRide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
