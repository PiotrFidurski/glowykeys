import dbConnect from '@utils/dbConnect';
import { ApiErrorResponse, ApiResponse } from '@utils/types';
import Product, { ProductDocument } from 'models/Product';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<ProductDocument> | ApiErrorResponse>
) {
  try {
    const { query: searchQuery } = req.query;

    await dbConnect();

    const results = await Product.aggregate([
      {
        $match: {
          $or: [
            { name: { $regex: new RegExp(searchQuery as string, 'i') } },
            { brand: { $regex: new RegExp(searchQuery as string, 'i') } },
          ],
        },
      },
      { $addFields: { id: '$_id' } },
      { $project: { description: 0 } },
    ]);

    return res.status(200).json({ data: results });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
