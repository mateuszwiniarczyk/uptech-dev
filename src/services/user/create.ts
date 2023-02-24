import bcrypt from 'bcryptjs';

import { prisma } from '@/lib/prismadb';

import { USER_TYPE } from '@/constants/user';
import { registerSchema } from '@/schema/auth';
import { hashPassword } from '@/utils/hashPassword';

import { RegisterFormValues } from '@/types/auth';

const create = async (payload: RegisterFormValues) => {
  const user = await registerSchema.parseAsync(payload);

  const { email, password, type } = user;

  const passwordSalt = bcrypt.genSaltSync(10);
  const passwordHash = hashPassword(password, passwordSalt);

  const { id } = await prisma.user.create({
    data: {
      email,
      type,
      passwordHash,
      passwordSalt,
    },
  });

  if (type === USER_TYPE.EMPLOYEE) {
    const { firstName, secondName } = user;

    await prisma.employee.create({
      data: {
        userId: id,
        firstName,
        secondName,
      },
    });
  } else if (type === USER_TYPE.COMPANY) {
    const { name } = user;

    await prisma.company.create({
      data: {
        userId: id,
        name,
      },
    });
  }

  return id;
};

export { create };
