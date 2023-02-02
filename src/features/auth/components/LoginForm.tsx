import { signIn } from 'next-auth/react';
import { z } from 'zod';

import { Button } from '@/components/Elements/Button';
import { Form } from '@/components/Form/Form';
import { InputField } from '@/components/Form/InputField';

const schema = z.object({
  email: z.string().min(1, 'Required'),
  password: z.string().min(2, 'Required'),
});

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const signInWithEmail = async (loginData: FormValues) => {
    const res = await signIn('credentials', {
      redirect: false,
      ...loginData,
    });
    return res;
  };

  return (
    <Form<FormValues, typeof schema> onSubmit={signInWithEmail} schema={schema}>
      {({ register, formState }) => (
        <>
          <InputField
            placeholder='Email'
            type='email'
            registration={register('email')}
            error={formState.errors.email}
          />
          <InputField
            placeholder='Password'
            type='password'
            registration={register('password')}
            error={formState.errors.password}
          />

          <Button type='submit'>Login</Button>
        </>
      )}
    </Form>
  );
};
