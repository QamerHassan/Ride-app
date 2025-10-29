'use client';

import React, { useEffect, useRef } from 'react';

declare global {
    interface Window {
        google: any;
    }
}

const RideMapInner: React.FC = () => {
    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mapRef.current || !window.google) return;

        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 24.8607, lng: 67.0011 },
            zoom: 12,
        });

        new window.google.maps.Marker({
            position: { lat: 24.8607, lng: 67.0011 },
            map,
            title: 'You are here',
        });
    }, []);

    return <div ref={mapRef} className="w-full h-64 rounded shadow bg-gray-200" />;
};

export default RideMapInner;
