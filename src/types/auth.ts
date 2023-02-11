import { loginSchema, registerSchema } from '@/schema/auth';

export type RegisterFormValues = typeof registerSchema['_type'];
export type LoginFormValues = typeof loginSchema['_type'];
