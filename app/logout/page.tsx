'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LogoutPage: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        // Remove current user from localStorage
        localStorage.removeItem('currentUser');

        // Optional: show message
        alert('Logged out successfully!');

        // Redirect to login page
        router.push('/login');
    }, [router]);

    return (
        <div className="flex items-center justify-center h-screen">
            <p className="text-xl font-semibold">Logging out...</p>
        </div>
    );
};

export default LogoutPage;
