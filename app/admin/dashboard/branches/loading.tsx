// app/admin/branches/loading.tsx
import { Building } from 'lucide-react';

export default function AdminBranchesLoading() {
  return (
    <div className='space-y-6'>
      <div className='h-8 bg-gray-200 rounded w-1/4 animate-pulse'></div>

      <div className='bg-white shadow overflow-hidden sm:rounded-md'>
        <ul className='divide-y divide-gray-200'>
          {[...Array(3)].map((_, index) => (
            <li key={index}>
              <div className='px-4 py-4 flex items-center sm:px-6'>
                <div className='min-w-0 flex-1 sm:flex sm:items-center sm:justify-between'>
                  <div className='flex items-center'>
                    <Building
                      className='flex-shrink-0 h-6 w-6 text-gray-400'
                      aria-hidden='true'
                    />
                    <div className='ml-4'>
                      <div className='h-4 bg-gray-200 rounded w-1/3 animate-pulse mb-2'></div>
                      <div className='h-4 bg-gray-200 rounded w-1/4 animate-pulse'></div>
                    </div>
                  </div>
                  <div className='mt-4 flex-shrink-0 sm:mt-0 sm:ml-5'>
                    <div className='h-6 bg-gray-200 rounded w-24 animate-pulse'></div>
                  </div>
                </div>
                <div className='ml-5 flex-shrink-0'>
                  <div className='h-6 w-6 bg-gray-200 rounded animate-pulse mr-2 inline-block'></div>
                  <div className='h-6 w-6 bg-gray-200 rounded animate-pulse inline-block'></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
