// app/admin/layout.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'sonner';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please log in to access the admin area.');
      router.push('/admin/admin-login');
    }
  }, [router]);

  return (
    <div className='admin-layout'>
      {children}
      <Toaster />
    </div>
  );
}
