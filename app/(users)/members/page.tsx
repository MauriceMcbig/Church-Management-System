// app/members/page.tsx
import MemberList from '@/components/members/MemberList';
import MemberForm from '@/components/members/MemberForm';
import BranchSelector from '@/components/layout/BranchSelector';

export default function MembersPage() {
  return (
    <div className='space-y-8'>
      <div className='flex justify-between items-center bg-white p-4 rounded-lg shadow'>
        <h1 className='text-2xl font-semibold text-gray-900'>Members</h1>
        <div className='relative z-10'>
          <BranchSelector />
        </div>
      </div>
      <MemberForm />
      <div className='mt-8'>
        <MemberList />
      </div>
    </div>
  );
}
