import { Button } from '@/components/Elements/Button';
import { Form } from '@/components/Form/Form';
import { InputField } from '@/components/Form/InputField';

import { useLoginUserMutation } from '@/store/authSlice';

import { loginSchema } from '@/schema/auth';

import { LoginFormValues } from '@/types/auth';

export const LoginForm = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  return (
    <Form<LoginFormValues, typeof loginSchema>
      onSubmit={loginUser}
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

          <Button type='submit' disabled={isLoading}>
            Login
          </Button>
        </>
      )}
    </Form>
  );
};
