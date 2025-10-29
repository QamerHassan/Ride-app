'use client';

import React, { useState } from 'react';

interface RideHistory {
    id: number;
    type: string;
    pickup: string;
    dropoff: string;
    date: string;
    price: number;
    rating?: number;
    feedback?: string;
}

const initialHistory: RideHistory[] = [
    { id: 1, type: 'Economy', pickup: 'Station', dropoff: 'Mall', date: '2025-10-20', price: 150 },
    { id: 2, type: 'Comfort', pickup: 'Airport', dropoff: 'Hotel', date: '2025-10-21', price: 250 },
    { id: 3, type: 'Premium', pickup: 'Home', dropoff: 'Office', date: '2025-10-22', price: 400 },
];

const HistoryPage: React.FC = () => {
    const [rideHistory, setRideHistory] = useState<RideHistory[]>(initialHistory);
    const [activeReviewId, setActiveReviewId] = useState<number | null>(null);
    const [currentRating, setCurrentRating] = useState<number>(0);
    const [currentFeedback, setCurrentFeedback] = useState<string>('');

    const handleSubmitReview = (id: number) => {
        setRideHistory((prev) =>
            prev.map((ride) =>
                ride.id === id ? { ...ride, rating: currentRating, feedback: currentFeedback } : ride
            )
        );
        setActiveReviewId(null);
        setCurrentRating(0);
        setCurrentFeedback('');
    };

    return (
        <div className="max-w-5xl mx-auto mt-6 space-y-6">
            <h1 className="text-3xl font-bold text-purple-600 text-center mb-4">Ride History</h1>

            <div className="space-y-3">
                {rideHistory.map((ride) => {
                    const colorClass =
                        ride.price <= 150
                            ? 'bg-green-400'
                            : ride.price <= 250
                                ? 'bg-blue-400'
                                : 'bg-purple-400';

                    return (
                        <div key={ride.id} className={`p-4 rounded shadow text-white ${colorClass} transition`}>
                            <div className="flex justify-between items-center mb-2">
                                <div>
                                    <p className="font-medium">{ride.pickup} → {ride.dropoff} ({ride.type})</p>
                                    <p className="text-sm">{ride.date} | PKR {ride.price}</p>
                                    {ride.rating && (
                                        <p className="text-yellow-300">
                                            {'★'.repeat(ride.rating) + '☆'.repeat(5 - ride.rating)}
                                        </p>
                                    )}
                                    {ride.feedback && <p className="mt-1 italic text-white/90">"{ride.feedback}"</p>}
                                </div>

                                {/* Add Review Button */}
                                <button
                                    onClick={() => setActiveReviewId(activeReviewId === ride.id ? null : ride.id)}
                                    className="px-4 py-2 bg-white text-purple-600 rounded shadow hover:bg-gray-100 transition font-semibold"
                                >
                                    {ride.rating ? 'Edit Review' : 'Add Review'}
                                </button>
                            </div>

                            {/* Review Form */}
                            {activeReviewId === ride.id && (
                                <div className="mt-3 p-3 bg-white rounded shadow text-black">
                                    <div className="flex space-x-2 mb-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                onClick={() => setCurrentRating(star)}
                                                className={`text-2xl transition ${currentRating >= star ? 'text-yellow-400' : 'text-gray-300'
                                                    }`}
                                            >
                                                ★
                                            </button>
                                        ))}
                                    </div>
                                    <textarea
                                        placeholder="Write your feedback..."
                                        value={currentFeedback}
                                        onChange={(e) => setCurrentFeedback(e.target.value)}
                                        className="w-full p-2 border rounded mb-2 focus:ring focus:ring-purple-300"
                                    />
                                    <button
                                        onClick={() => handleSubmitReview(ride.id)}
                                        className="px-4 py-2 bg-purple-500 text-white rounded shadow hover:bg-purple-600 transition font-semibold"
                                    >
                                        Submit
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HistoryPage;
