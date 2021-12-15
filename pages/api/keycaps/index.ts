import dbConnect from '@utils/dbConnect';
import { ApiErrorResponse, ApiResponse } from '@utils/types';
import Product, { ProductDocument } from 'models/Product';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<ProductDocument> | ApiErrorResponse>
) {
  try {
    await dbConnect();

    const docs = await Product.aggregate([
      { $match: { type: { $eq: 'keycaps' } } },
      { $project: { description: 0 } },
      { $addFields: { id: '$_id' } },
    ]);

    return res.status(200).json({ data: docs });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
