// app/events/page.tsx
import EventList from '@/components/events/EventList';
import EventForm from '@/components/events/EventForm';
import BranchSelector from '@/components/layout/BranchSelector';

export default function EventsPage() {
  return (
    <div className='space-y-8'>
      <div className='flex justify-between items-center bg-white p-4 rounded-lg shadow'>
        <h1 className='text-2xl font-semibold text-gray-900'>Events</h1>
        <div className='relative z-10'>
          <BranchSelector />
        </div>
      </div>
      <EventForm />
      <div className='mt-12'>
        {' '}
        {/* Increased top margin for more space */}
        <EventList />
      </div>
    </div>
  );
}
