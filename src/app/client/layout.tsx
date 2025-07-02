"use client";
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useAuth } from '@/store/auth';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuth((s) => s.isAuthenticated);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Don't redirect on login page
    if (!isAuthenticated && pathname !== '/client/login') {
      router.push('/client/login');
    }
  }, [isAuthenticated, pathname, router]);

  if (!isAuthenticated && pathname !== '/client/login') {
    return null; // Optionally, show a loading spinner
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <div className="flex flex-1 min-h-0">
        <aside className="hidden md:block w-64 bg-white border-r p-4">
          <Sidebar />
        </aside>
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
} 