import { clsxm } from '@/lib/clsxm';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ type = 'button', className = '', children }: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsxm(
        'flex w-full items-center justify-center rounded-lg bg-primary-200 p-5 text-sm font-bold text-white hover:opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70',
        className
      )}
    >
      {children}
    </button>
  );
};

export { Button };
