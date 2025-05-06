
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Calendar, 
  Map, 
  Clock, 
  Navigation,
  User,
  CreditCard,
  MessageCircle,
  ChevronRight,
  MapPin
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

// Sample upcoming ride
const upcomingRide = {
  id: "ride-123",
  from: "Lagos",
  to: "University of Ibadan",
  date: "May 16, 2023",
  time: "09:00 AM",
  driver: "Emmanuel O.",
  vehicle: "Toyota Sienna",
  vehicleColor: "Silver",
  licensePlate: "LND 432 JK",
  pickup: "Ikeja Bus Terminal",
  status: "confirmed"
};

// Sample recent rides
const recentRides = [
  {
    id: "ride-122",
    from: "University of Ibadan",
    to: "Lagos",
    date: "May 2, 2023",
    price: "₦1,200",
    status: "completed"
  },
  {
    id: "ride-121",
    from: "Lagos",
    to: "University of Ibadan",
    date: "April 29, 2023",
    price: "₦1,200",
    status: "completed"
  },
  {
    id: "ride-120",
    from: "University of Ibadan",
    to: "Lagos",
    date: "April 15, 2023",
    price: "₦1,100",
    status: "completed"
  }
];

// Quick routes suggestions
const quickRoutes = [
  { 
    from: "Lagos", 
    to: "University of Ibadan", 
    price: "₦1,200" 
  },
  { 
    from: "Abuja", 
    to: "Ahmadu Bello University", 
    price: "₦1,500" 
  },
  { 
    from: "Port Harcourt", 
    to: "University of Port Harcourt", 
    price: "₦800" 
  }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 px-4 py-6 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Welcome header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, John</h1>
          <p className="text-gray-600">Where are you heading to today?</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Main actions and upcoming ride */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Link to="/book" className="w-full">
                <Button className="w-full bg-black text-white hover:bg-neutral-800 h-14 text-base">
                  <Car className="mr-2 h-5 w-5" />
                  Book a Ride
                </Button>
              </Link>
              <Link to="/schedule" className="w-full">
                <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white h-14 text-base">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Ride
                </Button>
              </Link>
            </div>
            
            {/* Upcoming ride */}
            {upcomingRide && (
              <Card className="border-black border-2">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Upcoming Ride</CardTitle>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Confirmed
                    </Badge>
                  </div>
                  <CardDescription>
                    {upcomingRide.date}, {upcomingRide.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="min-w-[24px] mr-4 flex flex-col items-center">
                        <div className="h-3 w-3 bg-black rounded-full"></div>
                        <div className="h-12 border-l border-dashed border-gray-300"></div>
                        <div className="h-3 w-3 bg-black rounded-full"></div>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <p className="font-medium">{upcomingRide.from}</p>
                          <p className="text-xs text-gray-500">{upcomingRide.pickup}</p>
                        </div>
                        <div>
                          <p className="font-medium">{upcomingRide.to}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100 space-y-2">
                      <div className="flex items-center">
                        <Car className="h-5 w-5 mr-3 text-gray-500" />
                        <div>
                          <p className="text-sm">{upcomingRide.vehicle}, {upcomingRide.vehicleColor}</p>
                          <p className="text-xs text-gray-500">{upcomingRide.licensePlate}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <User className="h-5 w-5 mr-3 text-gray-500" />
                        <p className="text-sm">{upcomingRide.driver}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Contact Driver
                      </Button>
                      <Button className="bg-black text-white hover:bg-neutral-800">
                        <Navigation className="mr-2 h-4 w-4" />
                        Track Ride
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Quick Route Suggestions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Route Selection</CardTitle>
                <CardDescription>Popular routes for your journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {quickRoutes.map((route, index) => (
                    <Link to="/book" key={index}>
                      <div className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex items-center">
                          <div className="min-w-[24px] mr-4 flex flex-col items-center">
                            <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                            <div className="h-6 border-l border-dashed border-gray-300"></div>
                            <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                          </div>
                          <div>
                            <p className="text-sm font-medium">{route.from} → {route.to}</p>
                            <p className="text-xs text-gray-500">Starting from {route.price}</p>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right column - Activity and account */}
          <div className="space-y-6">
            {/* Activity Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Rides</CardTitle>
                <CardDescription>Your past campus journeys</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {recentRides.map((ride) => (
                    <Link to={`/rides/${ride.id}`} key={ride.id}>
                      <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                        <div>
                          <p className="font-medium text-sm">{ride.from} → {ride.to}</p>
                          <p className="text-xs text-gray-500">{ride.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold">{ride.price}</p>
                          <Badge variant="outline" className="text-xs bg-gray-50">
                            {ride.status}
                          </Badge>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="p-4 text-center">
                  <Link to="/my-rides">
                    <Button variant="link" className="text-black hover:text-gray-700">
                      View all rides
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Account Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Account</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  <Link to="/account/payment">
                    <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-3 text-gray-500" />
                        <p className="text-sm font-medium">Payment Methods</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </Link>
                  <Link to="/account/profile">
                    <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <User className="h-5 w-5 mr-3 text-gray-500" />
                        <p className="text-sm font-medium">Personal Details</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </Link>
                  <Link to="/account/saved-locations">
                    <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-3 text-gray-500" />
                        <p className="text-sm font-medium">Saved Locations</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Mobile Bottom Navigation */}
        {isMobile && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full grid grid-cols-4 bg-transparent border-t">
                <TabsTrigger value="home" className="data-[state=active]:bg-black data-[state=active]:text-white rounded-none">
                  <div className="flex flex-col items-center py-2">
                    <Home className="h-5 w-5" />
                    <span className="text-xs mt-1">Home</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="activity" className="data-[state=active]:bg-black data-[state=active]:text-white rounded-none">
                  <div className="flex flex-col items-center py-2">
                    <Clock className="h-5 w-5" />
                    <span className="text-xs mt-1">Activity</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="schedule" className="data-[state=active]:bg-black data-[state=active]:text-white rounded-none">
                  <div className="flex flex-col items-center py-2">
                    <Calendar className="h-5 w-5" />
                    <span className="text-xs mt-1">Schedule</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="account" className="data-[state=active]:bg-black data-[state=active]:text-white rounded-none">
                  <div className="flex flex-col items-center py-2">
                    <User className="h-5 w-5" />
                    <span className="text-xs mt-1">Account</span>
                  </div>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        )}
      </div>
      
      {/* Footer with padding for mobile navigation */}
      <footer className={`bg-white py-6 mt-8 ${isMobile ? 'pb-24' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>© 2023 CampusRide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
