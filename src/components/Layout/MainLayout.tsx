import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { clsxm } from '@/lib/clsxm';

import { Logo } from '@/components/Elements/Logo';

import { ROUTES } from '@/constant/routes';

import CloseMenuIcon from '~/svg/close.svg';
import DarkModeIcon from '~/svg/darkMode.svg';
import LightModeIcon from '~/svg/lightMode.svg';
import MenuIcon from '~/svg/menu.svg';
import NotificationIcon from '~/svg/notification.svg';

const routes = [
  {
    label: 'Offers',
    path: ROUTES.HOME,
  },
  {
    label: 'Dashboard',
    path: ROUTES.HOME,
  },
  {
    label: 'My profile',
    path: ROUTES.HOME,
  },
];

const Navigation = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  return (
    <>
      <button
        type='button'
        className='relative z-20 text-white lg:hidden'
        onClick={() => setIsNavVisible((prevVal) => !prevVal)}
      >
        {isNavVisible ? (
          <CloseMenuIcon className='h-6 w-6 dark:fill-white' />
        ) : (
          <MenuIcon className='h-6 w-6 dark:fill-white' />
        )}
      </button>
      <ul
        hidden={isNavVisible}
        className={clsxm(
          isNavVisible ? 'translate-x-0' : 'translate-x-full',
          'fixed inset-0 z-10 flex flex-col items-center justify-center gap-6 bg-white font-bold transition-transform dark:bg-slate-200 dark:text-white lg:static lg:ml-32 lg:translate-x-0 lg:flex-row lg:items-center lg:bg-transparent lg:transition-none'
        )}
      >
        {routes.map(({ label, path }) => (
          <li key={label}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button type='button' onClick={toggleDarkMode}>
      {theme === 'light' ? (
        <DarkModeIcon className='h-7 w-7 fill-black' />
      ) : (
        <LightModeIcon className='h-7 w-7 fill-slate-100' />
      )}
    </button>
  );
};

const ActionBar = () => (
  <div className='ml-auto hidden lg:flex lg:items-center lg:gap-5'>
    <DarkModeButton />
    <NotificationIcon className='h-7 w-7 fill-black dark:fill-slate-100' />
    <Image
      src='/img/avatar.jpg'
      width='36'
      height='36'
      className='cursor-pointer rounded-full'
      alt='User avatar'
    />
  </div>
);

interface MainLayoutProps {
  readonly children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='relative flex min-h-screen flex-col overflow-hidden bg-white pb-20 dark:bg-slate-200'>
      <nav className='border-b border-gray-700 dark:border-slate-100'>
        <div className='container relative mx-auto flex items-center justify-between py-5 px-4 lg:justify-start'>
          <Logo />
          <Navigation />
          <ActionBar />
        </div>
      </nav>
      <main className='container mx-auto p-4 dark:text-white'>{children}</main>
    </div>
  );
};

export { MainLayout };
