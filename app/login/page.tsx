'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
    email: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]') as User[];
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        const matchedUser = storedUsers.find(
            (user) => user.email === trimmedEmail && user.password === trimmedPassword
        );

        if (matchedUser) {
            localStorage.setItem('currentUser', JSON.stringify(matchedUser));
            alert('Login successful!');
            router.push('/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label className="block font-semibold mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full border p-2 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>
            </form>
            <p className="mt-4 text-center">
                Don&apos;t have an account?{' '}
                <a href="/register" className="text-blue-600 underline">
                    Register
                </a>
            </p>
        </div>
    );
};

export default LoginPage;
