import { supabase } from '@/lib/supabase';

import { Button } from '@/components/Elements/Button';
import { Form } from '@/components/Form/Form';
import { InputField } from '@/components/Form/InputField';

type FormValues = {
  email: string;
  password: string;
  fullName: string;
};

export const RegisterForm = () => {
  async function registerWithEmail(registerData: FormValues) {
    await supabase.auth.signUp({
      email: registerData.email,
      password: registerData.password,
    });
  }
  return (
    <Form<FormValues> onSubmit={registerWithEmail}>
      {({ register, formState }) => (
        <>
          <InputField
            placeholder='Full Name'
            type='text'
            registration={register('fullName')}
            error={formState.errors.email}
          />
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
          <InputField
            placeholder='Confirm password'
            type='password'
            registration={register('confirmPassword')}
            error={formState.errors.password}
          />

          <Button type='submit'>Continue</Button>
        </>
      )}
    </Form>
  );
};
