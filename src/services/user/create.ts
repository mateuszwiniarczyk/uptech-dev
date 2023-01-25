import bcrypt from 'bcryptjs';
import { z } from 'zod';

import { prisma } from '@/lib/prismadb';

import { hashPassword } from '@/utils/hashPassword';

const userSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const employeeSchema = z
  .object({
    firstName: z.string(),
    secondName: z.string(),
    type: z.literal('EMPLOYEE'),
  })
  .merge(userSchema);

const companySchema = z
  .object({
    name: z.string(),
    type: z.literal('COMPANY'),
  })
  .merge(userSchema);

type User = z.infer<typeof companySchema | typeof employeeSchema>;

const create = async (payload: User) => {
  try {
    const user =
      payload?.type === 'EMPLOYEE'
        ? await employeeSchema.parseAsync(payload)
        : await companySchema.parseAsync(payload);

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

    if (type === 'EMPLOYEE') {
      const { firstName, secondName } = user;

      await prisma.employee.create({
        data: {
          userId: id,
          firstName,
          secondName,
        },
      });
    } else if (type === 'COMPANY') {
      const { name } = user;

      await prisma.company.create({
        data: {
          userId: id,
          name,
        },
      });
    }

    return id;
  } catch (error) {
    // console.log('err');
  }
};

export { create };
