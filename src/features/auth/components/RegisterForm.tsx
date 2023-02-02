import { z } from 'zod';

import { Button } from '@/components/Elements/Button';
import { Form } from '@/components/Form/Form';
import { InputField } from '@/components/Form/InputField';

import { registerUser } from '@/api/authApi';
import { ERROR, IDLE, PENDING, SUCCESS } from '@/api/constants/apiStatus';
import { useApiStatus } from '@/api/hooks/useApiStatus';
import { AccountTypeSelect } from '@/features/auth/components/AccountTypeSelect';
import { withAsync } from '@/utils/withAsync';

const baseRegisterSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const registerSchema = z.discriminatedUnion('type', [
  z
    .object({
      type: z.literal('COMPANY'),
      name: z.string(),
    })
    .merge(baseRegisterSchema),
  z
    .object({
      type: z.literal('EMPLOYEE'),
      firstName: z.string(),
      secondName: z.string(),
    })
    .merge(baseRegisterSchema),
]);

const handleRegisterPayload = (registerData: FormValues) => {
  const { email, password, ...restData } = registerData;

  if (restData.type === 'EMPLOYEE') {
    const { firstName, secondName, type } = restData;
    return {
      email,
      password,
      type,
      firstName,
      secondName,
    };
  } else if (restData.type === 'COMPANY') {
    const { name, type } = restData;
    return {
      email,
      password,
      type,
      name,
    };
  } else {
    throw new Error('Wrong account type');
  }
};

type FormValues = typeof registerSchema['_type'];

const useRegisterUser = () => {
  const {
    status: userRegisterStatus,
    setStatus: setUserRegisterStatus,
    isIdle: isUserRegisterIdle,
    isPending: isUserRegisterPending,
    isSuccess: isUserRegisterSuccess,
    isError: isUserRegisterError,
  } = useApiStatus(IDLE);

  const handleRegisterUser = async (registerData: FormValues) => {
    setUserRegisterStatus(PENDING);
    const { response, error } = await withAsync(() =>
      registerUser(registerData)
    );

    if (error) {
      setUserRegisterStatus(ERROR);
    } else if (response) {
      setUserRegisterStatus(SUCCESS);
    }
  };

  return {
    handleRegisterUser,
    userRegisterStatus,
    isUserRegisterIdle,
    isUserRegisterPending,
    isUserRegisterError,
    isUserRegisterSuccess,
  };
};

export const RegisterForm = () => {
  const { handleRegisterUser, isUserRegisterPending } = useRegisterUser();
  const registerWithEmail = async (registerData: FormValues) => {
    const parsedData = await registerSchema.parseAsync(registerData);
    const payload = handleRegisterPayload(parsedData);
    handleRegisterUser(payload);
  };

  return (
    <Form<FormValues, typeof registerSchema>
      onSubmit={registerWithEmail}
      schema={registerSchema}
    >
      {({ register, formState, watch }) => {
        const accountType = watch('type');

        return (
          <>
            <AccountTypeSelect registration={register('type')} />
            {accountType === 'EMPLOYEE' ? (
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
