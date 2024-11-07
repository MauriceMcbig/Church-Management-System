// app/(users)/(auth)/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Login - Church Management',
  description: 'Login to your church account',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${inter.className} min-h-screen bg-gradient-to-br from-blue-50 to-white`}>
      <div className='absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20' />
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20' />
      <div className='flex flex-col items-center justify-center min-h-screen p-4'>
        {children}
      </div>
    </div>
  );
}
