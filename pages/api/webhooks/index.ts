import { buffer } from 'micro';
import Cors from 'micro-cors';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIKE_SECRET_KEY, { apiVersion: '2020-08-27' });

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET;

export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const buf = await buffer(req);

    const signature = req.headers['stripe-signature'];

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(buf.toString(), signature, webhookSecret);

      return res.status(200).send(`webhook success: ${event.id}`);
    } catch (error) {
      return res.status(400).send(`webhook error: ${error.message}`);
    }
  } else {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
};

export default cors(webhookHandler);
