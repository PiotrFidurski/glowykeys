import dbConnect from '@utils/dbConnect';
import { ApiErrorResponse, ApiResponse, Product as ProductType } from '@utils/types';
import Product from 'models/Product';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<ProductType> | ApiErrorResponse>
) {
  try {
    await dbConnect();

    const docs: Array<ProductType> = await Product.aggregate([
      { $match: { type: { $eq: 'keyboards' } } },
      { $project: { description: 0 } },
      { $addFields: { id: '$_id' } },
    ]);

    return res.status(200).json({ data: docs });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
