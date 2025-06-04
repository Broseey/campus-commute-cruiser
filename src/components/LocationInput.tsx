
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  state: string;
  disabled?: boolean;
}

// Sample locations for different states in Nigeria
const stateLocations: Record<string, string[]> = {
  "Lagos": [
    "Victoria Island", "Ikeja", "Lekki", "Surulere", "Yaba", "Ikoyi", 
    "Apapa", "Lagos Island", "Mushin", "Alaba", "Oshodi", "Festac"
  ],
  "Abuja": [
    "Central Business District", "Wuse", "Garki", "Maitama", "Asokoro", 
    "Guzape", "Jahi", "Utako", "Kubwa", "Gwagwalada"
  ],
  "Ogun": [
    "Abeokuta", "Ijebu-Ode", "Sagamu", "Ota", "Ilaro", "Shagamu", 
    "Ayetoro", "Imeko", "Remo", "Ewekoro"
  ],
  "Oyo": [
    "Ibadan", "Ogbomoso", "Iseyin", "Oyo", "Saki", "Shaki", 
    "Eruwa", "Igbo-Ora", "Lalupon", "Fiditi"
  ],
  "Rivers": [
    "Port Harcourt", "Obio-Akpor", "Eleme", "Ikwerre", "Oyigbo", 
    "Okrika", "Degema", "Bonny", "Gokana", "Khana"
  ],
  "Kano": [
    "Kano Metropolitan", "Wudil", "Gaya", "Dawakin Kudu", "Karaye", 
    "Rimin Gado", "Tofa", "Kibiya", "Rano", "Bichi"
  ],
  "Kaduna": [
    "Kaduna North", "Kaduna South", "Chikun", "Igabi", "Ikara", 
    "Jaba", "Jema'a", "Kachia", "Kagarko", "Kajuru"
  ]
};

const LocationInput: React.FC<LocationInputProps> = ({
  value,
  onChange,
  placeholder,
  state,
  disabled = false
}) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const locations = stateLocations[state] || [];
  
  const filteredLocations = locations.filter(location =>
    location.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelect = (selectedLocation: string) => {
    setInputValue(selectedLocation);
    onChange(selectedLocation);
    setOpen(false);
  };

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
    onChange(newValue);
    setOpen(newValue.length > 0);
  };

  if (!state) {
    return (
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          className="pl-10 bg-gray-100 rounded-[2rem]"
          placeholder="Select a state first"
          disabled={true}
          value=""
        />
      </div>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 z-10" />
          <Input
            className="pl-10 rounded-[2rem]"
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
            disabled={disabled}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
        <Command>
          <CommandInput 
            placeholder="Search locations..." 
            value={inputValue}
            onValueChange={handleInputChange}
          />
          <CommandList>
            <CommandEmpty>No locations found.</CommandEmpty>
            <CommandGroup>
              {filteredLocations.map((location) => (
                <CommandItem
                  key={location}
                  value={location}
                  onSelect={() => handleSelect(location)}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  {location}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default LocationInput;
