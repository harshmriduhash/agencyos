export async function getClientInfo() {
  return Promise.resolve({
    name: 'Jane Doe',
    email: 'jane@client.com',
    company: 'Acme Corp',
    avatarUrl: '',
  });
}

export async function getProposals() {
  return Promise.resolve([
    { id: '1', title: 'Website Redesign', date: '2024-05-10', status: 'Sent' },
    { id: '2', title: 'Mobile App', date: '2024-05-15', status: 'Viewed' },
    { id: '3', title: 'Branding Package', date: '2024-05-20', status: 'Signed' },
  ]);
}

export async function getInvoices() {
  return Promise.resolve([
    { id: 'INV-001', amount: '$2,000', status: 'Unpaid', date: '2024-05-10' },
    { id: 'INV-002', amount: '$1,500', status: 'Paid', date: '2024-04-20' },
  ]);
}

export async function getProject() {
  return Promise.resolve({
    name: 'Website Redesign',
    phase: 'UI Design',
    lastUpdated: '2024-06-01',
    health: '✅ On Track',
    milestones: [
      { title: 'Discovery', description: 'Initial research and planning.', status: 'Complete', eta: '2024-05-01' },
      { title: 'Design', description: 'UI/UX design phase.', status: 'In Progress', eta: '2024-06-10' },
      { title: 'Development', description: 'Building the product.', status: 'Pending', eta: '2024-07-01' },
      { title: 'Testing', description: 'QA and bug fixing.', status: 'Pending', eta: '2024-07-15' },
      { title: 'Delivery', description: 'Final delivery to client.', status: 'Pending', eta: '2024-07-20' },
    ],
    files: [
      { name: 'Wireframes.pdf' },
      { name: 'Designs.zip' },
    ],
  });
}

export async function getDocuments() {
  return Promise.resolve([
    { name: 'SOW.pdf' },
    { name: 'NDA.pdf' },
    { name: 'Contract.pdf' },
  ]);
} 