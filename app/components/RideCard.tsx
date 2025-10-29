'use client';

import React from 'react';

interface RideCardProps {
    name: string;
    description: string;
    price: number;
    onSelect: () => void;
    selected: boolean;
}

const RideCard: React.FC<RideCardProps> = ({ name, description, price, onSelect, selected }) => {
    return (
        <div
            onClick={onSelect}
            className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg transition ${selected ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
                }`}
        >
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <p className="mt-2 font-semibold">PKR {price}</p>
        </div>
    );
};

export default RideCard;
