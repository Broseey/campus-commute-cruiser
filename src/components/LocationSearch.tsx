
import React, { useEffect, useState } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { MapPin } from "lucide-react";

type LocationType = "university" | "state" | "city" | null;

interface LocationSearchProps {
  type: "from" | "to";
  value: string;
  onChange: (value: string) => void;
  otherLocationType: LocationType;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ type, value, onChange, otherLocationType }) => {
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  
  // Sample location data
  const universities = [
    "Babcock University, Ilishan-Remo",
    "Afe Babalola University, Ado-Ekiti",
    "Redeemer's University, Ede",
    "Covenant University, Ota",
    "Bowen University, Iwo",
    "Lead City University, Ibadan",
    "Pan-Atlantic University, Lagos",
    "Landmark University, Omu-Aran",
    "American University of Nigeria, Yola"
  ];
  
  const states = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", 
    "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", 
    "FCT - Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", 
    "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", 
    "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
  ];
  
  const cities = [
    "Lagos City", "Abuja", "Ibadan", "Kano", "Port Harcourt", "Benin City", 
    "Kaduna", "Enugu", "Aba", "Onitsha", "Warri", "Ilorin", "Jos", "Maiduguri"
  ];
  
  // Helper function to get all available locations
  const getAllLocations = () => {
    return [...universities, ...states, ...cities];
  };

  // Update filtered locations based on other location type
  useEffect(() => {
    // By default, show all locations
    let availableLocations = getAllLocations();
    
    setFilteredLocations(availableLocations);
  }, [otherLocationType]);

  return (
    <div>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            <SelectValue placeholder={type === "from" ? "Select origin" : "Select destination"} />
          </div>
        </SelectTrigger>
        <SelectContent>
          <div className="mb-2 px-2 py-1 bg-gray-100 text-sm font-medium">Universities</div>
          {universities.map((loc) => (
            <SelectItem key={`uni-${loc}`} value={loc}>{loc}</SelectItem>
          ))}
          
          <div className="mb-2 mt-3 px-2 py-1 bg-gray-100 text-sm font-medium">States</div>
          {states.map((loc) => (
            <SelectItem key={`state-${loc}`} value={loc}>{loc}</SelectItem>
          ))}
          
          <div className="mb-2 mt-3 px-2 py-1 bg-gray-100 text-sm font-medium">Cities</div>
          {cities.map((loc) => (
            <SelectItem key={`city-${loc}`} value={loc}>{loc}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LocationSearch;
