import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { SignInResponse } from 'next-auth/react';

import { loginUser, RegisterData, registerUser } from '@/api/authApi';

import { LoginFormValues, RegisterFormValues } from '@/types/auth';

export const authApiSlice = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    registerUser: builder.mutation<RegisterData, RegisterFormValues>({
      queryFn: async (user) => {
        try {
          const { data } = await registerUser(user);
          return {
            data,
          };
        } catch (error) {
          return {
            error,
          };
        }
      },
    }),
    loginUser: builder.mutation<SignInResponse, LoginFormValues>({
      queryFn: async (user) => {
        try {
          const response = await loginUser(user);
          return {
            data: response,
          };
        } catch (error) {
          return {
            error,
          };
        }
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApiSlice;
