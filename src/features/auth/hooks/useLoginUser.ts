import { loginUser } from '@/api/authApi';
import { ERROR, IDLE, PENDING, SUCCESS } from '@/api/constants/apiStatus';
import { useApiStatus } from '@/api/hooks/useApiStatus';
import { LoginFormValues } from '@/features/auth/types';
import { withAsync } from '@/utils/withAsync';

export const useLoginUser = () => {
  const {
    status: userLoginStatus,
    setStatus: setUserLoginStatus,
    isIdle: isUserLoginIdle,
    isPending: isUserLoginPending,
    isSuccess: isUserLoginSuccess,
    isError: isUserLoginError,
  } = useApiStatus(IDLE);

  const loginWithEmail = async (LoginData: LoginFormValues) => {
    setUserLoginStatus(PENDING);
    const { response, error } = await withAsync(() => loginUser(LoginData));

    if (error) {
      setUserLoginStatus(ERROR);
    } else if (response) {
      setUserLoginStatus(SUCCESS);
    }
  };

  return {
    loginWithEmail,
    userLoginStatus,
    isUserLoginIdle,
    isUserLoginPending,
    isUserLoginError,
    isUserLoginSuccess,
  };
};
