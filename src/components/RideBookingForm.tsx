
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { MapPin, Calendar, Clock, Users, Car, ArrowRight, Building, Navigation, ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Toggle } from "@/components/ui/toggle";

type BookingStep = 'direction' | 'location' | 'date' | 'vehicle';
type DirectionType = 'to-campus' | 'from-campus';

// List of Nigerian universities and states
const nigerianLocations = {
  universities: [
    "Babcock University, Ilishan-Remo",
    "Afe Babalola University, Ado-Ekiti",
    "Redeemer's University, Ede",
    "Covenant University, Ota",
    "Bowen University, Iwo",
    "Lead City University, Ibadan",
    "Pan-Atlantic University, Lagos",
    "Landmark University, Omu-Aran",
    "American University of Nigeria, Yola"
  ],
  states: [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", 
    "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", 
    "FCT - Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
    "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun",
    "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
    "Yobe", "Zamfara"
  ]
};

const vehicles = [
  { id: 'sienna', name: 'Sienna', capacity: 6, price: 5000, image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
  { id: 'hiace', name: 'Hiace Bus', capacity: 14, price: 7000, image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
  { id: 'long-bus', name: 'Long Bus', capacity: 18, price: 8000, image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
  { id: 'corolla', name: 'Corolla', capacity: 4, price: 3500, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
];

interface BookingFormValues {
  direction: DirectionType;
  origin: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  vehicleId: string;
  bookingType: 'join' | 'full';
}

const RideBookingForm = () => {
  const [currentStep, setCurrentStep] = useState<BookingStep>('direction');
  const [selectedLocationType, setSelectedLocationType] = useState<"university" | "state">("university");
  
  const form = useForm<BookingFormValues>({
    defaultValues: {
      direction: 'to-campus',
      origin: '',
      destination: '',
      date: '',
      time: '',
      passengers: '1',
      vehicleId: '',
      bookingType: 'join'
    }
  });
  
  const { watch, setValue } = form;
  const bookingType = watch('bookingType');
  const direction = watch('direction');
  const selectedVehicleId = watch('vehicleId');
  
  const selectedVehicle = vehicles.find(v => v.id === selectedVehicleId);

  const nextStep = () => {
    if (currentStep === 'direction') setCurrentStep('location');
    else if (currentStep === 'location') setCurrentStep('date');
    else if (currentStep === 'date') setCurrentStep('vehicle');
  };

  const prevStep = () => {
    if (currentStep === 'vehicle') setCurrentStep('date');
    else if (currentStep === 'date') setCurrentStep('location');
    else if (currentStep === 'location') setCurrentStep('direction');
  };

  const handleSubmit = () => {
    // In a real app, this would submit the booking
    console.log('Booking submitted:', form.getValues());
    // Navigate to booking confirmation page
    window.location.href = '/booking-confirmation';
  };

  // Determine what to show for origin/destination based on direction
  const originLabel = direction === 'to-campus' ? 'Your Location' : 'Campus';
  const destinationLabel = direction === 'to-campus' ? 'Campus' : 'Your Destination';

  return (
    <Card className="w-full max-w-md shadow-lg border-0 glass-card overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {currentStep === 'direction' ? 'Where are you headed?' : 'Book Your Ride'}
        </h2>
        
        {/* Step navigation - only show if not on first step */}
        {currentStep !== 'direction' && (
          <div className="mb-6">
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === 'location' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  <MapPin className="h-4 w-4" />
                </div>
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === 'date' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  <Calendar className="h-4 w-4" />
                </div>
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === 'vehicle' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  <Car className="h-4 w-4" />
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500">
                Step {currentStep === 'location' ? '1' : currentStep === 'date' ? '2' : '3'} of 3
              </div>
            </div>
            <div className="mt-2 h-1 bg-gray-100 rounded-full">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-300" 
                style={{ 
                  width: currentStep === 'location' ? '33.3%' : 
                         currentStep === 'date' ? '66.6%' : '100%' 
                }}
              ></div>
            </div>
          </div>
        )}
        
        <Form {...form}>
          <form>
            {/* Direction Step */}
            {currentStep === 'direction' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-col items-center p-6">
                  <img 
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                    alt="Campus transport illustration" 
                    className="w-full max-w-[250px] h-auto mb-8 rounded-lg"
                  />
                  
                  <div className="flex items-center justify-center space-x-3 mb-6 bg-gray-50 p-2 rounded-full">
                    <button
                      type="button"
                      className={`toggle-button ${direction === 'to-campus' ? 'toggle-active' : 'toggle-inactive'}`}
                      onClick={() => setValue('direction', 'to-campus')}
                    >
                      To Campus
                    </button>
                    <button
                      type="button"
                      className={`toggle-button ${direction === 'from-campus' ? 'toggle-active' : 'toggle-inactive'}`}
                      onClick={() => setValue('direction', 'from-campus')}
                    >
                      From Campus
                    </button>
                  </div>
                  
                  <Button 
                    onClick={nextStep} 
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {/* Location Step */}
            {currentStep === 'location' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Toggle
                      pressed={selectedLocationType === "university"}
                      onPressedChange={() => setSelectedLocationType("university")}
                      className="bg-white"
                    >
                      <Building className="h-4 w-4 mr-1" />
                      University
                    </Toggle>
                    <Toggle
                      pressed={selectedLocationType === "state"}
                      onPressedChange={() => setSelectedLocationType("state")}
                      className="bg-white"
                    >
                      <Navigation className="h-4 w-4 mr-1" />
                      State
                    </Toggle>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="relative">
                    <FormField
                      control={form.control}
                      name="origin"
                      render={({ field }) => (
                        <FormItem>
                          <div className="relative">
                            <MapPin className="absolute left-0 top-3 h-5 w-5 text-gray-400" />
                            <FormLabel className="sr-only">From</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="pl-7 uber-input rounded-none">
                                  <SelectValue placeholder={originLabel} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {selectedLocationType === "university" ? (
                                  nigerianLocations.universities.map((university) => (
                                    <SelectItem key={university} value={university}>
                                      {university}
                                    </SelectItem>
                                  ))
                                ) : (
                                  nigerianLocations.states.map((state) => (
                                    <SelectItem key={state} value={state}>
                                      {state}
                                    </SelectItem>
                                  ))
                                )}
                              </SelectContent>
                            </Select>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="flex items-center justify-center w-8 h-8 mx-auto bg-gray-100 rounded-full my-2">
                    <ArrowUpDown className="w-4 h-4 text-gray-500" />
                  </div>
                  
                  <div className="relative">
                    <FormField
                      control={form.control}
                      name="destination"
                      render={({ field }) => (
                        <FormItem>
                          <div className="relative">
                            <MapPin className="absolute left-0 top-3 h-5 w-5 text-gray-400" />
                            <FormLabel className="sr-only">To</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="pl-7 uber-input rounded-none">
                                  <SelectValue placeholder={destinationLabel} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {selectedLocationType === "university" ? (
                                  nigerianLocations.universities.map((university) => (
                                    <SelectItem key={university} value={university}>
                                      {university}
                                    </SelectItem>
                                  ))
                                ) : (
                                  nigerianLocations.states.map((state) => (
                                    <SelectItem key={state} value={state}>
                                      {state}
                                    </SelectItem>
                                  ))
                                )}
                              </SelectContent>
                            </Select>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              
                <div className="flex gap-2 pt-4">
                  <Button variant="ghost" onClick={prevStep} className="w-1/3">
                    Back
                  </Button>
                  <Button 
                    onClick={nextStep} 
                    className="w-2/3 bg-primary hover:bg-primary/90" 
                    disabled={!watch('origin') || !watch('destination')}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {/* Date and Time Step */}
            {currentStep === 'date' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Toggle
                      pressed={bookingType === "join"}
                      onPressedChange={() => setValue('bookingType', 'join')}
                      className="bg-white"
                    >
                      Join a Ride
                    </Toggle>
                    <Toggle
                      pressed={bookingType === "full"}
                      onPressedChange={() => setValue('bookingType', 'full')}
                      className="bg-white"
                    >
                      Book Full Vehicle
                    </Toggle>
                  </div>
                </div>
                
                <div className="relative">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <Calendar className="absolute left-0 top-3 h-5 w-5 text-gray-400" />
                          <FormLabel className="sr-only">Date</FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              placeholder="Select date"
                              className="pl-7 uber-input rounded-none"
                              {...field}
                            />
                          </FormControl>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="relative">
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <Clock className="absolute left-0 top-3 h-5 w-5 text-gray-400" />
                          <FormLabel className="sr-only">Time</FormLabel>
                          <FormControl>
                            <Input
                              type="time"
                              placeholder="Select time"
                              className="pl-7 uber-input rounded-none"
                              {...field}
                            />
                          </FormControl>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="relative">
                  <FormField
                    control={form.control}
                    name="passengers"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <Users className="absolute left-0 top-3 h-5 w-5 text-gray-400" />
                          <FormLabel className="sr-only">Passengers</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="pl-7 uber-input rounded-none">
                                <SelectValue placeholder="Number of passengers" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {[1, 2, 3, 4, 5, 6].map(num => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num} {num === 1 ? 'passenger' : 'passengers'}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button variant="ghost" onClick={prevStep} className="w-1/3">
                    Back
                  </Button>
                  <Button 
                    onClick={nextStep} 
                    className="w-2/3 bg-primary hover:bg-primary/90" 
                    disabled={!watch('date') || !watch('time')}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {/* Vehicle Step */}
            {currentStep === 'vehicle' && (
              <div className="space-y-6 animate-fade-in">
                <FormField
                  control={form.control}
                  name="vehicleId"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-2 gap-3">
                        {vehicles.map(vehicle => (
                          <div
                            key={vehicle.id}
                            className={`border rounded-xl p-3 cursor-pointer transition-all ${
                              field.value === vehicle.id
                                ? 'border-primary bg-primary/5 shadow-sm'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => field.onChange(vehicle.id)}
                          >
                            <div className="relative w-full h-24 mb-2 overflow-hidden rounded-lg">
                              <img 
                                src={vehicle.image} 
                                alt={vehicle.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="text-sm font-medium">{vehicle.name}</div>
                            <div className="text-xs text-gray-500">
                              {vehicle.capacity} seats
                            </div>
                            <div className="text-sm font-semibold text-primary mt-1">
                              ₦{vehicle.price.toLocaleString()}
                              {bookingType === 'join' && (
                                <span className="text-gray-500 font-normal"> or ₦{Math.round(vehicle.price / vehicle.capacity).toLocaleString()} pp</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </FormItem>
                  )}
                />

                {selectedVehicle && (
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{selectedVehicle.name}</h3>
                        <div className="text-sm text-gray-600 mt-1">
                          {bookingType === 'join' 
                            ? `₦${Math.round(selectedVehicle.price / selectedVehicle.capacity).toLocaleString()} per person`
                            : `₦${selectedVehicle.price.toLocaleString()} total`
                          }
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {selectedVehicle.capacity} seats
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-3 text-sm">
                      <Checkbox id="terms" />
                      <label htmlFor="terms" className="ml-2 text-gray-600">
                        I agree to the <span className="text-primary font-medium">terms and conditions</span>
                      </label>
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button variant="ghost" onClick={prevStep} className="w-1/3">
                    Back
                  </Button>
                  <Button 
                    onClick={handleSubmit} 
                    className="w-2/3 bg-primary hover:bg-primary/90" 
                    disabled={!selectedVehicleId}
                  >
                    Book Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Form>
      </div>
    </Card>
  );
};

export default RideBookingForm;
