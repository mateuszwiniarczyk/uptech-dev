import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { USER_TYPE } from '@/constants/user';

interface AccountTypeSelectProps {
  registration: Partial<UseFormRegisterReturn>;
}

const AccountTypeSelect = ({ registration }: AccountTypeSelectProps) => (
  <div className='mb-6 grid grid-cols-2 gap-8'>
    <div className='relative'>
      <input
        className='group peer hidden'
        type='radio'
        value={USER_TYPE.COMPANY}
        id='company'
        {...registration}
        defaultChecked
      />

      <label
        className='block cursor-pointer rounded-lg border border-gray-500 p-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 peer-checked:border-primary-200 peer-checked:ring-1 peer-checked:ring-primary-200 dark:border-slate-100 dark:hover:bg-slate-300'
        htmlFor='company'
      >
        <span className='dark:text-white'>Company</span>

        <span className='mt-1 block text-xs text-slate-100'>Description</span>
      </label>

      <svg
        className='absolute top-4 right-4 h-5 w-5 text-primary-200 opacity-0 peer-checked:opacity-100'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
          clipRule='evenodd'
        />
      </svg>
    </div>

    <div className='relative'>
      <input
        className='group peer hidden'
        type='radio'
        value={USER_TYPE.EMPLOYEE}
        id='employee'
        {...registration}
      />

      <label
        className='block cursor-pointer rounded-lg border border-gray-500 p-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 peer-checked:border-primary-200 peer-checked:ring-1 peer-checked:ring-primary-200 dark:border-slate-100 dark:hover:bg-slate-300'
        htmlFor='employee'
      >
        <span className='dark:text-white'>Employee</span>

        <span className='mt-1 block text-xs text-slate-100'>Description</span>
      </label>

      <svg
        className='absolute top-4 right-4 h-5 w-5 text-primary-200 opacity-0 peer-checked:opacity-100'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
          clipRule='evenodd'
        />
      </svg>
    </div>
  </div>
);

export { AccountTypeSelect };
