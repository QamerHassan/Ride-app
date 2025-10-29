'use client';

import React from 'react';

interface RideConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    pickup: string;
    dropoff: string;
    rideType: string;
    price: number;
}

const RideConfirmationModal: React.FC<RideConfirmationModalProps> = ({
    isOpen,
    onClose,
    pickup,
    dropoff,
    rideType,
    price,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-80">
                <h2 className="text-xl font-bold mb-4">Confirm Your Ride</h2>
                <p>
                    <strong>Pickup:</strong> {pickup}
                </p>
                <p>
                    <strong>Dropoff:</strong> {dropoff}
                </p>
                <p>
                    <strong>Ride Type:</strong> {rideType}
                </p>
                <p>
                    <strong>Price:</strong> PKR {price}
                </p>
                <div className="flex justify-end mt-4 gap-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
                        Cancel
                    </button>
                    <button onClick={() => alert('Ride Confirmed!')} className="px-4 py-2 bg-blue-500 text-white rounded">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RideConfirmationModal;
