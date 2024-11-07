// app/groups/page.tsx
import GroupList from '@/components/groups/GroupList';
import GroupForm from '@/components/groups/GroupForm';
import BranchSelector from '@/components/layout/BranchSelector';

export default function GroupsPage() {
  return (
    <div className='space-y-8'>
      <div className='flex justify-between items-center bg-white p-4 rounded-lg shadow'>
        <h1 className='text-2xl font-semibold text-gray-900'>Groups</h1>
        <div className='relative z-10'>
          <BranchSelector />
        </div>
      </div>
      <GroupForm />
      <div className='mt-12'>
        {' '}
        {/* Increased top margin for more space */}
        <GroupList />
      </div>
    </div>
  );
}
