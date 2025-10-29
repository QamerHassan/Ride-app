"use client";
import { useState } from "react";

interface StarProps {
    initial?: number;
    onChange?: (value: number) => void;
}

export default function Star({ initial = 0, onChange }: StarProps) {
    const [rating, setRating] = useState(initial);

    return (
        <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
                <span
                    key={i}
                    className={`cursor-pointer text-2xl ${i <= rating ? "text-yellow-400" : "text-gray-400"}`}
                    onClick={() => { setRating(i); onChange?.(i); }}
                >
                    ★
                </span>
            ))}
        </div>
    );
}
