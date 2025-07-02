import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Dashboard', href: '/client/dashboard' },
  { label: 'Proposals', href: '/client/proposals' },
  { label: 'Project', href: '/client/project' },
  { label: 'Invoices', href: '/client/invoices' },
  { label: 'Documents', href: '/client/documents' },
  { label: 'Settings', href: '/client/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className="h-full flex flex-col">
      <div className="mb-8 flex items-center gap-2 px-2">
        {/* Placeholder for logo/avatar */}
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
        <span className="font-bold text-lg">AgencyOS</span>
      </div>
      <ul className="flex-1 space-y-1">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block px-3 py-2 rounded transition-colors font-medium ${
                pathname === item.href
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 