import { Product } from '@utils/types';

export const getSubTotalPrice = (data: Array<Product>) =>
  data.reduce((prevValue, { price, qty }) => prevValue + price * qty, 0);
