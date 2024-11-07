// components/finances/FinanceForm.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign,
  Calendar,
  Tag,
  ArrowUpCircle,
  ArrowDownCircle,
} from 'lucide-react';

const FinanceForm: React.FC = () => {
  const [type, setType] = useState('Income');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ type, category, amount, date });
    // Reset form
    setType('Income');
    setCategory('');
    setAmount('');
    setDate('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='px-6 py-4'>
        <h3 className='text-2xl font-bold text-gray-800 mb-2'>
          Add New Transaction
        </h3>
        <p className='text-sm text-gray-600 mb-6'>
          Enter the details of the new financial transaction.
        </p>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='flex space-x-4'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type='button'
              onClick={() => setType('Income')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                type === 'Income'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
              <div className='flex items-center justify-center'>
                <ArrowUpCircle className='w-5 h-5 mr-2' />
                Income
              </div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type='button'
              onClick={() => setType('Expense')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                type === 'Expense'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
              <div className='flex items-center justify-center'>
                <ArrowDownCircle className='w-5 h-5 mr-2' />
                Expense
              </div>
            </motion.button>
          </div>

          <div className='relative'>
            <Tag className='absolute top-3 left-3 text-gray-400' />
            <input
              type='text'
              name='category'
              id='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder='Category'
              className='pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div className='relative'>
            <DollarSign className='absolute top-3 left-3 text-gray-400' />
            <input
              type='number'
              name='amount'
              id='amount'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder='Amount'
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

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
            Save Transaction
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default FinanceForm;
