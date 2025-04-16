
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { MapPin, ArrowRight, ArrowLeft } from "lucide-react";

// List of Nigerian universities
const nigerianUniversities = [
  "University of Lagos, Lagos",
  "University of Ibadan, Ibadan",
  "University of Nigeria, Nsukka",
  "Obafemi Awolowo University, Ile-Ife",
  "Ahmadu Bello University, Zaria",
  "Federal University of Technology, Akure",
  "University of Port Harcourt, Port Harcourt",
  "University of Benin, Benin City",
  "University of Ilorin, Ilorin",
  "Federal University of Technology, Minna",
  "University of Jos, Jos",
  "University of Calabar, Calabar",
  "Nnamdi Azikiwe University, Awka",
  "Lagos State University, Lagos",
  "Bayero University, Kano"
];

interface LocationSearchProps {
  type: "from" | "to";
  value: string;
  onChange: (value: string) => void;
}

const LocationSearch = ({ type, value, onChange }: LocationSearchProps) => {
  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${type === "from" ? "bg-green-100" : "bg-purple-100"}`}>
          {type === "from" ? (
            <ArrowRight className="h-4 w-4 text-green-600" />
          ) : (
            <ArrowLeft className="h-4 w-4 text-purple-600" />
          )}
        </div>
        
        <div className="flex-1">
          <label htmlFor={`location-${type}`} className="block text-sm font-medium text-gray-700 mb-1">
            {type === "from" ? "Departing From" : "Going To"}
          </label>
          <Select value={value} onValueChange={onChange}>
            <SelectTrigger id={`location-${type}`} className="w-full">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                <SelectValue placeholder={type === "from" ? "Select departure university" : "Select destination university"} />
              </div>
            </SelectTrigger>
            <SelectContent>
              {nigerianUniversities.map((university) => (
                <SelectItem key={university} value={university}>
                  {university}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {value && (
        <div className="mt-1 flex justify-end">
          <Button
            size="sm"
            variant="ghost"
            className="h-6 text-xs"
            onClick={() => onChange("")}
          >
            Clear
          </Button>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
