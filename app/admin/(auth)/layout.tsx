// app/admin/(auth)/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin Login - Church Management',
  description: 'Secure admin access',
};

export default function AdminAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${inter.className} min-h-screen bg-gradient-to-br from-gray-900 to-purple-900`}>
      <div className='absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10' />
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10' />
      {children}
    </div>
  );
}
