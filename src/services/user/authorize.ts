import { prisma } from '@/lib/prismadb';

import { loginSchema } from '@/schema/auth';
import { hashPassword } from '@/utils/hashPassword';

import { LoginFormValues } from '@/types/auth';

const authorize = async (payload: LoginFormValues) => {
  const { email, password } = loginSchema.parse(payload);

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) return null;

  const passwordHash = hashPassword(password, user.passwordSalt);

  if (passwordHash !== user.passwordHash) {
    return null;
  }

  return user;
};

export { authorize };
