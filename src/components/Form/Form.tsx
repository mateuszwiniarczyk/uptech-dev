import clsx from 'clsx';
import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';

type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues & FieldValues>;
  children: (
    methods: UseFormReturn<TFormValues & FieldValues>
  ) => React.ReactNode;
  options?: UseFormProps<TFormValues & FieldValues>;
  id?: string;
  className?: string;
};

const Form = <TFormValues extends Record<string, unknown>>({
  onSubmit,
  children,
  className,
  id,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>();
  return (
    <form
      className={clsx('space-y-6', className)}
      onSubmit={methods.handleSubmit(onSubmit)}
      id={id}
    >
      {children(methods)}
    </form>
  );
};

export { Form };
