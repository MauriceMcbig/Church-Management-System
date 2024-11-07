// app/(auth)/admin/login/page.tsx
import { User, Lock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { AuthContainer } from '@/components/auth/auth-container';
import { AuthCard } from '@/components/auth/auth-card';
import { AuthInput } from '@/components/auth/auth-input';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Admin Login - GraceFlow',
  description: 'Secure admin access to GraceFlow',
};

export default function AdminLoginPage() {
  return (
    <AuthContainer variant='admin'>
      <AuthCard>
        <div className='flex flex-col space-y-2 text-center'>
          <ShieldCheck className='w-12 h-12 text-purple-400 mx-auto' />
          <h1 className='text-2xl font-semibold tracking-tight text-white'>
            Admin Portal
          </h1>
          <p className='text-sm text-purple-200'>
            Secure access for administrators
          </p>
        </div>

        <div className='grid gap-6'>
          <form>
            <div className='grid gap-4'>
              <AuthInput
                id='username'
                label='Username'
                placeholder='admin username'
                icon={User}
                variant='admin'
              />

              <AuthInput
                id='password'
                label='Password'
                type='password'
                placeholder='••••••••'
                icon={Lock}
                variant='admin'
              />

              <Button className='w-full bg-purple-600 hover:bg-purple-700'>
                Secure Login
              </Button>
            </div>
          </form>

          <div className='flex flex-col gap-2 text-center'>
            <Link
              href='/login'
              className='text-sm text-purple-200 hover:text-white'>
              ← Back to User Login
            </Link>
            <Link
              href='/admin/help'
              className='text-sm text-purple-200 hover:text-white'>
              Need help?
            </Link>
          </div>
        </div>
      </AuthCard>
    </AuthContainer>
  );
}
