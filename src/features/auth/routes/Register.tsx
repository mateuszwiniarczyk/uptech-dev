import { NextPage } from 'next';

import { ContentWrapper } from '@/features/auth/components/ContentWrapper';
import { RegisterForm } from '@/features/auth/components/RegisterForm';

export const Register: NextPage = () => {
  return (
    <ContentWrapper
      header='Tell us about yourself'
      description='Enter your details to proceed further'
    >
      <RegisterForm />
    </ContentWrapper>
  );
};
