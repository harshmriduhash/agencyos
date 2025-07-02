"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/store/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const login = useAuth((s) => s.login);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter email and password.');
      return;
    }
    // Store a mock JWT and fetch client info
    await login('mock-jwt-token');
    router.push('/client/dashboard');
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Client Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
            <input type="email" className="w-full border border-gray-700 bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">Password</label>
            <input type="password" className="w-full border border-gray-700 bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition-colors">Login</button>
        </form>
        {/* Error message */}
        <div className="text-red-400 text-sm mt-4 text-center min-h-[1.5em]">{error}</div>
      </div>
    </div>
  );
} 