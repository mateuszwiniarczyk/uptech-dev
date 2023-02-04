import { registerUser } from '@/api/authApi';
import { ERROR, IDLE, PENDING, SUCCESS } from '@/api/constants/apiStatus';
import { useApiStatus } from '@/api/hooks/useApiStatus';
import { RegisterFormValues } from '@/features/auth/types';
import { withAsync } from '@/utils/withAsync';

export const useRegisterUser = () => {
  const {
    status: userRegisterStatus,
    setStatus: setUserRegisterStatus,
    isIdle: isUserRegisterIdle,
    isPending: isUserRegisterPending,
    isSuccess: isUserRegisterSuccess,
    isError: isUserRegisterError,
  } = useApiStatus(IDLE);

  const registerWithEmail = async (registerData: RegisterFormValues) => {
    setUserRegisterStatus(PENDING);
    const { response, error } = await withAsync(() =>
      registerUser(registerData)
    );

    if (error) {
      setUserRegisterStatus(ERROR);
    } else if (response) {
      setUserRegisterStatus(SUCCESS);
    }
  };

  return {
    registerWithEmail,
    userRegisterStatus,
    isUserRegisterIdle,
    isUserRegisterPending,
    isUserRegisterError,
    isUserRegisterSuccess,
  };
};
