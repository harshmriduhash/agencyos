import React from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Topbar placeholder */}
      <div className="sticky top-0 z-30 h-16 bg-white border-b flex items-center px-4 shadow-sm">
        <span className="font-bold text-lg">AgencyOS</span>
        {/* TODO: Add Topbar component here */}
      </div>
      <div className="flex flex-1 min-h-0">
        {/* Sidebar placeholder */}
        <aside className="hidden md:block w-64 bg-white border-r p-4">
          {/* TODO: Add Sidebar component here */}
          <div className="font-semibold mb-4">Sidebar</div>
          <ul className="space-y-2 text-gray-700">
            <li>Dashboard</li>
            <li>Proposals</li>
            <li>Project</li>
            <li>Invoices</li>
            <li>Documents</li>
            <li>Settings</li>
          </ul>
        </aside>
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
} 