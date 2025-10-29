"use client";

interface RideOptionCardProps {
    title: string;
    price: number;
    onSelect: () => void;
}

const RideOptionCard = ({ title, price, onSelect }: RideOptionCardProps) => {
    return (
        <div className="card" onClick={onSelect}>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
        </div>
    );
};

export default RideOptionCard;
