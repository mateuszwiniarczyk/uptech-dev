import { z } from 'zod';

import { Button } from '@/components/Elements/Button';
import { Form } from '@/components/Form/Form';
import { InputField } from '@/components/Form/InputField';

import { AccountTypeSelect } from '@/features/auth/components/AccountTypeSelect';

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

const registerWithEmail = async (registerData: FormValues) => {
  const parsedData = await registerSchema.parseAsync(registerData);
  const payload = handleRegisterPayload(parsedData);
  await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
};

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

export const RegisterForm = () => (
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

          <Button type='submit'>Continue</Button>
        </>
      );
    }}
  </Form>
);
