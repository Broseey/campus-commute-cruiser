
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface RoutePreviewMapProps {
  from: string;
  to: string;
  fromType: "university" | "state";
  toType: "university" | "state";
}

const RoutePreviewMap: React.FC<RoutePreviewMapProps> = ({ from, to, fromType, toType }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [travelTime, setTravelTime] = useState('Calculating...');

  // Nigerian coordinates for major locations
  const locationCoordinates: Record<string, [number, number]> = {
    // Universities
    'University of Lagos': [3.3972, 6.5158],
    'University of Ibadan': [3.8964, 7.3775],
    'Ahmadu Bello University': [7.6508, 11.1846],
    'University of Port Harcourt': [7.0498, 4.8156],
    'Obafemi Awolowo University': [4.5185, 7.5248],
    'University of Nigeria, Nsukka': [7.4085, 6.8442],
    
    // States/Cities
    'Lagos': [3.3792, 6.5244],
    'Abuja': [7.5399, 9.0765],
    'Port Harcourt': [7.0498, 4.8156],
    'Kano': [8.5207, 12.0022],
    'Ibadan': [3.9470, 7.3986],
    'Kaduna': [7.4951, 10.5364],
    'Benin City': [5.6037, 6.3350],
    'Jos': [8.8965, 9.9200],
    'Ilorin': [4.5420, 8.4799],
    'Enugu': [7.5148, 6.4641]
  };

  const getCoordinates = (location: string): [number, number] => {
    return locationCoordinates[location] || [3.3792, 6.5244]; // Default to Lagos
  };

  const calculateDistance = (coord1: [number, number], coord2: [number, number]) => {
    const R = 6371; // Earth's radius in km
    const dLat = (coord2[1] - coord1[1]) * Math.PI / 180;
    const dLon = (coord2[0] - coord1[0]) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(coord1[1] * Math.PI / 180) * Math.cos(coord2[1] * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const estimateTravelTime = (distance: number) => {
    // Estimate based on average Nigerian road speeds
    const averageSpeed = 60; // km/h
    const hours = distance / averageSpeed;
    
    if (hours < 1) {
      return `${Math.round(hours * 60)} mins`;
    } else if (hours < 24) {
      const wholeHours = Math.floor(hours);
      const minutes = Math.round((hours - wholeHours) * 60);
      return minutes > 0 ? `${wholeHours}h ${minutes}m` : `${wholeHours}h`;
    }
    return `${Math.round(hours)} hours`;
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    // Check if user has provided Mapbox token
    if (!mapboxToken) {
      return;
    }

    const fromCoords = getCoordinates(from);
    const toCoords = getCoordinates(to);
    
    // Calculate distance and travel time
    const distance = calculateDistance(fromCoords, toCoords);
    setTravelTime(estimateTravelTime(distance));

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [
        (fromCoords[0] + toCoords[0]) / 2,
        (fromCoords[1] + toCoords[1]) / 2
      ],
      zoom: 6
    });

    map.current.on('load', () => {
      if (!map.current) return;

      // Add markers
      new mapboxgl.Marker({ color: '#FF9900' })
        .setLngLat(fromCoords)
        .setPopup(new mapboxgl.Popup().setHTML(`<strong>${from}</strong>`))
        .addTo(map.current);

      new mapboxgl.Marker({ color: '#000000' })
        .setLngLat(toCoords)
        .setPopup(new mapboxgl.Popup().setHTML(`<strong>${to}</strong>`))
        .addTo(map.current);

      // Add route line
      map.current.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [fromCoords, toCoords]
          }
        }
      });

      map.current.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#FF9900',
          'line-width': 3,
          'line-dasharray': [2, 2]
        }
      });

      // Fit map to show both points
      const bounds = new mapboxgl.LngLatBounds();
      bounds.extend(fromCoords);
      bounds.extend(toCoords);
      map.current.fitBounds(bounds, { padding: 50 });
    });

    return () => {
      map.current?.remove();
    };
  }, [from, to, mapboxToken]);

  if (!mapboxToken) {
    return (
      <div className="w-full">
        <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <label htmlFor="mapbox-token" className="block text-sm font-medium text-gray-700 mb-2">
            Enter your Mapbox Public Token to view interactive map:
          </label>
          <input
            id="mapbox-token"
            type="text"
            placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJjbGFg..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <p className="text-xs text-gray-500 mt-1">
            Get your token from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">mapbox.com</a>
          </p>
        </div>
        
        {/* Fallback static preview */}
        <div className="relative h-32 bg-gray-100 rounded-md overflow-hidden mb-2">
          <div className="absolute inset-0 bg-[#f0f4f8]">
            <svg className="w-full h-full">
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF9900" />
                  <stop offset="100%" stopColor="#000000" />
                </linearGradient>
              </defs>
              
              <path 
                d="M 20 70 C 60 50, 80 90, 120 60"
                stroke="url(#routeGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,3"
                className="animate-[dash_3s_linear_infinite]"
              />
              
              <circle cx="20" cy="70" r="4" fill="#FF9900" className="animate-pulse" />
              <circle cx="120" cy="60" r="4" fill="black" />
            </svg>
            
            <div className="absolute text-xs font-bold text-gray-800" style={{ left: '5%', top: '45%' }}>
              {from.split(',')[0]}
            </div>
            <div className="absolute text-xs font-bold text-gray-800" style={{ left: '75%', top: '35%' }}>
              {to.split(',')[0]}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-xs text-gray-700">
          <div className="flex items-center">
            <span className="font-semibold">{from.split(',')[0]}</span>
            <span className="mx-1">→</span>
            <span className="font-semibold">{to.split(',')[0]}</span>
          </div>
          <div>Est. 3-4 hours</div>
        </div>

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
  }

  return (
    <div className="w-full">
      <div ref={mapContainer} className="h-48 rounded-md mb-2" />
      
      <div className="flex justify-between items-center text-xs text-gray-700">
        <div className="flex items-center">
          <span className="font-semibold">{from.split(',')[0]}</span>
          <span className="mx-1">→</span>
          <span className="font-semibold">{to.split(',')[0]}</span>
        </div>
        <div>Est. {travelTime}</div>
      </div>
    </div>
  );
};

export default RoutePreviewMap;
