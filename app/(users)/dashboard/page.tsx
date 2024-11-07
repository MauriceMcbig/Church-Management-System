// app/dashboard/page.tsx (continued)
import StatCard from '@/components/dashboard/StatCard';
import AttendanceChart from '@/components/dashboard/AttendanceChart';
import RecentActivityFeed from '@/components/dashboard/RecentActivityFeed';
import BranchSelector from '@/components/layout/BranchSelector';

export default function DashboardPage() {
  return (
    <div>
      <div className='flex justify-between items-center bg-white p-4 rounded-lg shadow'>
        <h1 className='text-2xl font-semibold text-gray-900'>Dashboard</h1>
        <div className='relative z-10'>
          <BranchSelector />
        </div>
      </div>
      <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <StatCard
          title='Total Members'
          value='1,234'
          trend='+5.4%'
          trendDirection='up'
        />
        <StatCard
          title='Weekly Attendance'
          value='876'
          trend='-2.1%'
          trendDirection='down'
        />
        <StatCard
          title='Monthly Donations'
          value='$12,345'
          trend='+10.3%'
          trendDirection='up'
        />
        <StatCard
          title='Active Groups'
          value='24'
          trend='+2'
          trendDirection='up'
        />
      </div>
      <div className='mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2'>
        <div className='bg-white shadow rounded-lg p-4'>
          <h2 className='text-lg font-semibold text-gray-900 mb-4'>
            Attendance Trend
          </h2>
          <AttendanceChart />
        </div>
        <div className='bg-white shadow rounded-lg p-4'>
          <h2 className='text-lg font-semibold text-gray-900 mb-4'>
            Recent Activity
          </h2>
          <RecentActivityFeed />
        </div>
      </div>
    </div>
  );
}
