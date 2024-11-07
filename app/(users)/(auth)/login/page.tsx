// app/(users)/(auth)/login/page.tsx
import React from 'react';
import { User, Lock } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface InputWithIconProps {
  icon: React.ReactNode;
  label: string;
  id: string;
  type: string;
  placeholder: string;
}

const InputWithIcon = ({
  icon,
  label,
  id,
  type,
  placeholder,
}: InputWithIconProps) => (
  <div>
    <label
      className='block text-sm font-medium text-gray-700 mb-1'
      htmlFor={id}>
      {label}
    </label>
    <div className='relative'>
      <Input id={id} type={type} placeholder={placeholder} className='pl-10' />
      <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
        {icon}
      </div>
    </div>
  </div>
);

const UserLoginPage = () => {
  return (
    <div className='w-full max-w-md relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl'>
      {/* Header */}
      <div className='text-center mb-8'>
        <h1 className='text-2xl font-bold text-gray-900'>Welcome Back</h1>
        <p className='text-gray-500 mt-2'>Please sign in to continue</p>
      </div>

      {/* Login Form */}
      <form className='space-y-6'>
        <div className='space-y-4'>
          <InputWithIcon
            icon={<User className='w-5 h-5' />}
            label='Email'
            id='email'
            type='email'
            placeholder='your@email.com'
          />
          <InputWithIcon
            icon={<Lock className='w-5 h-5' />}
            label='Password'
            id='password'
            type='password'
            placeholder='••••••••'
          />
        </div>

        {/* Additional Options */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='remember'
              className='h-4 w-4 rounded border-gray-300 text-blue-600'
            />
            <label htmlFor='remember' className='ml-2 text-sm text-gray-600'>
              Remember me
            </label>
          </div>
          <Link
            href='/forgot-password'
            className='text-sm text-blue-600 hover:text-blue-700'>
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <Button className='w-full bg-blue-600 hover:bg-blue-700 text-lg py-6'>
          Sign In
        </Button>

        {/* Admin Link */}
        <div className='text-center mt-6'>
          <Link
            href='/admin/admin-login'
            className='text-sm text-gray-600 hover:text-blue-600'>
            Admin Login →
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserLoginPage;
