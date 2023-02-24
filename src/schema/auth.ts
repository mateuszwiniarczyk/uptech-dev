import { z } from 'zod';

import { USER_TYPE } from '@/constants/user';

const baseRegisterSchema = z.object({
  email: z.string().email().min(5, 'Required'),
  password: z.string().min(6, 'Required'),
});

export const registerSchema = z.discriminatedUnion('type', [
  z
    .object({
      type: z.literal(USER_TYPE.COMPANY),
      name: z.string(),
    })
    .merge(baseRegisterSchema),
  z
    .object({
      type: z.literal(USER_TYPE.EMPLOYEE),
      firstName: z.string(),
      secondName: z.string(),
    })
    .merge(baseRegisterSchema),
]);

export const loginSchema = z.object({}).merge(baseRegisterSchema);
