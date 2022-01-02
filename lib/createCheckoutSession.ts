import getStripe from './getStripe';
import { Product } from './types';

interface CreateCheckout {
  items: Array<Product>;
  callback: () => void;
}

async function createCheckoutSession({ items, callback }: CreateCheckout) {
  const stripe = await getStripe();

  const checkoutSession = await fetch(`${process.env.BASE_URL}/api/checkout_sessions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items }),
  });

  const { sessionId } = await checkoutSession.json();

  if (checkoutSession.ok) callback();

  const result = await stripe.redirectToCheckout({
    sessionId,
  });

  if (result.error) {
    return result.error.message;
  }

  return null;
}

export { createCheckoutSession };
