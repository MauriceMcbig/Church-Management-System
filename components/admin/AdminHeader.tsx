// components/admin/AdminHeader.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, LogOut } from 'lucide-react';
import { toast } from 'sonner';

const AdminHeader: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
    router.push('/admin');
  };

  return (
    <header className='bg-white shadow'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              <h1 className='text-2xl font-bold text-gray-800'>
                Admin Dashboard
              </h1>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='ml-3 relative'>
              <div>
                <button
                  className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                  id='user-menu'
                  aria-haspopup='true'
                  onClick={() => setIsProfileOpen(!isProfileOpen)}>
                  <span className='sr-only'>Open user menu</span>
                  <User className='h-8 w-8 rounded-full' />
                </button>
              </div>
              {isProfileOpen && (
                <div
                  className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu'>
                  <button
                    onClick={handleLogout}
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'
                    role='menuitem'>
                    <LogOut className='inline-block mr-2 h-5 w-5' />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
