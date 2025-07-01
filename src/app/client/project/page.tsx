import React from 'react';

const milestones = [
  { title: 'Discovery', description: 'Initial research and planning.', status: 'Complete', eta: '2024-05-01' },
  { title: 'Design', description: 'UI/UX design phase.', status: 'In Progress', eta: '2024-06-10' },
  { title: 'Development', description: 'Building the product.', status: 'Pending', eta: '2024-07-01' },
  { title: 'Testing', description: 'QA and bug fixing.', status: 'Pending', eta: '2024-07-15' },
  { title: 'Delivery', description: 'Final delivery to client.', status: 'Pending', eta: '2024-07-20' },
];

const files = [
  { name: 'Wireframes.pdf' },
  { name: 'Designs.zip' },
];

export default function ProjectPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Project Milestones</h1>
      <ol className="relative border-l border-gray-300 mb-8">
        {milestones.map((m, i) => (
          <li key={i} className="mb-8 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white">
              {i + 1}
            </span>
            <h3 className="font-semibold text-lg">{m.title}</h3>
            <p className="text-gray-500 text-sm mb-1">{m.description}</p>
            <div className="flex items-center gap-4 text-xs">
              <span className="bg-gray-100 px-2 py-0.5 rounded">Status: {m.status}</span>
              <span className="bg-gray-100 px-2 py-0.5 rounded">ETA: {m.eta}</span>
            </div>
          </li>
        ))}
      </ol>
      <div>
        <h2 className="font-semibold mb-2">Files Shared</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {files.map((f, i) => (
            <li key={i}>{f.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 