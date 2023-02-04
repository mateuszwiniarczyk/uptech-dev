import { Button } from '@/components/Elements/Button';
import { Form } from '@/components/Form/Form';
import { InputField } from '@/components/Form/InputField';

import { useLoginUser } from '@/features/auth/hooks/useLoginUser';
import { loginSchema } from '@/features/auth/schema';
import { LoginFormValues } from '@/features/auth/types';

export const LoginForm = () => {
  const { loginWithEmail, isUserLoginPending } = useLoginUser();
  return (
    <Form<LoginFormValues, typeof loginSchema>
      onSubmit={loginWithEmail}
      schema={loginSchema}
    >
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

          <Button type='submit' disabled={isUserLoginPending}>
            Login
          </Button>
        </>
      )}
    </Form>
  );
};
