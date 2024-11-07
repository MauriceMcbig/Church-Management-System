// components/layout/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Calendar, DollarSign, UserPlus } from 'lucide-react';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Members', href: '/members', icon: Users },
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'Finances', href: '/finances', icon: DollarSign },
    { name: 'Groups', href: '/groups', icon: UserPlus },
    // { name: 'Admin', href: '/admin', icon: Settings },
  ];

  return (
    <div className='hidden md:flex md:flex-shrink-0'>
      <div className='flex flex-col w-64'>
        <div className='flex flex-col h-0 flex-1 bg-gray-800'>
          <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
            <div className='flex items-center h-16 flex-shrink-0 px-4 bg-gray-800'>
              <Image
                src='/images/logo.svg'
                alt='Church Management System'
                width={16}
                height={16}
                className='w-4 h-4 mr-2'
                priority
              />
              <span className='text-white font-semibold text-sm'>
                Church Management System
              </span>
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

export default Sidebar;
