import api from '@/api/api';

const URLS = {
  registerUrl: '/user',
};

export type RegisterData = {
  message: string;
  status: 'success' | 'error';
};

export const registerUser = (body: unknown) => {
  return api.post<RegisterData>(URLS.registerUrl, body);
};
