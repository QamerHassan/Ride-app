'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Ride {
    id: number;
    pickup: string;
    dropoff: string;
    status: 'pending' | 'in_progress' | 'completed';
    fare: number;
}

const DriverDashboard: React.FC = () => {
    const [rides, setRides] = useState<Ride[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRides();
    }, []);

    const fetchRides = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/driver/rides'); // Replace with your API
            setRides(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch rides:', error);
            setLoading(false);
        }
    };

    const handleComplete = async (rideId: number) => {
        try {
            await axios.patch(`/api/rides/${rideId}/complete`); // Replace with your API
            // Update local state immediately
            setRides((prev) =>
                prev.map((ride) =>
                    ride.id === rideId ? { ...ride, status: 'completed' } : ride
                )
            );
        } catch (error) {
            console.error('Failed to complete ride', error);
        }
    };

    const totalRides = rides.length;
    const completedRides = rides.filter((r) => r.status === 'completed').length;
    const totalFare = rides.reduce((acc, r) => acc + r.fare, 0);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
                Driver Dashboard
            </h1>

            <div className="flex justify-around mb-6">
                <div className="bg-white p-4 rounded shadow text-center w-48">
                    <p className="text-gray-500">Total Rides</p>
                    <p className="text-2xl font-bold">{totalRides}</p>
                </div>
                <div className="bg-white p-4 rounded shadow text-center w-48">
                    <p className="text-gray-500">Completed Rides</p>
                    <p className="text-2xl font-bold">{completedRides}</p>
                </div>
                <div className="bg-white p-4 rounded shadow text-center w-48">
                    <p className="text-gray-500">Total Fare</p>
                    <p className="text-2xl font-bold">PKR {totalFare}</p>
                </div>
            </div>

            <div className="text-right mb-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={fetchRides}
                >
                    Refresh
                </button>
            </div>

            {loading ? (
                <p className="text-center text-gray-500">Loading rides...</p>
            ) : rides.length === 0 ? (
                <p className="text-center text-gray-500">No rides available.</p>
            ) : (
                <div className="space-y-4">
                    {rides.map((ride) => (
                        <div
                            key={ride.id}
                            className="bg-white p-4 rounded shadow flex justify-between items-center"
                        >
                            <div>
                                <p>
                                    <strong>Pickup:</strong> {ride.pickup}
                                </p>
                                <p>
                                    <strong>Dropoff:</strong> {ride.dropoff}
                                </p>
                                <p>
                                    <strong>Status:</strong>{' '}
                                    <span
                                        className={
                                            ride.status === 'completed'
                                                ? 'text-green-600 font-bold'
                                                : ride.status === 'in_progress'
                                                    ? 'text-yellow-600 font-bold'
                                                    : 'text-gray-600 font-bold'
                                        }
                                    >
                                        {ride.status.charAt(0).toUpperCase() + ride.status.slice(1)}
                                    </span>
                                </p>
                            </div>
                            {ride.status !== 'completed' ? (
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                    onClick={() => handleComplete(ride.id)}
                                >
                                    Complete
                                </button>
                            ) : (
                                <span className="text-green-700 font-bold">Completed ✅</span>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DriverDashboard;
