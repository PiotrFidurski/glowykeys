import { transfromItemsToStrpe } from '@utils/tranformItemsToStripe';
import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2020-08-27' });

const redirectUrl = process.env.BASE_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { items } = req.body;

    const transformedItems = transfromItemsToStrpe(items);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: transformedItems,
      mode: 'payment',
      success_url: `${redirectUrl}?status=success`,
      cancel_url: `${redirectUrl}?status=cancel`,
    });

    return res.json({ sessionId: session.id });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}
