// components/admin/AdminSidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Users,
  Building,
  Calendar,
  DollarSign,
  UserPlus,
} from 'lucide-react';

const AdminSidebar: React.FC = () => {
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: Home },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Branches', href: '/admin/branches', icon: Building },
    { name: 'Events', href: '/admin/events', icon: Calendar },
    { name: 'Finances', href: '/admin/finances', icon: DollarSign },
    { name: 'Groups', href: '/admin/groups', icon: UserPlus },
  ];

  return (
    <div className='hidden md:flex md:flex-shrink-0'>
      <div className='flex flex-col w-64'>
        <div className='flex flex-col h-0 flex-1 bg-gray-800'>
          <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
            <div className='flex items-center flex-shrink-0 px-4'>
              <span className='text-white text-2xl font-bold'>Admin Panel</span>
            </div>
            <nav className='mt-5 flex-1 px-2 space-y-1'>
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      pathname.startsWith(item.href)
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}>
                    <Icon
                      className='mr-3 flex-shrink-0 h-6 w-6'
                      aria-hidden='true'
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
