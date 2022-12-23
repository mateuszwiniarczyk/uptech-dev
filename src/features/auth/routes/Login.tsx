import { Button } from '@/components/Elements/Button';
import { Form } from '@/components/Form/Form';
import { InputField } from '@/components/Form/InputField';

import { ContentWrapper } from '@/features/auth/components/ContentWrapper';

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const onSubmit = (data: FormValues) => data;
  return (
    <ContentWrapper
      header='Login to your account'
      description='Enter your details to proceed further'
    >
      <Form<FormValues> onSubmit={onSubmit}>
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

            <Button>Login</Button>
          </>
        )}
      </Form>
    </ContentWrapper>
  );
};

export { Login };
