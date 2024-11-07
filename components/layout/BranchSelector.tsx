// components/layout/BranchSelector.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const branches = [
  { id: 1, name: 'Main Branch' },
  { id: 2, name: 'North Branch' },
  { id: 3, name: 'South Branch' },
  { id: 4, name: 'East Branch' },
  { id: 5, name: 'West Branch' },
];

const BranchSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectBranch = (branch: (typeof branches)[0]) => {
    setSelectedBranch(branch);
    setIsOpen(false);
  };

  return (
    <div className='relative inline-block text-left'>
      <div>
        <button
          type='button'
          className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          id='branch-menu'
          aria-expanded='true'
          aria-haspopup='true'
          onClick={toggleDropdown}>
          {selectedBranch.name}
          <ChevronDown className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
        </button>
      </div>

      {isOpen && (
        <div
          className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='branch-menu'>
          <div className='py-1' role='none'>
            {branches.map((branch) => (
              <button
                key={branch.id}
                className={`${
                  selectedBranch.id === branch.id
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                } group flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900`}
                role='menuitem'
                onClick={() => selectBranch(branch)}>
                {selectedBranch.id === branch.id && (
                  <Check
                    className='mr-3 h-5 w-5 text-indigo-600'
                    aria-hidden='true'
                  />
                )}
                <span
                  className={
                    selectedBranch.id === branch.id ? 'font-semibold' : ''
                  }>
                  {branch.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BranchSelector;
