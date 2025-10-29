'use client';

import React from 'react';
import Link from 'next/link';

const DashboardPage: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow space-y-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                    href="/ride"
                    className="p-4 bg-blue-600 text-white rounded text-center hover:bg-blue-700"
                >
                    Book a Ride
                </Link>
                <Link
                    href="/history"
                    className="p-4 bg-gray-600 text-white rounded text-center hover:bg-gray-700"
                >
                    Ride History
                </Link>
                <Link
                    href="/driver"
                    className="p-4 bg-green-600 text-white rounded text-center hover:bg-green-700"
                >
                    Driver Panel
                </Link>
            </div>
        </div>
    );
};

export default DashboardPage;
