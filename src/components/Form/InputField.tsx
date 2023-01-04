import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { clsxm } from '@/lib/clsxm';

interface InputFieldProps {
  type?: 'text' | 'email' | 'password';
  className?: string;
  placeholder?: string;
  registration: Partial<UseFormRegisterReturn>;
  error?: FieldError | undefined;
}

export const InputField = ({
  type = 'text',
  className,
  placeholder,
  registration,
  error,
}: InputFieldProps) => (
  <div>
    <input
      placeholder={placeholder}
      type={type}
      className={clsxm(
        'block w-full appearance-none rounded-lg border border-gray-700 bg-transparent p-5 text-xs font-bold placeholder-slate-100 shadow-sm focus:border-primary-200 focus:outline-none focus:ring-primary-200',
        className
      )}
      {...registration}
    />
    {error?.message && (
      <div
        role='alert'
        aria-label={error.message}
        className='text-sm font-semibold text-red'
      >
        {error.message}
      </div>
    )}
  </div>
);
