interface ContentWrapperProps {
  children: React.ReactNode;
  header: string;
  description: string;
}

const ContentWrapper = ({
  children,
  header,
  description,
}: ContentWrapperProps) => (
  <div className='flex flex-1 flex-col justify-center pb-8 pt-24'>
    <div className='mb-20 text-center xl:mb-10'>
      <h2 className='mb-2.5 dark:text-white'>{header}</h2>
      <p className='text-slate-100'>{description}</p>
    </div>
    <div className='mx-auto w-full max-w-md'>{children}</div>
  </div>
);

export { ContentWrapper };
