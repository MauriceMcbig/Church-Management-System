// app/admin/dashboard/page.tsx
'use client';

import Link from 'next/link';
import { Users, Building, Calendar, DollarSign, UserPlus } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminDashboard() {
  const adminLinks = [
    {
      href: '/admin/users',
      icon: Users,
      title: 'Manage Users',
      description: 'User Administration',
    },
    {
      href: '/admin/branches',
      icon: Building,
      title: 'Manage Branches',
      description: 'Branch Administration',
    },
    {
      href: '/admin/events',
      icon: Calendar,
      title: 'Manage Events',
      description: 'Event Administration',
    },
    {
      href: '/admin/finances',
      icon: DollarSign,
      title: 'Manage Finances',
      description: 'Financial Administration',
    },
    {
      href: '/admin/groups',
      icon: UserPlus,
      title: 'Manage Groups',
      description: 'Group Administration',
    },
  ];

  const handleLinkClick = (title: string) => {
    toast.info(`Navigating to ${title}`);
  };

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-semibold text-gray-900'>Quick Actions</h2>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {adminLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <Link
              key={index}
              href={link.href}
              className='block'
              onClick={() => handleLinkClick(link.title)}>
              <div className='bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300'>
                <div className='p-5'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <Icon
                        className='h-6 w-6 text-indigo-600'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-5 w-0 flex-1'>
                      <dl>
                        <dt className='text-sm font-medium text-gray-500 truncate'>
                          {link.title}
                        </dt>
                        <dd>
                          <div className='text-lg font-medium text-gray-900'>
                            {link.description}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-5 py-3'>
                  <div className='text-sm'>
                    <span className='font-medium text-indigo-700 hover:text-indigo-900'>
                      Manage
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
