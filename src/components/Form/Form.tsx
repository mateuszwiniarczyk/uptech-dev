import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';
import { ZodType, ZodTypeDef } from 'zod';

type FormProps<TFormValues, Schema> = {
  onSubmit: SubmitHandler<TFormValues & FieldValues>;
  children: (
    methods: UseFormReturn<TFormValues & FieldValues>
  ) => React.ReactNode;
  options?: UseFormProps<TFormValues & FieldValues>;
  id?: string;
  className?: string;
  schema?: Schema;
};

const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<
    unknown,
    ZodTypeDef,
    unknown
  >
>({
  onSubmit,
  children,
  className,
  id,
  schema,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({
    resolver: schema && zodResolver(schema),
  });

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
