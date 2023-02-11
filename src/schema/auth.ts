import { z } from 'zod';

import { USER_TYPE } from '@/constant/user';

const baseRegisterSchema = z.object({
  email: z.string().email(),
  password: z.string(),
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

export const loginSchema = z.object({
  email: z.string().min(1, 'Required'),
  password: z.string().min(2, 'Required'),
});
