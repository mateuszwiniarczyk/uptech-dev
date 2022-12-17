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
              registration={register('email', {
                maxLength: 3,
                required: true,
              })}
              error={formState.errors.email}
            />
            <InputField
              placeholder='Password'
              type='password'
              registration={register('password', {
                maxLength: 3,
                required: true,
              })}
              error={formState.errors.password}
            />

            <button type='submit'>Login</button>
          </>
        )}
      </Form>
    </ContentWrapper>
  );
};

export { Login };
