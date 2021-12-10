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

    const {
      query: { name },
    } = req;

    const docs: Array<ProductDocument> = await Product.aggregate([
      { $match: { name: { $regex: new RegExp((name as string).replace(/-/g, ' '), 'i') } } },
      { $addFields: { id: '$_id' } },
    ]);

    return res.status(200).json({ data: docs[0] });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
