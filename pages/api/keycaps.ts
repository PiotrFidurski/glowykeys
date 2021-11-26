import { withPlaceholders } from '@utils/withPlaceholders';
import { keycapsData } from 'data';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await Promise.all(withPlaceholders(keycapsData, 40));

  res.status(200).json({ data });
}
