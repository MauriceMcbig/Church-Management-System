// app/admin/users/page.tsx
'use client';

import { useState } from 'react';
import { User, Edit, Trash2 } from 'lucide-react';

const dummyUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'User' },
];

export default function AdminUsersPage() {
  const [users] = useState(dummyUsers);

  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-semibold text-gray-900'>Manage Users</h1>

      <div className='bg-white shadow overflow-hidden sm:rounded-md'>
        <ul className='divide-y divide-gray-200'>
          {users.map((user) => (
            <li key={user.id}>
              <div className='px-4 py-4 flex items-center sm:px-6'>
                <div className='min-w-0 flex-1 sm:flex sm:items-center sm:justify-between'>
                  <div className='flex items-center'>
                    <User
                      className='flex-shrink-0 h-6 w-6 text-gray-400'
                      aria-hidden='true'
                    />
                    <div className='ml-4'>
                      <p className='font-medium text-indigo-600 truncate'>
                        {user.name}
                      </p>
                      <p className='mt-2 flex items-center text-sm text-gray-500'>
                        <span className='truncate'>{user.email}</span>
                      </p>
                    </div>
                  </div>
                  <div className='mt-4 flex-shrink-0 sm:mt-0 sm:ml-5'>
                    <div className='flex overflow-hidden'>
                      <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800'>
                        {user.role}
                      </span>
                    </div>
                  </div>
                </div>
                <div className='ml-5 flex-shrink-0'>
                  <button className='mr-2 p-1 rounded-full text-gray-400 hover:text-gray-500'>
                    <Edit className='h-5 w-5' aria-hidden='true' />
                  </button>
                  <button className='p-1 rounded-full text-gray-400 hover:text-gray-500'>
                    <Trash2 className='h-5 w-5' aria-hidden='true' />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
