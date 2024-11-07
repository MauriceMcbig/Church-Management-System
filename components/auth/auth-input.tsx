// components/auth/auth-input.tsx
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface AuthInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  icon?: LucideIcon;
  variant?: 'default' | 'admin';
}

export function AuthInput({
  id,
  label,
  type = 'text',
  placeholder,
  icon: Icon,
  variant = 'default',
}: AuthInputProps) {
  return (
    <div className='grid gap-2'>
      <label
        className={cn(
          'text-sm font-medium',
          variant === 'admin' ? 'text-purple-100' : 'text-gray-700',
        )}
        htmlFor={id}>
        {label}
      </label>
      <div className='relative'>
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className={cn(
            'pl-10',
            variant === 'admin' &&
              'bg-white/20 border-purple-300/20 text-white placeholder:text-purple-200',
          )}
        />
        {Icon && (
          <Icon
            className={cn(
              'w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2',
              variant === 'admin' ? 'text-purple-300' : 'text-gray-400',
            )}
          />
        )}
      </div>
    </div>
  );
}
