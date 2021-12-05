import dbConnect from '@utils/dbConnect';
import { ApiResponse } from '@utils/types';
import Product, { ProductDocument } from 'models/Product';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse<ProductDocument>>) {
  await dbConnect();

  const docs: Array<ProductDocument> = await Product.aggregate([{ $match: { type: { $eq: 'keyboard' } } }]);

  return res.status(200).json({ data: docs });
}
