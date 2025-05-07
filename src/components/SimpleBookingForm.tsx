
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const SimpleBookingForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    when: 'today'
  });

  const universities = [
    "Babcock University, Ilishan-Remo",
    "Afe Babalola University, Ado-Ekiti",
    "Redeemer's University, Ede",
    "Covenant University, Ota",
    "Bowen University, Iwo"
  ];
  
  const states = [
    "Lagos", 
    "Ogun", 
    "Oyo", 
    "Osun", 
    "Ekiti"
  ];

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-none overflow-hidden bg-white/90 backdrop-blur-sm">
      <div className="p-5 md:p-6">
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-600">From</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-coral-500" />
              <Select 
                value={formData.from} 
                onValueChange={(value) => handleSelectChange('from', value)}
              >
                <SelectTrigger className="pl-10 border border-gray-200 hover:border-coral-300 transition-colors">
                  <SelectValue placeholder="Select university" />
                </SelectTrigger>
                <SelectContent>
                  {universities.map(uni => (
                    <SelectItem key={uni} value={uni}>{uni}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-600">To</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-primary" />
              <Select 
                value={formData.to} 
                onValueChange={(value) => handleSelectChange('to', value)}
              >
                <SelectTrigger className="pl-10 border border-gray-200 hover:border-primary/70 transition-colors">
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  {states.map(state => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-600">When</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-sunshine-500" />
              <Select 
                value={formData.when} 
                onValueChange={(value) => handleSelectChange('when', value)}
              >
                <SelectTrigger className="pl-10 border border-gray-200 hover:border-sunshine-400 transition-colors">
                  <SelectValue placeholder="Select when" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="tomorrow">Tomorrow</SelectItem>
                  <SelectItem value="weekend">This Weekend</SelectItem>
                  <SelectItem value="nextweek">Next Week</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Link to="/book" className="block w-full">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base font-medium transition-all duration-300 hover:scale-[1.01]">
              Find Available Rides <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <div className="text-center mt-1">
            <Link to="/how-it-works" className="text-xs text-gray-500 hover:text-primary transition-colors underline">
              How does it work?
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SimpleBookingForm;
