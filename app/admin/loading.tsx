// app/admin/loading.tsx
import { Users, Building } from 'lucide-react';

export default function AdminDashboardLoading() {
  const loadingItems = [Users, Building];

  return (
    <div className='space-y-6'>
      <div className='h-8 bg-gray-200 rounded w-1/4 animate-pulse'></div>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        {loadingItems.map((Icon, index) => (
          <div
            key={index}
            className='bg-white overflow-hidden shadow rounded-lg'>
            <div className='p-5'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <Icon className='h-6 w-6 text-gray-400' aria-hidden='true' />
                </div>
                <div className='ml-5 w-0 flex-1'>
                  <div className='h-4 bg-gray-200 rounded w-3/4 animate-pulse mb-2'></div>
                  <div className='h-6 bg-gray-200 rounded w-1/2 animate-pulse'></div>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 px-5 py-3'>
              <div className='h-4 bg-gray-200 rounded w-1/4 animate-pulse'></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
