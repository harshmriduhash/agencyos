import React from 'react';

const invoices = [
  { id: 'INV-001', amount: '$2,000', status: 'Unpaid', date: '2024-05-10' },
  { id: 'INV-002', amount: '$1,500', status: 'Paid', date: '2024-04-20' },
];

export default function InvoicesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Invoices</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="text-left text-gray-600 text-xs uppercase">
              <th className="p-3">Invoice #</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-t">
                <td className="p-3 font-medium">{inv.id}</td>
                <td className="p-3">{inv.amount}</td>
                <td className="p-3">{inv.status}</td>
                <td className="p-3">{inv.date}</td>
                <td className="p-3">
                  {inv.status === 'Unpaid' ? (
                    <button className="text-green-600 hover:underline">Pay Now</button>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 