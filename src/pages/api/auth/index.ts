import type { NextApiRequest, NextApiResponse } from 'next';

import { create } from '@/services/user/create';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST': {
      const payload = req.body;
      create(payload);

      //   try {
      // const user = await createUser(payload);

      // res.status(200).json({ status: 'success', message: 'User created' });
      //   } catch (error) {
      res
        .status(422)
        .json({ status: 'not_created', message: 'User not created' });
      //   }

      break;
    }
    default:
      res.status(400);
  }
};

export default handler;
