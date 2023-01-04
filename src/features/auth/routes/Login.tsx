import { ContentWrapper } from '@/features/auth/components/ContentWrapper';
import { LoginForm } from '@/features/auth/components/LoginForm';

const Login = () => (
  <ContentWrapper
    header='Login to your account'
    description='Enter your details to proceed further'
  >
    <LoginForm />
  </ContentWrapper>
);

export { Login };
