'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  email: string;
  password: string;
}

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]') as User[];
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Check if email already exists
    if (storedUsers.find((u) => u.email === trimmedEmail)) {
      alert('Email already registered!');
      return;
    }

    const newUser: User = { email: trimmedEmail, password: trimmedPassword };
    localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));

    alert('Registered successfully!');
    router.push('/login');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
      <form onSubmit={handleRegister} className="space-y-4">
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
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600 underline">
          Login
        </a>
      </p>
    </div>
  );
};

export default RegisterPage;
