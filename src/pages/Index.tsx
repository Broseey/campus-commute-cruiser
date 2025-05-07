
import { useState } from "react";
import Navbar from "@/components/Navbar";
import AvailableRides from "@/components/AvailableRides";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Calendar, CreditCard, MapPin, Users, CheckCircle, Star, DollarSign, Gift, PhoneCall, Briefcase, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RideBookingFormNew from "@/components/RideBookingFormNew";
import { ScrollArea } from "@/components/ui/scroll-area";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState("book");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Hero section with larger, bolder headline */}
      <div className="flex-1 px-4 py-6 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-5 tracking-tight">
            Campus Rides
            <span className="text-campusorange-700">.</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            Fast, affordable rides for students.
          </p>
          <Link to="/how-it-works">
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-200">
              Learn how it works
            </Button>
          </Link>
        </div>
        
        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {/* Left column - Booking form */}
          <div className="w-full md:w-1/2 flex justify-center">
            <RideBookingFormNew />
          </div>
          
          {/* Right column - Available rides */}
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="book" className="data-[state=active]:bg-black data-[state=active]:text-white">Available Rides</TabsTrigger>
                  <TabsTrigger value="schedule" className="data-[state=active]:bg-black data-[state=active]:text-white">How It Works</TabsTrigger>
                </TabsList>
                <TabsContent value="book" className="mt-4">
                  <AvailableRides />
                </TabsContent>
                <TabsContent value="schedule" className="mt-4">
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold">How to Book Your Ride</h2>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-start">
                        <div className="bg-campusorange-100 rounded-full p-3 mr-4 hover:shadow-glow-orange transition-all duration-300">
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
                        <div className="bg-campusorange-100 rounded-full p-3 mr-4 hover:shadow-glow-orange transition-all duration-300">
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
                        <div className="bg-campusorange-100 rounded-full p-3 mr-4 hover:shadow-glow-orange transition-all duration-300">
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
                        <div className="bg-campusorange-100 rounded-full p-3 mr-4 hover:shadow-glow-orange transition-all duration-300">
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
        </div>
        
        {/* New dark section - Our Services */}
        <div className="bg-black text-white py-16 px-6 rounded-xl mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Services</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
              We offer a range of transportation services tailored to campus needs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-8 rounded-lg transition-transform hover:scale-105">
                <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="h-8 w-8 text-campusorange-500" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-center">Campus Shuttle</h3>
                <p className="text-gray-300 text-center">
                  Join shared rides with other students to save money while traveling to and from campus.
                </p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg transition-transform hover:scale-105">
                <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Car className="h-8 w-8 text-campusorange-500" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-center">Rent & Drive</h3>
                <p className="text-gray-300 text-center">
                  Drivers can rent vehicles for personal use or to provide rides to other students.
                </p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg transition-transform hover:scale-105">
                <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <MapPin className="h-8 w-8 text-campusorange-500" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-center">Private Rides</h3>
                <p className="text-gray-300 text-center">
                  Request private cars to take you to specific locations with comfort and convenience.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Button size="lg" className="bg-campusorange-700 hover:bg-campusorange-800 text-white">
                Explore All Services
              </Button>
            </div>
          </div>
        </div>
        
        {/* Features section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Choose CampusRide?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-campusorange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 hover:shadow-glow-orange transition-all duration-300">
                <Users className="h-6 w-6 text-campusorange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Share & Save</h3>
              <p className="text-gray-600">
                Join existing rides and split the cost with other students for affordable travel.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-campusorange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 hover:shadow-glow-orange transition-all duration-300">
                <Car className="h-6 w-6 text-campusorange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Vehicle Options</h3>
              <p className="text-gray-600">
                Choose from Sienna, Hiace bus, Long bus, or Corolla based on your needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-campusorange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 hover:shadow-glow-orange transition-all duration-300">
                <MapPin className="h-6 w-6 text-campusorange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Campus Focused</h3>
              <p className="text-gray-600">
                Specialized in routes between universities and major cities for students.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bolt-like section with image and text side by side */}
        <div className="bg-white py-16 px-4 rounded-xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <img 
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Driver with car" 
                  className="rounded-xl shadow-md w-full h-auto"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Register Your Vehicle</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-campusorange-700 mr-3" />
                    <p className="text-lg">Earn money by offering campus rides</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-campusorange-700 mr-3" />
                    <p className="text-lg">Full control over your schedule</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-campusorange-700 mr-3" />
                    <p className="text-lg">Quick and easy registration process</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-campusorange-700 mr-3" />
                    <p className="text-lg">Weekly payments directly to your account</p>
                  </div>
                  <div className="mt-8">
                    <Button size="lg" className="bg-black text-white hover:bg-gray-900">
                      Become a Driver
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Professional dark footer */}
      <Footer />
      
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
