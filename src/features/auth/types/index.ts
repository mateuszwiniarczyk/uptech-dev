import { loginSchema, registerSchema } from '@/features/auth/schema';

export type RegisterFormValues = typeof registerSchema['_type'];
export type LoginFormValues = typeof loginSchema['_type'];
