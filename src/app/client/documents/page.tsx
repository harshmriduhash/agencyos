import React from 'react';

const documents = [
  { name: 'SOW.pdf' },
  { name: 'NDA.pdf' },
  { name: 'Contract.pdf' },
];

export default function DocumentsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Documents</h1>
      <ul className="divide-y divide-gray-200 bg-white rounded-lg shadow">
        {documents.map((doc, i) => (
          <li key={i} className="flex items-center justify-between p-4">
            <span>{doc.name}</span>
            <div className="space-x-2">
              <button className="text-blue-600 hover:underline">View</button>
              <button className="text-gray-600 hover:underline">Download</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 