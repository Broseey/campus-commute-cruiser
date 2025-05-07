import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import LocationSearch from "@/components/LocationSearch";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { MapPin, Calendar as CalendarIcon, Clock, Car, Users } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import DirectionToggle from "./DirectionToggle";

type BookingStep = 'location' | 'date' | 'vehicle';
type LocationType = "university" | "state" | "city" | null;
type Direction = 'to-university' | 'from-university';

const vehicles = [
  { id: 'sienna', name: 'Sienna', capacity: 6, price: 5000 },
  { id: 'hiace', name: 'Hiace Bus', capacity: 14, price: 7000 },
  { id: 'long-bus', name: 'Long Bus', capacity: 18, price: 8000 },
  { id: 'corolla', name: 'Corolla', capacity: 4, price: 3500 },
];

const getLocationType = (value: string): "university" | "state" | "city" | null => {
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
  
  if (universities.includes(value)) return "university";
  if (states.includes(value)) return "state";
  if (cities.includes(value)) return "city";
  return null;
};

const isValidLocationCombination = (fromType: LocationType, toType: LocationType, direction: Direction) => {
  if (!fromType || !toType) return false;
  
  // For to-university direction: fromType should be state/city, toType should be university
  if (direction === 'to-university') {
    return (fromType === "state" || fromType === "city") && toType === "university";
  }
  
  // For from-university direction: fromType should be university, toType should be state/city
  if (direction === 'from-university') {
    return fromType === "university" && (toType === "state" || toType === "city");
  }
  
  return false;
};

const RideBookingForm = () => {
  const [currentStep, setCurrentStep] = useState<BookingStep>('location');
  const [bookingType, setBookingType] = useState<'join' | 'full'>('join');
  const [direction, setDirection] = useState<Direction>('to-university');
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: null as Date | null,
    time: '',
    passengers: '1',
    vehicleId: ''
  });

  const fromLocationType = useMemo(() => getLocationType(formData.from), [formData.from]);
  const toLocationType = useMemo(() => getLocationType(formData.to), [formData.to]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string | Date | null) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date: Date | null) => {
    setFormData({ ...formData, date });
  };

  const handleDirectionChange = (newDirection: Direction) => {
    setDirection(newDirection);
    // Clear location selections when direction changes
    setFormData({ ...formData, from: '', to: '' });
  };

  const nextStep = () => {
    if (currentStep === 'location') setCurrentStep('date');
    else if (currentStep === 'date') setCurrentStep('vehicle');
  };

  const prevStep = () => {
    if (currentStep === 'vehicle') setCurrentStep('date');
    else if (currentStep === 'date') setCurrentStep('location');
  };

  const handleSubmit = () => {
    console.log('Booking submitted:', { bookingType, direction, ...formData });
    window.location.href = '/booking-confirmation';
  };

  const selectedVehicle = vehicles.find(v => v.id === formData.vehicleId);

  // Check if location step is valid based on direction
  const isLocationStepValid = formData.from && formData.to && isValidLocationCombination(fromLocationType, toLocationType, direction);

  return (
    <Card className="w-full max-w-md shadow-lg transition-all duration-500 form-booking-card">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Book Your Transport</h2>
        
        <Tabs value={bookingType} onValueChange={(v) => setBookingType(v as 'join' | 'full')} className="mb-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="join">Join a Ride</TabsTrigger>
            <TabsTrigger value="full">Book Full Vehicle</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <DirectionToggle direction={direction} onChange={handleDirectionChange} />

        <div className="mb-6">
          <div className="flex justify-between">
            <div className={`flex flex-col items-center ${currentStep === 'location' ? 'text-black' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${currentStep === 'location' ? 'bg-black text-white' : 'bg-gray-200'}`}>1</div>
              <span className="text-xs">Location</span>
            </div>
            <div className={`flex flex-col items-center ${currentStep === 'date' ? 'text-black' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${currentStep === 'date' ? 'bg-black text-white' : 'bg-gray-200'}`}>2</div>
              <span className="text-xs">Date & Time</span>
            </div>
            <div className={`flex flex-col items-center ${currentStep === 'vehicle' ? 'text-black' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${currentStep === 'vehicle' ? 'bg-black text-white' : 'bg-gray-200'}`}>3</div>
              <span className="text-xs">Vehicle</span>
            </div>
          </div>
          <div className="mt-2 h-1 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-black rounded-full transition-all" 
              style={{ width: currentStep === 'location' ? '33.3%' : currentStep === 'date' ? '66.6%' : '100%' }}
            ></div>
          </div>
        </div>

        {currentStep === 'location' && (
          <div className="space-y-6">
            <div className="form-field">
              <LocationSearch
                type="from"
                value={formData.from}
                otherLocationType={toLocationType}
                onChange={(value) => handleSelectChange('from', value)}
              />
            </div>
            
            <div className="form-field">
              <LocationSearch
                type="to"
                value={formData.to}
                otherLocationType={fromLocationType}
                onChange={(value) => handleSelectChange('to', value)}
              />
            </div>
            
            {(formData.from && formData.to && !isLocationStepValid) && (
              <div className="text-destructive text-sm mt-2">
                {direction === 'to-university' ? 
                  'For going to university, select a city or state as departure and a university as destination.' : 
                  'For coming from university, select a university as departure and a city or state as destination.'}
              </div>
            )}
            
            <Button 
              onClick={nextStep} 
              className="w-full bg-black text-white hover:bg-gray-900" 
              disabled={!isLocationStepValid}
            >
              Next
            </Button>
          </div>
        )}

        {currentStep === 'date' && (
          <div className="space-y-4">
            <div className="form-field">
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Select Date</label>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full pl-3 text-left font-normal flex justify-between items-center"
                  >
                    <div className="flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                      {formData.date ? (
                        format(formData.date, "PPP")
                      ) : (
                        <span className="text-gray-500">Select a date</span>
                      )}
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.date || undefined}
                    onSelect={handleDateChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="form-field relative">
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Select Time</label>
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Select 
                  value={formData.time} 
                  onValueChange={(value) => handleSelectChange('time', value)}
                >
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {["06:00", "07:00", "08:00", "09:00", "10:00", "12:00", "14:00", "16:00", "18:00"].map(time => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="form-field relative">
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Number of Passengers</label>
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Select 
                  value={formData.passengers} 
                  onValueChange={(value) => handleSelectChange('passengers', value)}
                >
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Number of passengers" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'passenger' : 'passengers'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={prevStep} className="w-1/2">
                Back
              </Button>
              <Button 
                onClick={nextStep} 
                className="w-1/2 bg-black text-white" 
                disabled={!formData.date || !formData.time}
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {currentStep === 'vehicle' && (
          <div className="space-y-4">
            <div className="form-field relative">
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Select Vehicle</label>
              </div>
              <div className="relative">
                <Car className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Select 
                  value={formData.vehicleId} 
                  onValueChange={(value) => handleSelectChange('vehicleId', value)}
                >
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Select a vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    {vehicles.map(vehicle => (
                      <SelectItem key={vehicle.id} value={vehicle.id}>
                        {vehicle.name} - {vehicle.capacity} seats
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {selectedVehicle && (
              <div className="p-4 border rounded-lg bg-gray-50">
                <h3 className="font-semibold">{selectedVehicle.name}</h3>
                <div className="text-sm text-gray-600 mt-1">
                  <p>Capacity: {selectedVehicle.capacity} passengers</p>
                  <p>Price: ₦{selectedVehicle.price.toLocaleString()}</p>
                  {bookingType === 'join' && (
                    <p>Your Price: ₦{Math.round(selectedVehicle.price / selectedVehicle.capacity).toLocaleString()} per person</p>
                  )}
                </div>
              </div>
            )}

            <div className="flex gap-2">
              <Button variant="outline" onClick={prevStep} className="w-1/2">
                Back
              </Button>
              <Button 
                onClick={handleSubmit} 
                className="w-1/2 bg-black text-white hover:bg-gray-900" 
                disabled={!formData.vehicleId}
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default RideBookingForm;
