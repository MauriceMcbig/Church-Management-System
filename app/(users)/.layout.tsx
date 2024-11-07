// app/layout.tsx
import { Inter } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import { Toaster } from 'sonner';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Church Management System',
  description: 'Multi-branch church management solution',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex h-screen bg-gray-100'>
          <Sidebar />

          <div className='flex-1 flex flex-col overflow-hidden'>
            <Header />

            <div className='bg-white shadow'>
              <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
                {/* BranchSelector component would go here */}
              </div>
            </div>
            <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-100'>
              <div className='container mx-auto px-6 py-8'>{children}</div>
            </main>
            <Footer />
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
