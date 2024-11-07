// components/events/EventForm.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Type } from 'lucide-react';

const EventForm: React.FC = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, date, time, location });
    // Reset form
    setName('');
    setDate('');
    setTime('');
    setLocation('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='px-6 py-4'>
        <h3 className='text-2xl font-bold text-gray-800 mb-2'>
          Create New Event
        </h3>
        <p className='text-sm text-gray-600 mb-6'>
          Enter the details of the new church event.
        </p>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='relative'>
            <Type className='absolute top-3 left-3 text-gray-400' />
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Event Name'
              className='pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div className='relative'>
            <Calendar className='absolute top-3 left-3 text-gray-400' />
            <input
              type='date'
              name='date'
              id='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className='pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div className='relative'>
            <Clock className='absolute top-3 left-3 text-gray-400' />
            <input
              type='time'
              name='time'
              id='time'
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className='pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div className='relative'>
            <MapPin className='absolute top-3 left-3 text-gray-400' />
            <input
              type='text'
              name='location'
              id='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder='Event Location'
              className='pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
            Create Event
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default EventForm;
