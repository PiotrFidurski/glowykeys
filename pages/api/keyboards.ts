import { withPlaceholders } from '@utils/withPlaceholders';
import { data as keyboardsData } from 'data';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await Promise.all(withPlaceholders(keyboardsData, 60));

  res.status(200).json({ data });
}
