import React from 'react';

const proposals = [
  { id: '1', title: 'Website Redesign', date: '2024-05-10', status: 'Sent' },
  { id: '2', title: 'Mobile App', date: '2024-05-15', status: 'Viewed' },
  { id: '3', title: 'Branding Package', date: '2024-05-20', status: 'Signed' },
];

export default function ProposalsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Proposals</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="text-left text-gray-600 text-xs uppercase">
              <th className="p-3">Title</th>
              <th className="p-3">Date Sent</th>
              <th className="p-3">Status</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-3 font-medium">{p.title}</td>
                <td className="p-3">{p.date}</td>
                <td className="p-3">{p.status}</td>
                <td className="p-3">
                  <button className="text-blue-600 hover:underline">View Proposal</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 