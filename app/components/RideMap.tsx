'use client';

import React, { useEffect, useRef } from 'react';

interface RideMapProps {
    pickup: string;
    dropoff: string;
}

const RideMap: React.FC<RideMapProps> = ({ pickup, dropoff }) => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!window.google) return;

        const map = new google.maps.Map(mapRef.current!, {
            center: { lat: 24.8607, lng: 67.0011 }, // Karachi center
            zoom: 12,
        });

        const geocoder = new google.maps.Geocoder();

        // Pickup marker
        geocoder.geocode({ address: pickup }, (results: any, status: any) => {
            if (status === 'OK') {
                new google.maps.Marker({
                    map,
                    position: results[0].geometry.location,
                    label: 'P',
                });
                map.setCenter(results[0].geometry.location);
            }
        });

        // Dropoff marker
        geocoder.geocode({ address: dropoff }, (results: any, status: any) => {
            if (status === 'OK') {
                new google.maps.Marker({
                    map,
                    position: results[0].geometry.location,
                    label: 'D',
                });
            }
        });
    }, [pickup, dropoff]);

    return <div ref={mapRef} className="w-full h-64 rounded-lg border" />;
};

export default RideMap;
