import { ContentWrapper } from '@/features/auth/components/ContentWrapper';
import { RegisterForm } from '@/features/auth/components/RegisterForm';

export const Register = () => {
  return (
    <ContentWrapper
      header='Tell us about yourself'
      description='Enter your details to proceed further'
    >
      <RegisterForm />
    </ContentWrapper>
  );
};
