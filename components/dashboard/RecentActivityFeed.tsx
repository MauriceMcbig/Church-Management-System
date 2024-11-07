// components/dashboard/RecentActivityFeed.tsx
const activities = [
  {
    id: 1,
    user: 'John Doe',
    action: 'added a new member',
    time: '2 hours ago',
  },
  {
    id: 2,
    user: 'Jane Smith',
    action: 'created a new event',
    time: '4 hours ago',
  },
  {
    id: 3,
    user: 'Mike Johnson',
    action: 'recorded a donation',
    time: '1 day ago',
  },
  {
    id: 4,
    user: 'Sarah Williams',
    action: 'updated group information',
    time: '2 days ago',
  },
];

const RecentActivityFeed: React.FC = () => {
  return (
    <div className='flow-root'>
      <ul className='-mb-8'>
        {activities.map((activity, activityIdx) => (
          <li key={activity.id}>
            <div className='relative pb-8'>
              {activityIdx !== activities.length - 1 ? (
                <span
                  className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                  aria-hidden='true'
                />
              ) : null}
              <div className='relative flex space-x-3'>
                <div>
                  <span className='h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white'>
                    {/* You can add user avatar or icon here */}
                  </span>
                </div>
                <div className='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
                  <div>
                    <p className='text-sm text-gray-500'>
                      {activity.user}{' '}
                      <span className='font-medium text-gray-900'>
                        {activity.action}
                      </span>
                    </p>
                  </div>
                  <div className='text-right text-sm whitespace-nowrap text-gray-500'>
                    <time dateTime={activity.time}>{activity.time}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivityFeed;
