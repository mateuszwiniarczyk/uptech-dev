import { signIn } from 'next-auth/react';

import api from '@/api/api';

import { LoginFormValues, RegisterFormValues } from '@/types/auth';

const URLS = {
  registerUrl: '/auth',
};

export type RegisterData = {
  message: string;
  status: 'success' | 'error';
};

export type LoginData = ReturnType<typeof loginUser>;

export const registerUser = (registerData: RegisterFormValues) => {
  return api.post<RegisterData>(URLS.registerUrl, registerData);
};

export const loginUser = async (loginData: LoginFormValues) => {
  return signIn('credentials', {
    redirect: false,
    ...loginData,
  });
};
