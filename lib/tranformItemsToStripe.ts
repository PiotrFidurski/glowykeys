import { Product } from './types';

function transfromItemsToStrpe(data: Array<Product>) {
  return data.map((product) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: product.name,
      },
      unit_amount: product.price,
    },
    quantity: product.qty,
  }));
}

export { transfromItemsToStrpe };
