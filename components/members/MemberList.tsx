// components/members/MemberList.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MoreVertical, Edit, Trash2 } from 'lucide-react';

// Updated dummy data to include address
const dummyMembers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    status: 'active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '098-765-4321',
    address: '456 Elm St, Othertown, USA',
    status: 'inactive',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '111-222-3333',
    address: '789 Oak St, Somewhere, USA',
    status: 'active',
  },
  {
    id: 4,
    name: 'Bob Williams',
    email: 'bob@example.com',
    phone: '444-555-6666',
    address: '321 Pine St, Nowhere, USA',
    status: 'active',
  },
];

const MemberList: React.FC = () => {
  const [members] = useState(dummyMembers);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='px-6 py-4'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>
          Church Members
        </h2>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Member
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Contact Information
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Status
                </th>
                <th scope='col' className='relative px-6 py-3'>
                  <span className='sr-only'>Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {members.map((member) => (
                <motion.tr
                  key={member.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 h-10 w-10'>
                        <img
                          className='h-10 w-10 rounded-full'
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                            member.name,
                          )}&background=random`}
                          alt=''
                        />
                      </div>
                      <div className='ml-4'>
                        <div className='text-sm font-medium text-gray-900'>
                          {member.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <div className='text-sm text-gray-900 flex items-center'>
                      <Mail className='h-4 w-4 mr-2 text-gray-400' />
                      {member.email}
                    </div>
                    <div className='text-sm text-gray-500 flex items-center mt-1'>
                      <Phone className='h-4 w-4 mr-2 text-gray-400' />
                      {member.phone}
                    </div>
                    <div className='text-sm text-gray-500 flex items-center mt-1'>
                      <MapPin className='h-4 w-4 mr-2 text-gray-400' />
                      {member.address}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        member.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                    <div className='relative'>
                      <button
                        onClick={() => toggleDropdown(member.id)}
                        className='text-gray-400 hover:text-gray-500 focus:outline-none'>
                        <MoreVertical className='h-5 w-5' />
                      </button>
                      {activeDropdown === member.id && (
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

export default MemberList;
