// components/auth/auth-container.tsx
import { cn } from '@/lib/utils';

interface AuthContainerProps {
  children: React.ReactNode;
  variant?: 'default' | 'admin';
  className?: string;
}

export function AuthContainer({
  children,
  variant = 'default',
  className,
}: AuthContainerProps) {
  return (
    <div
      className={cn(
        'min-h-screen',
        variant === 'admin'
          ? 'bg-gradient-to-br from-gray-900 to-purple-900'
          : 'bg-gradient-to-br from-blue-50 to-white',
        className,
      )}>
      <div
        className={cn(
          'absolute top-0 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-10',
          variant === 'admin' ? 'bg-purple-500' : 'bg-blue-100',
        )}
      />
      <div
        className={cn(
          'absolute bottom-0 left-0 w-96 h-96 rounded-full filter blur-3xl opacity-10',
          variant === 'admin' ? 'bg-purple-500' : 'bg-blue-100',
        )}
      />
      <div className='container relative mx-auto flex min-h-screen flex-col items-center justify-center'>
        {children}
      </div>
    </div>
  );
}
