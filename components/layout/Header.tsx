// components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bell, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className='bg-white shadow'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <Link href='/' className='text-2xl font-bold text-gray-800'>
              CMS
            </Link>
          </div>
          <div className='flex items-center'>
            <button className='p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              <Bell className='h-6 w-6' />
            </button>
            <div className='ml-4 relative'>
              <button
                className='p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                onClick={() => setIsProfileOpen(!isProfileOpen)}>
                <User className='h-6 w-6' />
              </button>
              {isProfileOpen && (
                <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50'>
                  <Link
                    href='/profile'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    Your Profile
                  </Link>
                  <Link
                    href='/settings'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    Settings
                  </Link>
                  <Link
                    href='/logout'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
