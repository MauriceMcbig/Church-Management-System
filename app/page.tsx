'use client';
import React from 'react';
import {
  ChurchIcon,
  Users,
  Lock,
  Calendar,
  Heart,
  BookOpen,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const LandingPage = () => {
  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white'>
      <div className='absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 -z-10'></div>

      <nav className='p-6 flex justify-between items-center backdrop-blur-sm bg-white/30'>
        <div className='flex items-center space-x-3'>
          <button
            onClick={() => handleNavigation('top')}
            className='flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1'>
            <ChurchIcon className='h-8 w-8 text-blue-600' />
            <span className='text-2xl font-semibold text-gray-800'>
              {/* GraceFlow */}
              {/* TheChurch.io */}
              ChurchLife.io
            </span>
          </button>
        </div>
        <div className='flex items-center space-x-6'>
          <button
            onClick={() => handleNavigation('about')}
            className='text-sm text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2'>
            About
          </button>
          <button
            onClick={() => handleNavigation('features')}
            className='text-sm text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2'>
            Features
          </button>
          <button
            onClick={() => handleNavigation('contact')}
            className='text-sm text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2'>
            Contact
          </button>
        </div>
      </nav>

      <main className='container mx-auto px-4 py-16' id='top'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-16' id='about'>
            <h1 className='text-5xl font-bold text-gray-900 mb-6 leading-tight'>
              Empowering The Church Through{' '}
              <span className='text-blue-600'>Technology</span>
            </h1>
            <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
              Transform your church management with our intuitive, all-in-one
              platform designed to strengthen your community
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8 mb-20'>
            <Card className='p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm'>
              <CardContent className='flex flex-col items-center space-y-6 p-0'>
                <div className='p-4 bg-blue-50 rounded-full'>
                  <Users className='h-12 w-12 text-blue-600' />
                </div>
                <h2 className='text-2xl font-semibold text-gray-800'>
                  Member Portal
                </h2>
                <p className='text-gray-600 text-center'>
                  Connect with your church community, access resources, and stay
                  updated with events
                </p>
                <Button
                  onClick={() => (window.location.href = '/login')}
                  className='w-full bg-blue-600 hover:bg-blue-700 transition-colors py-6 text-lg'>
                  Member Login
                </Button>
              </CardContent>
            </Card>

            <Card className='p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm'>
              <CardContent className='flex flex-col items-center space-y-6 p-0'>
                <div className='p-4 bg-purple-50 rounded-full'>
                  <Lock className='h-12 w-12 text-purple-600' />
                </div>
                <h2 className='text-2xl font-semibold text-gray-800'>
                  Admin Portal
                </h2>
                <p className='text-gray-600 text-center'>
                  Streamline operations, manage resources, and lead your
                  congregation effectively
                </p>
                <Button
                  onClick={() => (window.location.href = '/admin/admin-login')}
                  variant='outline'
                  className='w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors py-6 text-lg'>
                  Admin Login
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className='grid md:grid-cols-3 gap-8 mb-20' id='features'>
            <div className='p-6 bg-white/60 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all'>
              <div className='bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4'>
                <Calendar className='h-6 w-6 text-blue-600' />
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>
                Event Planning
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Seamlessly organize services, small groups, and special events
                with our intuitive calendar system.
              </p>
            </div>
            <div className='p-6 bg-white/60 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all'>
              <div className='bg-purple-50 w-12 h-12 rounded-full flex items-center justify-center mb-4'>
                <Heart className='h-6 w-6 text-purple-600' />
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>
                Community Care
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Track member engagement, manage pastoral care, and nurture your
                congregation&apos;s growth.
              </p>
            </div>
            <div className='p-6 bg-white/60 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all'>
              <div className='bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4'>
                <BookOpen className='h-6 w-6 text-blue-600' />
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>
                Resource Hub
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Access and manage church resources, documentation, and
                educational materials in one place.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className='py-8 backdrop-blur-sm bg-white/30' id='contact'>
        <div className='container mx-auto px-4 text-center'>
          <div className='flex items-center justify-center space-x-2 mb-4'>
            <ChurchIcon className='h-6 w-6 text-blue-600' />
            <span className='text-xl font-semibold text-gray-800'>
              {/* GraceFlow */}
              {/* TheChurch.io */}
              TheChurchLife.io
            </span>
          </div>
          <p className='text-gray-600'>
            &copy; 2024 TheChurchLife.io Church Management System. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
