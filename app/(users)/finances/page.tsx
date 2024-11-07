// app/finances/page.tsx
import FinanceList from '@/components/finances/FinanceList';
import FinanceForm from '@/components/finances/FinanceForm';
import BranchSelector from '@/components/layout/BranchSelector';

export default function FinancesPage() {
  return (
    <div className='space-y-8'>
      <div className='flex justify-between items-center bg-white p-4 rounded-lg shadow'>
        <h1 className='text-2xl font-semibold text-gray-900'>Finance</h1>
        <div className='relative z-10'>
          <BranchSelector />
        </div>
      </div>

      <FinanceForm />

      <div className='mt-12'>
        {' '}
        {/* Increased top margin for more space */}
        <FinanceList />
      </div>
    </div>
  );
}
