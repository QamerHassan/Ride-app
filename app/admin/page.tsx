'use client';
import React, { useState } from 'react';

export default function AdminPage() {
    const [stats, setStats] = useState({
        totalUsers: 120,
        totalRides: 340,
        totalFare: 85000,
        completedRides: 300,
    });

    const handleRefresh = () => {
        setStats({
            totalUsers: stats.totalUsers + 1,
            totalRides: stats.totalRides + 2,
            totalFare: stats.totalFare + 5000,
            completedRides: stats.completedRides + 2,
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">
            <h1 className="text-4xl font-bold text-center text-green-600 mb-6">Admin Dashboard</h1>
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-green-400 rounded shadow text-white text-center">
                    <p className="text-xl font-semibold">Total Users</p>
                    <p className="text-3xl mt-2">{stats.totalUsers}</p>
                </div>
                <div className="p-6 bg-blue-400 rounded shadow text-white text-center">
                    <p className="text-xl font-semibold">Total Rides</p>
                    <p className="text-3xl mt-2">{stats.totalRides}</p>
                </div>
                <div className="p-6 bg-purple-400 rounded shadow text-white text-center">
                    <p className="text-xl font-semibold">Total Fare (PKR)</p>
                    <p className="text-3xl mt-2">{stats.totalFare}</p>
                </div>
                <div className="p-6 bg-yellow-400 rounded shadow text-white text-center">
                    <p className="text-xl font-semibold">Completed Rides</p>
                    <p className="text-3xl mt-2">{stats.completedRides}</p>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <button onClick={handleRefresh} className="px-6 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700 font-semibold">
                    Refresh
                </button>
            </div>
        </div>
    );
}
