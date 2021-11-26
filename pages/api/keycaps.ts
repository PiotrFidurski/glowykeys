import { keycapsData as data } from 'data';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ data });
}
