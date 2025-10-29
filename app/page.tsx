'use client';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex flex-col justify-center items-center text-center p-6 space-y-6">
            <h1 className="text-5xl font-bold text-purple-600">Welcome to RideApp</h1>
            <p className="text-lg text-gray-700 max-w-xl">
                Choose your path: ride as a Rider, drive as a Driver, or manage everything as Admin.
            </p>
            <div className="flex space-x-4 mt-6">
                <Link href="/ride" className="px-6 py-4 bg-purple-500 text-white rounded shadow hover:bg-purple-600 font-semibold text-lg">Use as Rider</Link>
                <Link href="/driver" className="px-6 py-4 bg-blue-500 text-white rounded shadow hover:bg-blue-600 font-semibold text-lg">Use as Driver</Link>
                <Link href="/admin" className="px-6 py-4 bg-green-500 text-white rounded shadow hover:bg-green-600 font-semibold text-lg">Admin Panel</Link>
            </div>
        </div>
    );
}
