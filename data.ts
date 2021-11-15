import { v4 } from 'uuid';

export interface Product {
  type: 'Keyboard' | 'Keycap' | 'Switch';
  variant?: 'gaming' | 'casual';
  name: string;
  price: number;
  qty?: number;
  id: string;
  brand: string;
  description: Array<string>;
  image: {
    thumbnail: string;
    original: string;
  };
}

const keyboard: Product = {
  id: '',
  brand: 'roccat',
  type: 'Keyboard',
  variant: 'casual',
  price: 199.99,
  name: 'Vulcan Pro',
  image: {
    original:
      'https://cdn.shopify.com/s/files/1/0505/5912/3609/products/pdp_gallery_03_d0a9da7c-7102-477e-a401-f9cac8258a66_1200x@2x.png?v=1615353477',
    thumbnail:
      'https://cdn.shopify.com/s/files/1/0505/5912/3609/products/Vulcan-Pro-US_2x_4f123e32-2ae5-4a64-9b4b-dd8414da7441_550x534.png?v=1615353477',
  },
  description: ['Award Winning Design', '100 million keystroke life-cycle', '32-bit ARM Cortex-M0 based processor'],
};

export const data = new Array(20).fill(keyboard).map((item: Product) => ({ ...item, id: v4() }));

export const cartData = data.splice(0, 2).map((item: Product) => ({ ...item, qty: 1, id: v4() }));
