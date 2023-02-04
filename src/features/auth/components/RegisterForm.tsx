import { Button } from '@/components/Elements/Button';
import { Form } from '@/components/Form/Form';
import { InputField } from '@/components/Form/InputField';

import { AccountTypeSelect } from '@/features/auth/components/AccountTypeSelect';
import { USER_TYPE } from '@/features/auth/constants';
import { useRegisterUser } from '@/features/auth/hooks/useRegisterUser';
import { registerSchema } from '@/features/auth/schema';
import { RegisterFormValues } from '@/features/auth/types';

export const RegisterForm = () => {
  const { registerWithEmail, isUserRegisterPending } = useRegisterUser();

  return (
    <Form<RegisterFormValues, typeof registerSchema>
      onSubmit={registerWithEmail}
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

            <Button type='submit' disabled={isUserRegisterPending}>
              Continue
            </Button>
          </>
        );
      }}
    </Form>
  );
};
