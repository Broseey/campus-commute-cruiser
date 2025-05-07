
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import AvailableRides from "@/components/AvailableRides";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Calendar, CreditCard, MapPin, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SimpleBookingForm from "@/components/SimpleBookingForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState("book");
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Calculate form scale based on scroll position
  const formScale = Math.max(0.95, 1 - (scrollPosition * 0.0003));
  const formOpacity = Math.max(0.85, 1 - (scrollPosition * 0.001));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-24 h-24 bg-gray-100 rounded-full opacity-60 animate-float"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-gray-100 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-10 left-1/3 w-16 h-16 bg-gray-100 rounded-full opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-6 pt-12 pb-16 md:pt-24 md:pb-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left side - Hero text */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-gray-900">
                  Campus Travel Made Simple
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Reliable transport connecting universities to cities across Nigeria.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="flex items-center bg-white py-1.5 px-4 rounded-full shadow-sm border border-gray-200">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <span className="ml-1.5 text-sm font-medium">User Rated 4.9/5</span>
                  </div>
                  <div className="flex items-center bg-white py-1.5 px-4 rounded-full shadow-sm border border-gray-200">
                    <Users className="h-4 w-4 text-gray-600" />
                    <span className="ml-1.5 text-sm font-medium">10,000+ Students</span>
                  </div>
                  <div className="flex items-center bg-white py-1.5 px-4 rounded-full shadow-sm border border-gray-200">
                    <Car className="h-4 w-4 text-gray-600" />
                    <span className="ml-1.5 text-sm font-medium">Safe Travels</span>
                  </div>
                </div>
              </div>
              
              {/* Right side - Simple Booking Form */}
              <div 
                className="w-full md:w-5/12 transition-all duration-300 sticky-form"
                style={{
                  transform: `scale(${formScale})`,
                  opacity: formOpacity
                }}
              >
                <SimpleBookingForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">How CampusRide Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Getting from campus to city has never been easier.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Route</h3>
                <p className="text-gray-600">Select from popular university-to-city routes all across Nigeria.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Join or Book</h3>
                <p className="text-gray-600">Share a ride with others or book the entire vehicle for your group.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Car className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enjoy the Ride</h3>
                <p className="text-gray-600">Relax in comfortable vehicles driven by verified, professional drivers.</p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="border-gray-400 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200">
                  Learn More About How It Works
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Tabs Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left column - Available Rides */}
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6">
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="book" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white">
                        Available Rides
                      </TabsTrigger>
                      <TabsTrigger value="schedule" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white">
                        How It Works
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="book" className="mt-4">
                      <AvailableRides />
                    </TabsContent>
                    <TabsContent value="schedule" className="mt-4">
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Your Journey in 4 Simple Steps</h3>
                        
                        <div className="grid grid-cols-1 gap-4">
                          <div className="flex items-start">
                            <div className="bg-gray-100 rounded-full p-3 mr-4 transition-all duration-300">
                              <MapPin className="h-6 w-6 text-gray-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">1. Choose Your Route</h4>
                              <p className="text-sm text-gray-600">
                                Select from popular university and city locations.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-gray-100 rounded-full p-3 mr-4 transition-all duration-300">
                              <Calendar className="h-6 w-6 text-gray-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">2. Pick Date & Time</h4>
                              <p className="text-sm text-gray-600">
                                Choose when you want to travel.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-gray-100 rounded-full p-3 mr-4 transition-all duration-300">
                              <Car className="h-6 w-6 text-gray-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">3. Select Vehicle</h4>
                              <p className="text-sm text-gray-600">
                                Choose your ride or join an existing one.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-gray-100 rounded-full p-3 mr-4 transition-all duration-300">
                              <CreditCard className="h-6 w-6 text-gray-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">4. Confirm & Pay</h4>
                              <p className="text-sm text-gray-600">
                                Quick, secure payment to confirm your seat.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
              
              {/* Right column - Testimonials */}
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6">
                  <h3 className="text-xl font-semibold mb-4">What Students Say</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                          <span className="text-gray-700 font-medium">AO</span>
                        </div>
                        <div>
                          <p className="font-medium">Adewale O.</p>
                          <p className="text-xs text-gray-500">Babcock University</p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"CampusRide has made traveling home for holidays so much easier. No more stressful bus stations!"</p>
                      <div className="flex mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-amber-500 fill-amber-500" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                          <span className="text-gray-700 font-medium">CU</span>
                        </div>
                        <div>
                          <p className="font-medium">Chioma U.</p>
                          <p className="text-xs text-gray-500">Covenant University</p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"I've met so many interesting people from other schools while sharing rides. Safe, affordable and on time!"</p>
                      <div className="flex mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-amber-500 fill-amber-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Link to="/testimonials">
                      <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100">
                        Read More Reviews
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Campus Transport Services</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">We offer multiple options to fit your travel needs.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Shared Rides</h3>
                <p className="text-gray-300 text-sm">
                  Join other students traveling on the same route to save money.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Full Vehicle</h3>
                <p className="text-gray-300 text-sm">
                  Book the entire vehicle for your group or when you need privacy.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Scheduled Trips</h3>
                <p className="text-gray-300 text-sm">
                  Plan ahead by scheduling rides for future dates.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Rent & Drive</h3>
                <p className="text-gray-300 text-sm">
                  Drivers can rent vehicles through our platform for additional income.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-white text-gray-900 hover:bg-gray-200 font-medium py-6 px-8 rounded-lg">
                Explore All Services
              </Button>
            </div>
          </div>
        </section>
        
        {/* Register Your Vehicle Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">Register Your Vehicle</h2>
                <p className="text-gray-600 mb-6">
                  Are you a driver with a reliable vehicle? Join our platform to provide safe transportation for students and earn additional income.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Earn competitive rates on campus-city routes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Flexible schedule that fits around your availability</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Simple payment system with weekly payouts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Rent options available if you don't own a vehicle</span>
                  </li>
                </ul>
                
                <Button className="bg-gray-900 hover:bg-gray-800 text-white py-6 px-8 rounded-lg">
                  Register As A Driver
                </Button>
              </div>
              
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" 
                    alt="Driver with car" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for your next trip?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a ride today and experience the easiest way to travel between campus and city.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/book">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white py-6 px-8 rounded-lg">
                  Book a Ride Now
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 py-6 px-8 rounded-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <style>
        {`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .sticky-form {
          position: relative;
          z-index: 10;
        }
        
        @media (min-width: 768px) {
          .sticky-form {
            position: sticky;
            top: 20px;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Index;
