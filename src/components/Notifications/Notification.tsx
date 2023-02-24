import { Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { useNotification } from '@/hooks/useNotification';

import CheckIcon from '~/svg/check.svg';
import CloseIcon from '~/svg/close.svg';
import ErrorIcon from '~/svg/error.svg';
import InfoIcon from '~/svg/info.svg';
import WarningIcon from '~/svg/warning.svg';

const icons = {
  info: <InfoIcon className='h-6 w-6' aria-hidden='true' />,
  success: <CheckIcon className='h-6 w-6' aria-hidden='true' />,
  warning: <WarningIcon className='h-6 w-6' aria-hidden='true' />,
  error: <ErrorIcon className='h-6 w-6' aria-hidden='true' />,
};

export type Notification = {
  id: string;
  type: keyof typeof icons;
  title: string;
  message?: string;
};

type NotificationProps = {
  notification: Notification;
};

export const Notification = ({
  notification: { id, title, type, message },
}: NotificationProps) => {
  const { removeNotification } = useNotification();
  return (
    <div className='pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-slate-300'>
      <Transition
        show={true}
        as={Fragment}
        enter='transform ease-out duration-300 transition'
        enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
        enterTo='translate-y-0 opacity-100 sm:translate-x-0'
        leave='transition ease-in duration-100'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='p-4' role='alert'>
          <div className='flex items-start'>
            <div className='flex-shrink-0'>{icons[type]}</div>
            <div className='ml-3 w-0 flex-1 pt-0.5'>
              <p className='text-sm font-medium'>{title}</p>
              <p className='mt-1 text-sm'>{message}</p>
            </div>
            <div className='ml-4 flex flex-shrink-0'>
              <button
                className='inline-flex'
                onClick={() => removeNotification(id)}
              >
                <span className='sr-only'></span>
                <CloseIcon className='h-6 w-6 fill-black hover:fill-slate-100 dark:fill-slate-100 dark:hover:fill-white' />
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};
