
import { useState } from "react";
import Navbar from "@/components/Navbar";
import RideBookingForm from "@/components/RideBookingForm";
import AvailableRides from "@/components/AvailableRides";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Clock, Calendar, Shield, CreditCard, MapPin, Users } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("book");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="pt-16 flex-1">
        {/* Header with background */}
        <div className="relative bg-primary text-white py-12 md:py-20 mb-8">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                Campus Rides Made Easy
              </h1>
              <p className="text-white/80 max-w-2xl mx-auto text-lg">
                Book affordable rides to and from your university with just a few clicks.
                Join existing rides or book a full vehicle for your journey.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpdmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60')] bg-cover opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary"></div>
        </div>
        
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column - Booking form */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="w-full max-w-md">
                <RideBookingForm />
              </div>
            </div>
            
            {/* Right column - Available rides and info */}
            <div className="w-full lg:w-3/5">
              <Card className="bg-white rounded-2xl shadow-sm p-6 border-0 glass-card mb-8">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="book">Available Rides</TabsTrigger>
                    <TabsTrigger value="schedule">How It Works</TabsTrigger>
                  </TabsList>
                  <TabsContent value="book">
                    <AvailableRides />
                  </TabsContent>
                  <TabsContent value="schedule">
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold">How to Book Your Ride</h2>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-start">
                          <div className="rounded-full p-3 mr-4 bg-primary/10 text-primary">
                            <MapPin className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-medium">1. Choose Your Route</h3>
                            <p className="text-sm text-gray-600">
                              Select your departure and destination locations.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="rounded-full p-3 mr-4 bg-primary/10 text-primary">
                            <Calendar className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-medium">2. Pick Date & Time</h3>
                            <p className="text-sm text-gray-600">
                              Choose when you want to travel.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="rounded-full p-3 mr-4 bg-primary/10 text-primary">
                            <Users className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-medium">3. Select Vehicle</h3>
                            <p className="text-sm text-gray-600">
                              Choose from available vehicles or join an existing ride.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="rounded-full p-3 mr-4 bg-primary/10 text-primary">
                            <CreditCard className="h-6 w-6" />
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
              </Card>
              
              {/* Testimonials */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">What Our Students Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-5 glass-card border-0">
                    <p className="italic text-gray-600">
                      "CampusRide made my weekend trips home so much easier. I can share rides with other students and save money!"
                    </p>
                    <div className="mt-4 flex items-center">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">OA</div>
                      <div className="ml-3">
                        <p className="font-medium">Oluwaseun A.</p>
                        <p className="text-sm text-gray-500">Covenant University</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-5 glass-card border-0">
                    <p className="italic text-gray-600">
                      "I love the flexibility of choosing between joining a ride or booking the whole vehicle. Perfect for group trips!"
                    </p>
                    <div className="mt-4 flex items-center">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">CE</div>
                      <div className="ml-3">
                        <p className="font-medium">Chioma E.</p>
                        <p className="text-sm text-gray-500">Babcock University</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Why Choose CampusRide?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 glass-card border-0 hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Share & Save</h3>
                <p className="text-gray-600">
                  Join existing rides and split the cost with other students for affordable travel.
                </p>
              </Card>
              
              <Card className="p-6 glass-card border-0 hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Book rides in advance or find immediate departures when you need to travel.
                </p>
              </Card>
              
              <Card className="p-6 glass-card border-0 hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Verified Drivers</h3>
                <p className="text-gray-600">
                  All drivers are thoroughly vetted and have excellent safety records.
                </p>
              </Card>
              
              <Card className="p-6 glass-card border-0 hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Campus Focused</h3>
                <p className="text-gray-600">
                  Specialized in routes between universities and major cities for students.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-primary font-bold text-xl mb-2">CampusRide</h3>
              <p className="text-gray-500 max-w-xs">The smart way for students to travel between campus and anywhere in Nigeria.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h4 className="text-sm font-semibold mb-3 text-gray-800">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-500 hover:text-primary">About Us</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-primary">Career</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-primary">Blog</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-3 text-gray-800">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-500 hover:text-primary">Help Center</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-primary">Safety</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-primary">Terms of Service</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-3 text-gray-800">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-500 hover:text-primary">info@campusride.com</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-primary">+234 812 345 6789</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
            <p>© 2025 CampusRide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
