// components/members/MemberForm.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Home } from 'lucide-react';

const MemberForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, phone, address });
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='px-6 py-4'>
        <h3 className='text-2xl font-bold text-gray-800 mb-2'>
          Add New Member
        </h3>
        <p className='text-sm text-gray-600 mb-6'>
          Enter the details of the new church member.
        </p>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='relative'>
            <User className='absolute top-3 left-3 text-gray-400' />
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Full Name'
              className='pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div className='relative'>
            <Mail className='absolute top-3 left-3 text-gray-400' />
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email Address'
              className='pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div className='relative'>
            <Phone className='absolute top-3 left-3 text-gray-400' />
            <input
              type='tel'
              name='phone'
              id='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Phone Number'
              className='pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div className='relative'>
            <Home className='absolute top-3 left-3 text-gray-400' />
            <input
              type='text'
              name='address'
              id='address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='Address'
              className='pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
            Add Member
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default MemberForm;
