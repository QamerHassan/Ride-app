'use client';

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex space-x-4">
                        <Link href="/" className="px-3 py-2 rounded hover:bg-purple-700 transition font-semibold">
                            Home
                        </Link>
                        <Link href="/ride" className="px-3 py-2 rounded hover:bg-purple-700 transition font-semibold">
                            Rider
                        </Link>
                        <Link href="/driver" className="px-3 py-2 rounded hover:bg-purple-700 transition font-semibold">
                            Driver
                        </Link>
                        <Link href="/history" className="px-3 py-2 rounded hover:bg-purple-700 transition font-semibold">
                            History
                        </Link>
                    </div>
                    <div>
                        <Link
                            href="/logout"
                            className="px-4 py-2 bg-white text-purple-600 rounded shadow hover:bg-gray-100 transition font-semibold"
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
