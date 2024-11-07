// components/dashboard/StatCard.tsx
interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendDirection: 'up' | 'down';
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  trend,
  trendDirection,
}) => {
  return (
    <div className='bg-white overflow-hidden shadow rounded-lg'>
      <div className='p-5'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>{/* You can add an icon here */}</div>
          <div className='ml-5 w-0 flex-1'>
            <dl>
              <dt className='text-sm font-medium text-gray-500 truncate'>
                {title}
              </dt>
              <dd>
                <div className='text-lg font-medium text-gray-900'>{value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className='bg-gray-50 px-5 py-3'>
        <div className='text-sm'>
          <span
            className={`font-medium ${
              trendDirection === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
            {trend}
          </span>
          <span className='text-gray-500'> from last month</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
