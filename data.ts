import { Product, Product as ProductType } from '@utils/types';
import { v4 } from 'uuid';

const images = [
  'https://cdn.shopify.com/s/files/1/0508/6747/0494/products/Topshot_Vulcan-TKL-Pro_Doc-Edition_550x534.png?v=1631883325',
  'https://cdn.shopify.com/s/files/1/0508/6747/0494/products/Horde-Aimo_BLK-US_2x_aba1e7dd-9994-41f5-b597-73ab79dbdc6c_550x534.png?v=1614695994',
  'https://cdn.shopify.com/s/files/1/0508/6747/0494/products/Topshot_Vulcan-TKL-Pro_Doc-Edition_550x534.png?v=1631883325',
  'https://cdn.shopify.com/s/files/1/0508/6747/0494/products/Vulcan-120-US-2x-1_550x534.png?v=1605922046',
  'https://cdn.shopify.com/s/files/1/0508/6747/0494/products/Vulcan-122-DE_2x_2f442a3f-a16a-47cb-8f48-3d6a4ac0e48c_550x534.png?v=1615288066',
  'https://cdn.shopify.com/s/files/1/0508/6747/0494/products/Pyro-US_2x_c9595efa-fdb3-41ef-82cc-ddb4d4b6d754_550x534.png?v=1619698268',
  'https://cdn.shopify.com/s/files/1/0508/6747/0494/products/Magma-US_2x_18e58b2d-0280-4a6b-b0c0-0f4e346fcde0_550x534.png?v=1619698239',
  'https://cdn.shopify.com/s/files/1/0505/5912/3609/products/Vulcan-Pro-US_2x_4f123e32-2ae5-4a64-9b4b-dd8414da7441_550x534.png?v=1615353477',
];

const variants = ['casual', 'gaming'];

const prices = [199.99, 299.99, 54.99, 56.66, 399.99, 599.99, 99.99];

const connectivity = ['wired', 'wireless'];

function getRandomElement(array: Array<string> | Array<number>) {
  return array[Math.floor(Math.random() * array.length - 1) + 1];
}

const keyboard: ProductType = {
  id: '',
  brand: 'roccat',
  connectivity: 'wireless',
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

export const data = new Array(20).fill(keyboard).map((item: ProductType) => ({
  ...item,
  id: v4(),
  qty: 1,
  variant: getRandomElement(variants) as string,
  price: getRandomElement(prices) as number,
  connectivity: getRandomElement(connectivity) as string,
  image: {
    ...item.image,
    thumbnail: getRandomElement(images) as string,
  },
}));

export const randomCartData = data.splice(0, 3).map((item: ProductType) => ({ ...item, qty: 1, id: v4() }));

export const cartData: Array<Product> = [
  {
    id: v4(),
    qty: 1,
    brand: 'roccat',
    connectivity: 'wireless',
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
  },
  // {
  //   id: v4(),
  //   qty: 1,
  //   brand: 'roccat',
  //   connectivity: 'wireless',
  //   type: 'Keyboard',
  //   variant: 'gaming',
  //   price: 59.99,
  //   name: 'Magma',
  //   image: {
  //     original:
  //       'https://cdn.shopify.com/s/files/1/0505/5912/3609/products/pdp_gallery_03_d0a9da7c-7102-477e-a401-f9cac8258a66_1200x@2x.png?v=1615353477',
  //     thumbnail:
  //       'https://cdn.shopify.com/s/files/1/0508/6747/0494/products/Magma-US_2x_18e58b2d-0280-4a6b-b0c0-0f4e346fcde0_550x534.png?v=1619698239',
  //   },
  //   description: ['Award Winning Design', '100 million keystroke life-cycle', '32-bit ARM Cortex-M0 based processor'],
  // },
  // {
  //   id: v4(),
  //   qty: 1,
  //   brand: 'roccat',
  //   connectivity: 'wireless',
  //   type: 'Keyboard',
  //   variant: 'gaming',
  //   price: 99.99,
  //   name: 'Pyro',
  //   image: {
  //     original:
  //       'https://cdn.shopify.com/s/files/1/0505/5912/3609/products/pdp_gallery_03_d0a9da7c-7102-477e-a401-f9cac8258a66_1200x@2x.png?v=1615353477',
  //     thumbnail:
  //       'https://cdn.shopify.com/s/files/1/0508/6747/0494/products/Pyro-US_2x_c9595efa-fdb3-41ef-82cc-ddb4d4b6d754_550x534.png?v=1619698268',
  //   },
  //   description: ['Award Winning Design', '100 million keystroke life-cycle', '32-bit ARM Cortex-M0 based processor'],
  // },
  // {
  //   id: v4(),
  //   qty: 1,
  //   brand: 'roccat',
  //   connectivity: 'wireless',
  //   type: 'Keyboard',
  //   variant: 'gaming',
  //   price: 159.99,
  //   name: 'Vulcan 122 AIMO',
  //   image: {
  //     original:
  //       'https://cdn.shopify.com/s/files/1/0505/5912/3609/products/pdp_gallery_03_d0a9da7c-7102-477e-a401-f9cac8258a66_1200x@2x.png?v=1615353477',
  //     thumbnail:
  //       'https://cdn.shopify.com/s/files/1/0508/6747/0494/products/Vulcan-120-US-2x-1_550x534.png?v=1605922046',
  //   },
  //   description: ['Award Winning Design', '100 million keystroke life-cycle', '32-bit ARM Cortex-M0 based processor'],
  // },
];
