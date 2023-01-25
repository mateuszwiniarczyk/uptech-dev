import type { NextApiRequest, NextApiResponse } from 'next';

import { create } from '@/services/user/create';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST': {
      const payload = JSON.parse(req.body);
      create(payload);

      //   try {
      // const user = await createUser(payload);

      res.status(200).json({ status: 'created' });
      //   } catch (error) {
      // res.status(422).json({ status: 'not_created', error: error.message });
      //   }

      break;
    }
    default:
      res.status(400);
  }
};

export default handler;
