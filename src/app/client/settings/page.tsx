import React from 'react';

export default function SettingsPage() {
  const client = {
    name: 'Jane Doe',
    email: 'jane@client.com',
    company: 'Acme Corp',
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="font-semibold mb-2">Client Info</h2>
        <div className="mb-2">Name: <span className="font-medium">{client.name}</span></div>
        <div className="mb-2">Email: <span className="font-medium">{client.email}</span></div>
        <div className="mb-2">Company: <span className="font-medium">{client.company}</span></div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="font-semibold mb-2">Email Notifications</h2>
        <label className="flex items-center gap-2 mb-2">
          <input type="checkbox" defaultChecked className="accent-blue-600" />
          Project updates
        </label>
        <label className="flex items-center gap-2 mb-2">
          <input type="checkbox" className="accent-blue-600" />
          Invoice reminders
        </label>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="font-semibold mb-2">Password Reset</h2>
        <input type="password" placeholder="New password" className="border rounded px-3 py-2 mr-2" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Reset</button>
      </div>
      <button className="bg-gray-100 border px-4 py-2 rounded">Contact Support</button>
    </div>
  );
} 