
import React from "react";

interface RoutePreviewProps {
  from: string;
  to: string;
  fromType: "university" | "state";
  toType: "university" | "state";
}

const RoutePreview: React.FC<RoutePreviewProps> = ({ from, to, fromType, toType }) => {
  // Simplified coordinates for Nigerian locations (for illustration purposes)
  const getCoordinates = (location: string, type: string) => {
    // These are placeholder coordinates - in a real app, you'd use geocoding
    // or a predefined mapping of locations to coordinates
    return { x: Math.random() * 80 + 10, y: Math.random() * 80 + 10 };
  };

  const fromCoords = getCoordinates(from, fromType);
  const toCoords = getCoordinates(to, toType);

  // Format the date for display
  const travelDate = new Date();
  const formattedDate = `${travelDate.toLocaleString('default', { month: 'short' })} ${travelDate.getDate()}`;

  return (
    <div className="w-full">
      {/* Simple map visualization */}
      <div className="relative h-32 bg-gray-100 rounded-md overflow-hidden mb-2">
        {/* Nigeria map background - this is a placeholder */}
        <div className="absolute inset-0 bg-[#f0f4f8]">
          {/* Simple graphical representation of route */}
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF9900" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
            </defs>
            
            {/* Path between points */}
            <path 
              d={`M ${fromCoords.x} ${fromCoords.y} C ${(fromCoords.x + toCoords.x)/1.5} ${fromCoords.y}, ${(fromCoords.x + toCoords.x)/2.5} ${toCoords.y}, ${toCoords.x} ${toCoords.y}`}
              stroke="url(#routeGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,3"
              className="animate-[dash_3s_linear_infinite]"
            />
            
            {/* Origin point */}
            <circle cx={fromCoords.x} cy={fromCoords.y} r="4" fill="#FF9900" className="animate-pulse" />
            
            {/* Destination point */}
            <circle cx={toCoords.x} cy={toCoords.y} r="4" fill="black" />
          </svg>
          
          {/* Location labels */}
          <div className="absolute text-xs font-bold text-gray-800" style={{ left: `${fromCoords.x - 10}%`, top: `${fromCoords.y - 10}%` }}>
            {from.split(',')[0]}
          </div>
          <div className="absolute text-xs font-bold text-gray-800" style={{ left: `${toCoords.x - 10}%`, top: `${toCoords.y - 10}%` }}>
            {to.split(',')[0]}
          </div>
        </div>
      </div>
      
      {/* Journey summary */}
      <div className="flex justify-between items-center text-xs text-gray-700">
        <div className="flex items-center">
          <span className="font-semibold">{from.split(',')[0]}</span>
          <span className="mx-1">→</span>
          <span className="font-semibold">{to.split(',')[0]}</span>
        </div>
        <div>Est. 3-4 hours</div>
      </div>
      
      {/* Add animation styles */}
      <style>
        {`
          @keyframes dash {
            to {
              stroke-dashoffset: -16;
            }
          }
        `}
      </style>
    </div>
  );
};

export default RoutePreview;
