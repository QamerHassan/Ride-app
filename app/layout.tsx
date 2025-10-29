'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

const GOOGLE_MAPS_API_KEY = '2hmqX5NcCkU80cTLB7mL';

const menuItems = [
  { name: 'Home', href: '/home', color: 'bg-blue-400', hover: 'hover:bg-blue-500' },
  { name: 'Rider', href: '/ride', color: 'bg-green-400', hover: 'hover:bg-green-500' },
  { name: 'Driver', href: '/driver', color: 'bg-purple-400', hover: 'hover:bg-purple-500' },
  { name: 'History', href: '/history', color: 'bg-yellow-400', hover: 'hover:bg-yellow-500' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [active, setActive] = useState('Rider');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Load Google Maps
    const existingScript = document.getElementById('google-maps-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'google-maps-script';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        {/* Navbar */}
        <header className="bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">RideApp</h1>

          {/* Colorful Menu Cards */}
          <div className="flex gap-4 mt-2 md:mt-0">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`px-4 py-2 rounded shadow text-white font-medium transition ${item.color} ${item.hover} ${active === item.name ? 'ring-2 ring-white ring-offset-2' : ''
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-6">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
