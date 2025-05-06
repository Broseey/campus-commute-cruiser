
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";
import { format } from "date-fns";

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  
  const timeSlots = [
    "06:00", "08:00", "10:00", "12:00", 
    "14:00", "16:00", "18:00", "20:00"
  ];

  const popularRoutes = [
    { from: "Lagos", to: "University of Ibadan", price: "₦1,200" },
    { from: "Abuja", to: "Ahmadu Bello University", price: "₦1,500" },
    { from: "Port Harcourt", to: "University of Port Harcourt", price: "₦800" },
    { from: "Lagos", to: "University of Lagos", price: "₦1,000" }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Schedule a Ride</h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <Card>
              <CardHeader>
                <CardTitle>Select Date & Time</CardTitle>
                <CardDescription>Choose when you'd like to travel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border mx-auto"
                  />
                  
                  <div>
                    <h3 className="font-medium mb-3">Available Time Slots</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTimeSlot === time ? "default" : "outline"}
                          className={selectedTimeSlot === time ? "bg-black text-white" : "border-gray-300"}
                          onClick={() => setSelectedTimeSlot(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:w-1/2">
            <Card>
              <CardHeader>
                <CardTitle>Popular Routes</CardTitle>
                <CardDescription>
                  {date ? `Available on ${format(date, "PPP")}` : "Select a date"}
                  {selectedTimeSlot ? ` at ${selectedTimeSlot}` : ""}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularRoutes.map((route, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center p-4 border rounded-md hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 mt-1 text-gray-500" />
                        <div>
                          <p className="font-medium">{route.from} → {route.to}</p>
                          <p className="text-sm text-gray-500">Starting from {route.price}</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="bg-black text-white hover:bg-neutral-800"
                        disabled={!date || !selectedTimeSlot}
                      >
                        Select
                      </Button>
                    </div>
                  ))}
                  
                  {(!date || !selectedTimeSlot) && (
                    <p className="text-center text-sm text-amber-600 mt-4">
                      Please select both a date and time to view available rides
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Custom Route</CardTitle>
                <CardDescription>Need a different route?</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-black text-white hover:bg-neutral-800"
                  disabled={!date || !selectedTimeSlot}
                >
                  Create Custom Booking
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
