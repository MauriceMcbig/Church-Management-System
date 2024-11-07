// components/auth/auth-card.tsx
import { cn } from '@/lib/utils';

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AuthCard({ children, className }: AuthCardProps) {
  return (
    <div
      className={cn(
        'mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]',
        className,
      )}>
      {children}
    </div>
  );
}
