'use client';

import React, { useState } from 'react';
import ClientOnly from './../components/ClientOnly';
import RideMap from './../components/RideMap';
import RideCard from './../components/RideCard';
import RideConfirmationModal from './../components/RideConfirmationModal';

interface RideOption {
    id: number;
    name: string;
    description: string;
    price: number;
}

const rideOptions: RideOption[] = [
    { id: 1, name: 'Economy', description: 'Affordable rides', price: 150 },
    { id: 2, name: 'Comfort', description: 'Comfortable rides', price: 250 },
    { id: 3, name: 'Premium', description: 'Luxury rides', price: 400 },
];

const RidePage: React.FC = () => {
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [selectedRide, setSelectedRide] = useState<RideOption | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSelectRide = (ride: RideOption) => {
        setSelectedRide(ride);
    };

    const handleConfirm = () => {
        if (!pickup || !dropoff || !selectedRide) {
            alert('Please fill all fields and select a ride');
            return;
        }
        setIsModalOpen(true);
    };

    return (
        <ClientOnly>
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-4 text-blue-600">Choose Your Ride</h1>

                <div className="mb-4 flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Pickup Location"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className="p-2 border rounded w-full md:w-1/2"
                    />
                    <input
                        type="text"
                        placeholder="Dropoff Location"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        className="p-2 border rounded w-full md:w-1/2"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {rideOptions.map((ride) => (
                        <RideCard
                            key={ride.id}
                            name={ride.name}
                            description={ride.description}
                            price={ride.price}
                            selected={selectedRide?.id === ride.id}
                            onSelect={() => handleSelectRide(ride)}
                        />
                    ))}
                </div>

                <button
                    onClick={handleConfirm}
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-6"
                >
                    Confirm Ride
                </button>

                {pickup && dropoff && (
                    <div className="mb-6">
                        <RideMap pickup={pickup} dropoff={dropoff} />
                    </div>
                )}

                <RideConfirmationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    pickup={pickup}
                    dropoff={dropoff}
                    rideType={selectedRide?.name || ''}
                    price={selectedRide?.price || 0}
                />
            </div>
        </ClientOnly>
    );
};

export default RidePage;
