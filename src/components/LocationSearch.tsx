
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";

// Sample locations list (in a real app, this would come from an API)
const popularLocations = [
  "University of Lagos, Lagos",
  "University of Ibadan, Ibadan",
  "University of Nigeria, Nsukka",
  "Obafemi Awolowo University, Ile-Ife",
  "Ahmadu Bello University, Zaria",
  "Federal University of Technology, Akure",
  "University of Port Harcourt, Port Harcourt",
  "University of Benin, Benin City"
];

interface LocationSearchProps {
  type: "from" | "to";
  value: string;
  onChange: (value: string) => void;
}

const LocationSearch = ({ type, value, onChange }: LocationSearchProps) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredLocations = searchQuery 
    ? popularLocations.filter(loc => 
        loc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : popularLocations;
  
  const handleSelect = (location: string) => {
    onChange(location);
    setSearchFocused(false);
  };
  
  return (
    <div className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder={type === "from" ? "From where?" : "Where to?"}
          className="pl-10 pr-10 py-6"
          value={value || searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            if (!value) onChange("");
          }}
          onFocus={() => setSearchFocused(true)}
        />
        {value && (
          <Button
            size="sm"
            variant="ghost"
            className="absolute right-2 top-2"
            onClick={() => {
              onChange("");
              setSearchQuery("");
            }}
          >
            Clear
          </Button>
        )}
      </div>
      
      {searchFocused && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-64 overflow-auto">
          <div className="py-1">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(location)}
                >
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{location}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500">No locations found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
