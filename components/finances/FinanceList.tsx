// components/finances/FinanceList.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign,
  Calendar,
  Tag,
  ArrowUpCircle,
  ArrowDownCircle,
  MoreVertical,
  Edit,
  Trash2,
} from 'lucide-react';

const dummyTransactions = [
  {
    id: 1,
    type: 'Income',
    category: 'Tithes',
    amount: 1000,
    date: '2023-06-01',
  },
  {
    id: 2,
    type: 'Expense',
    category: 'Utilities',
    amount: 500,
    date: '2023-06-05',
  },
  {
    id: 3,
    type: 'Income',
    category: 'Donations',
    amount: 750,
    date: '2023-06-10',
  },
  {
    id: 4,
    type: 'Expense',
    category: 'Supplies',
    amount: 200,
    date: '2023-06-15',
  },
];

const FinanceList: React.FC = () => {
  const [transactions] = useState(dummyTransactions);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='px-6 py-4'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>
          Financial Transactions
        </h2>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Type
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Category
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Amount
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Date
                </th>
                <th scope='col' className='relative px-6 py-3'>
                  <span className='sr-only'>Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {transactions.map((transaction) => (
                <motion.tr
                  key={transaction.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transaction.type === 'Income'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                      {transaction.type === 'Income' ? (
                        <ArrowUpCircle className='h-4 w-4 mr-1' />
                      ) : (
                        <ArrowDownCircle className='h-4 w-4 mr-1' />
                      )}
                      {transaction.type}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-900 flex items-center'>
                      <Tag className='h-4 w-4 mr-2 text-gray-400' />
                      {transaction.category}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-900 flex items-center'>
                      <DollarSign className='h-4 w-4 mr-2 text-gray-400' />
                      {transaction.amount.toFixed(2)}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-900 flex items-center'>
                      <Calendar className='h-4 w-4 mr-2 text-gray-400' />
                      {transaction.date}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                    <div className='relative'>
                      <button
                        onClick={() => toggleDropdown(transaction.id)}
                        className='text-gray-400 hover:text-gray-500 focus:outline-none'>
                        <MoreVertical className='h-5 w-5' />
                      </button>
                      {activeDropdown === transaction.id && (
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

export default FinanceList;
