import React from 'react';

export default function ClientDashboard() {
  // Placeholder data
  const clientName = 'Jane Doe';
  const project = {
    name: 'Website Redesign',
    phase: 'UI Design',
    lastUpdated: '2024-06-01',
    health: '✅ On Track',
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Welcome, {clientName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-gray-500 text-xs mb-1">Active Project</div>
          <div className="font-semibold">{project.name}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-gray-500 text-xs mb-1">Project Phase</div>
          <div className="font-semibold">{project.phase}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-gray-500 text-xs mb-1">Last Updated</div>
          <div className="font-semibold">{project.lastUpdated}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-gray-500 text-xs mb-1">Project Health</div>
          <div className="font-semibold">{project.health}</div>
        </div>
      </div>
    </div>
  );
} 