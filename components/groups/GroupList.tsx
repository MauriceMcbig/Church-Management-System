// components/groups/GroupList.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  User,
  Calendar,
  Clock,
  MoreVertical,
  Edit,
  Trash2,
} from 'lucide-react';

const dummyGroups = [
  {
    id: 1,
    name: 'Youth Group',
    leader: 'John Doe',
    meetingDay: 'Friday',
    meetingTime: '7:00 PM',
    members: 25,
  },
  {
    id: 2,
    name: "Women's Ministry",
    leader: 'Jane Smith',
    meetingDay: 'Tuesday',
    meetingTime: '10:00 AM',
    members: 40,
  },
  {
    id: 3,
    name: "Men's Fellowship",
    leader: 'Mike Johnson',
    meetingDay: 'Thursday',
    meetingTime: '7:30 PM',
    members: 30,
  },
  {
    id: 4,
    name: "Children's Ministry",
    leader: 'Sarah Williams',
    meetingDay: 'Sunday',
    meetingTime: '9:30 AM',
    members: 50,
  },
];

const GroupList: React.FC = () => {
  const [groups] = useState(dummyGroups);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='px-6 py-4'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Church Groups</h2>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Group
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Leader
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Meeting Time
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Members
                </th>
                <th scope='col' className='relative px-6 py-3'>
                  <span className='sr-only'>Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {groups.map((group) => (
                <motion.tr
                  key={group.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm font-medium text-gray-900'>
                      {group.name}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-900 flex items-center'>
                      <User className='h-4 w-4 mr-2 text-gray-400' />
                      {group.leader}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-900 flex items-center'>
                      <Calendar className='h-4 w-4 mr-2 text-gray-400' />
                      {group.meetingDay}
                    </div>
                    <div className='text-sm text-gray-500 flex items-center mt-1'>
                      <Clock className='h-4 w-4 mr-2 text-gray-400' />
                      {group.meetingTime}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-900 flex items-center'>
                      <Users className='h-4 w-4 mr-2 text-gray-400' />
                      {group.members}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                    <div className='relative'>
                      <button
                        onClick={() => toggleDropdown(group.id)}
                        className='text-gray-400 hover:text-gray-500 focus:outline-none'>
                        <MoreVertical className='h-5 w-5' />
                      </button>
                      {activeDropdown === group.id && (
                        <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-10'>
                          <div className='py-1'>
                            <a
                              href='#'
                              className='group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                              <Edit className='mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500' />
                              Edit
                            </a>
                          </div>
                          <div className='py-1'>
                            <a
                              href='#'
                              className='group flex items-center px-4 py-2 text-sm text-red-700 hover:bg-red-100'>
                              <Trash2 className='mr-3 h-5 w-5 text-red-400 group-hover:text-red-500' />
                              Delete
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GroupList;
