import React from 'react';
import { useAuth } from '@/store/auth';
import { useRouter } from 'next/navigation';

export default function Topbar() {
  const logout = useAuth((s) => s.logout);
  const client = useAuth((s) => s.client);
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push('/client/login');
  }

  return (
    <header className="sticky top-0 z-30 h-16 bg-white border-b flex items-center justify-between px-4 shadow-sm">
      <div className="flex items-center gap-2">
        {/* Agency logo placeholder */}
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
        <span className="font-bold text-lg">AgencyOS</span>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-blue-600 font-medium" onClick={handleLogout}>Logout</button>
        {/* Client avatar and name */}
        {client ? (
          <div className="flex items-center gap-2">
            {client.avatarUrl ? (
              <img src={client.avatarUrl} alt={client.name} className="w-8 h-8 rounded-full object-cover" />
            ) : (
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">
                {client.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
            )}
            <span className="font-medium text-gray-700">{client.name}</span>
          </div>
        ) : (
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
        )}
      </div>
    </header>
  );
} 