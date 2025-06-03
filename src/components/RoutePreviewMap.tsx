
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
  const [travelTime, setTravelTime] = useState('Calculating...');
  const [distance, setDistance] = useState('');

  // Enhanced Nigerian coordinates with more precise locations
  const locationCoordinates: Record<string, [number, number]> = {
    // Major Universities with precise coordinates
    'University of Lagos': [3.3972, 6.5158],
    'University of Ibadan': [3.8964, 7.3775],
    'Ahmadu Bello University': [7.6508, 11.1846],
    'University of Port Harcourt': [7.0498, 4.8156],
    'Obafemi Awolowo University': [4.5185, 7.5248],
    'University of Nigeria, Nsukka': [7.4085, 6.8442],
    'Federal University of Technology, Akure': [5.1931, 7.2571],
    'University of Benin': [5.6037, 6.3350],
    'Covenant University': [3.1609, 6.6706],
    'Babcock University': [3.4533, 6.8947],
    'Lagos State University': [3.3470, 6.5802],
    'Federal University of Agriculture, Abeokuta': [3.3440, 7.2441],
    
    // States/Major Cities with precise coordinates
    'Lagos': [3.3792, 6.5244],
    'Abuja': [7.5399, 9.0765],
    'Port Harcourt': [7.0498, 4.8156],
    'Kano': [8.5207, 12.0022],
    'Ibadan': [3.9470, 7.3986],
    'Kaduna': [7.4951, 10.5364],
    'Benin City': [5.6037, 6.3350],
    'Jos': [8.8965, 9.9200],
    'Ilorin': [4.5420, 8.4799],
    'Enugu': [7.5148, 6.4641],
    'Owerri': [7.0240, 5.4840],
    'Calabar': [8.3275, 4.9517],
    'Maiduguri': [13.0059, 11.8469],
    'Sokoto': [5.2339, 13.0585],
    'Akure': [5.1931, 7.2571],
    'Abeokuta': [3.3440, 7.2441],
    'Ado-Ekiti': [5.2209, 7.6134],
    'Lokoja': [6.7338, 7.7997],
    'Minna': [6.5569, 9.6140]
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
    // More realistic Nigerian road travel estimates
    const averageSpeed = distance > 200 ? 45 : 55; // Lower speed for longer distances
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

  const formatDistance = (km: number) => {
    if (km < 1) {
      return `${Math.round(km * 1000)}m`;
    }
    return `${Math.round(km)}km`;
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    const fromCoords = getCoordinates(from);
    const toCoords = getCoordinates(to);
    
    // Calculate distance and travel time
    const distanceKm = calculateDistance(fromCoords, toCoords);
    setDistance(formatDistance(distanceKm));
    setTravelTime(estimateTravelTime(distanceKm));

    // Use your Mapbox token
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJvc2VleSIsImEiOiJjbWJnN3R1YWgxZWtoMm1xbmR6bm11bWY5In0.gLsCXIOidwX7evIAUbhIqg';

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

      // Add source markers with custom styling
      new mapboxgl.Marker({ 
        color: '#FF9900',
        scale: 1.2
      })
        .setLngLat(fromCoords)
        .setPopup(new mapboxgl.Popup().setHTML(`
          <div class="p-2">
            <strong>${from}</strong>
            <br/>
            <small class="text-gray-600">${fromType === 'university' ? 'University' : 'State/City'}</small>
          </div>
        `))
        .addTo(map.current);

      new mapboxgl.Marker({ 
        color: '#000000',
        scale: 1.2
      })
        .setLngLat(toCoords)
        .setPopup(new mapboxgl.Popup().setHTML(`
          <div class="p-2">
            <strong>${to}</strong>
            <br/>
            <small class="text-gray-600">${toType === 'university' ? 'University' : 'State/City'}</small>
          </div>
        `))
        .addTo(map.current);

      // Add route line with animation
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
          'line-width': 4,
          'line-opacity': 0.8
        }
      });

      // Add animated route line
      map.current.addLayer({
        id: 'route-animated',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#FF9900',
          'line-width': 2,
          'line-dasharray': [0, 4, 3]
        }
      });

      // Fit map to show both points with padding
      const bounds = new mapboxgl.LngLatBounds();
      bounds.extend(fromCoords);
      bounds.extend(toCoords);
      map.current.fitBounds(bounds, { 
        padding: 80,
        maxZoom: 10
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [from, to, fromType, toType]);

  return (
    <div className="w-full">
      <div ref={mapContainer} className="h-48 rounded-md mb-3 border border-gray-200" />
      
      <div className="flex justify-between items-center text-xs text-gray-700 bg-gray-50 p-2 rounded-md">
        <div className="flex items-center">
          <span className="font-semibold">{from.split(',')[0]}</span>
          <span className="mx-2 text-campusorange-600">→</span>
          <span className="font-semibold">{to.split(',')[0]}</span>
        </div>
        <div className="text-right">
          <div className="font-medium">{distance}</div>
          <div className="text-gray-500">Est. {travelTime}</div>
        </div>
      </div>
    </div>
  );
};

export default RoutePreviewMap;
