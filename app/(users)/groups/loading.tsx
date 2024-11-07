// app/groups/loading.tsx
import React from 'react';

export default function GroupsLoading() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='text-center'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary mx-auto'></div>
        <h2 className='text-xl font-semibold mt-4 text-gray-700'>
          Loading Groups...
        </h2>
      </div>
    </div>
  );
}
