import { Button } from '@/components/Elements/Button';
import { Form } from '@/components/Form/Form';
import { InputField } from '@/components/Form/InputField';

import { USER_TYPE } from '@/constants/user';
import { useRegisterUserMutation } from '@/features/auth/authSlice';
import { AccountTypeSelect } from '@/features/auth/components/AccountTypeSelect';
import { registerSchema } from '@/schema/auth';

import { RegisterFormValues } from '@/types/auth';

export const RegisterForm = () => {
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  return (
    <Form<RegisterFormValues, typeof registerSchema>
      onSubmit={registerUser}
      schema={registerSchema}
    >
      {({ register, formState, watch }) => {
        const accountType = watch('type');

        return (
          <>
            <AccountTypeSelect registration={register('type')} />
            {accountType === USER_TYPE.EMPLOYEE ? (
              <>
                <InputField
                  placeholder='First Name'
                  type='text'
                  registration={register('firstName')}
                  error={formState.errors.firstName}
                />
                <InputField
                  placeholder='Second Name'
                  type='text'
                  registration={register('secondName')}
                  error={formState.errors.secondName}
                />
              </>
            ) : (
              <InputField
                placeholder='Name'
                type='text'
                registration={register('name')}
                error={formState.errors.name}
              />
            )}
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

            <Button type='submit' disabled={isLoading} isLoading={isLoading}>
              Create an account
            </Button>
          </>
        );
      }}
    </Form>
  );
};
