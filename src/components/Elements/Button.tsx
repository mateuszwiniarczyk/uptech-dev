import { clsxm } from '@/lib/clsxm';

import { Spinner } from '@/components/Elements/Spinner';

type ButtonProps = {
  isLoading: boolean;
  size?: keyof typeof SIZES;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const SIZES = {
  sm: 'py-3 px-4 text-xs',
  md: 'py-4 px-6 text-sm',
  lg: 'py-5 px-8 text-md',
};

const Button = ({
  type = 'button',
  className = '',
  isLoading,
  children,
  size = 'md',
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsxm(
        'flex w-full items-center justify-center rounded-lg bg-primary-200 font-bold text-white hover:opacity-90 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60',
        SIZES[size],
        className
      )}
      disabled={isLoading}
    >
      {isLoading && (
        <Spinner size='sm' className='text-current mr-2' show={isLoading} />
      )}
      {children}
    </button>
  );
};

export { Button };
