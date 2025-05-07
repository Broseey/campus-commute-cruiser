
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from 'lucide-react';

interface DirectionToggleProps {
  direction: 'to-university' | 'from-university';
  onChange: (direction: 'to-university' | 'from-university') => void;
}

const DirectionToggle = ({ direction, onChange }: DirectionToggleProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border shadow-sm mb-4">
      <div className="grid grid-cols-2 w-full">
        <Button 
          type="button"
          variant="ghost"
          className={`h-10 ${direction === 'to-university' 
            ? 'bg-gray-100 text-gray-900 font-medium' 
            : 'bg-white text-gray-600'} rounded-none border-r`}
          onClick={() => onChange('to-university')}
        >
          Going to University
        </Button>
        <Button 
          type="button"
          variant="ghost"
          className={`h-10 ${direction === 'from-university' 
            ? 'bg-gray-100 text-gray-900 font-medium' 
            : 'bg-white text-gray-600'} rounded-none`}
          onClick={() => onChange('from-university')}
        >
          Coming from University
        </Button>
      </div>
      
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => onChange(direction === 'to-university' ? 'from-university' : 'to-university')}
        className="w-full flex items-center justify-center py-1 text-xs border-t text-gray-500 hover:bg-gray-50"
      >
        <ArrowLeftRight className="h-3 w-3 mr-1" /> Swap Direction
      </Button>
    </div>
  );
};

export default DirectionToggle;
