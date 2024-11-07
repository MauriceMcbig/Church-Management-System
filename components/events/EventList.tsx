// components/events/EventList.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  MoreVertical,
  Edit,
  Trash2,
} from 'lucide-react';

const dummyEvents = [
  {
    id: 1,
    name: 'Sunday Service',
    date: '2023-06-18',
    time: '10:00 AM',
    location: 'Main Hall',
    attendees: 150,
  },
  {
    id: 2,
    name: 'Youth Group Meeting',
    date: '2023-06-20',
    time: '7:00 PM',
    location: 'Youth Center',
    attendees: 30,
  },
  {
    id: 3,
    name: 'Bible Study',
    date: '2023-06-21',
    time: '6:30 PM',
    location: 'Room 101',
    attendees: 20,
  },
  {
    id: 4,
    name: 'Choir Practice',
    date: '2023-06-22',
    time: '7:30 PM',
    location: 'Choir Room',
    attendees: 25,
  },
];

const EventList: React.FC = () => {
  const [events] = useState(dummyEvents);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='px-6 py-4'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>
          Upcoming Events
        </h2>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Event
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Date & Time
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Location
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Attendees
                </th>
                <th scope='col' className='relative px-6 py-3'>
                  <span className='sr-only'>Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {events.map((event) => (
                <motion.tr
                  key={event.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm font-medium text-gray-900'>
                      {event.name}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-900 flex items-center'>
                      <Calendar className='h-4 w-4 mr-2 text-gray-400' />
                      {event.date}
                    </div>
                    <div className='text-sm text-gray-500 flex items-center mt-1'>
                      <Clock className='h-4 w-4 mr-2 text-gray-400' />
                      {event.time}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-900 flex items-center'>
                      <MapPin className='h-4 w-4 mr-2 text-gray-400' />
                      {event.location}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-900 flex items-center'>
                      <Users className='h-4 w-4 mr-2 text-gray-400' />
                      {event.attendees}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                    <div className='relative'>
                      <button
                        onClick={() => toggleDropdown(event.id)}
                        className='text-gray-400 hover:text-gray-500 focus:outline-none'>
                        <MoreVertical className='h-5 w-5' />
                      </button>
                      {activeDropdown === event.id && (
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

export default EventList;
