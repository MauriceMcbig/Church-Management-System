// components/groups/GroupForm.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, User, Calendar, Clock } from 'lucide-react';

const GroupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [leader, setLeader] = useState('');
  const [meetingDay, setMeetingDay] = useState('');
  const [meetingTime, setMeetingTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, leader, meetingDay, meetingTime });
    // Reset form
    setName('');
    setLeader('');
    setMeetingDay('');
    setMeetingTime('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='px-6 py-4'>
        <h3 className='text-2xl font-bold text-gray-800 mb-2'>
          Create New Group
        </h3>
        <p className='text-sm text-gray-600 mb-6'>
          Enter the details of the new church group.
        </p>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='relative'>
            <Users className='absolute top-3 left-3 text-gray-400' />
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Group Name'
              className='pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div className='relative'>
            <User className='absolute top-3 left-3 text-gray-400' />
            <input
              type='text'
              name='leader'
              id='leader'
              value={leader}
              onChange={(e) => setLeader(e.target.value)}
              placeholder='Group Leader'
              className='pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div className='relative'>
            <Calendar className='absolute top-3 left-3 text-gray-400' />
            <select
              name='meetingDay'
              id='meetingDay'
              value={meetingDay}
              onChange={(e) => setMeetingDay(e.target.value)}
              className='pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
              <option value=''>Select Meeting Day</option>
              <option value='Monday'>Monday</option>
              <option value='Tuesday'>Tuesday</option>
              <option value='Wednesday'>Wednesday</option>
              <option value='Thursday'>Thursday</option>
              <option value='Friday'>Friday</option>
              <option value='Saturday'>Saturday</option>
              <option value='Sunday'>Sunday</option>
            </select>
          </div>

          <div className='relative'>
            <Clock className='absolute top-3 left-3 text-gray-400' />
            <input
              type='time'
              name='meetingTime'
              id='meetingTime'
              value={meetingTime}
              onChange={(e) => setMeetingTime(e.target.value)}
              className='pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
            Create Group
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default GroupForm;
