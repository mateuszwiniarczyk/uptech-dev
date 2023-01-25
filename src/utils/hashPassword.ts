import bcrypt from 'bcryptjs';

export const hashPassword = (password: string, passwordSalt: string) => {
  return bcrypt.hashSync(password, passwordSalt);
};
