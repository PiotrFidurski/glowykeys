import { Product } from '@utils/types';
import { v4 } from 'uuid';

export const KeySwitchesData: Array<Product> = [
  {
    id: v4(),
    color: 'white',
    brand: 'HyperX',
    type: 'Switch',
    variant: 'HyperX Red',
    qty: 1,
    name: 'Alloy Origins - Red',
    price: 39.9,
    image: {
      original: '',
      thumbnail: '/assets/images/hyperx_alloy_origins_red.png',
    },
  },
  {
    id: v4(),
    color: 'black',
    brand: 'Idobao',
    type: 'Switch',
    variant: 'CherryMx Red',
    qty: 1,
    name: 'Cherry Set',
    price: 39.9,
    image: {
      original: '',
      thumbnail: '/assets/images/idobao_cherry_switch.png',
    },
  },
  {
    id: v4(),
    color: 'white',
    brand: 'Idobao',
    type: 'Switch',
    variant: 'Gateron Pink',
    qty: 1,
    name: 'Gateron - Pink',
    price: 39.9,
    image: {
      original: '',
      thumbnail: '/assets/images/idobao_gateron_pink_switch.png',
    },
  },
  {
    id: v4(),
    color: 'white',
    brand: 'Kalih',
    type: 'Switch',
    variant: 'CherryMx Brown',
    qty: 1,
    name: 'Kalih Brown',
    price: 39.9,
    image: {
      original: '',
      thumbnail: '/assets/images/kalih_brown.png',
    },
  },
  {
    id: v4(),
    color: 'white',
    brand: 'Kalih',
    type: 'Switch',
    variant: 'CherryMx Blue',
    qty: 1,
    name: 'Kalih Set',
    price: 39.9,
    image: {
      original: '',
      thumbnail: '/assets/images/kalih_switch_set.png',
    },
  },
  {
    id: v4(),
    color: 'white',
    brand: 'Outemu',
    type: 'Switch',
    variant: 'Outemu Red',
    qty: 1,
    name: 'Outemu Red',
    price: 39.9,
    image: {
      original: '',
      thumbnail: '/assets/images/outemu_red_switch.png',
    },
  },
];

export const keycapsData: Array<Product> = [
  {
    id: v4(),
    color: 'white',
    brand: 'Razer',
    type: 'Keycap',
    qty: 1,
    name: 'Razer Phantom Keycap - White',
    price: 39.9,
    image: {
      original: '',
      thumbnail: '/assets/images/razer_phantom_keycap_white.png',
    },
  },
  {
    id: v4(),
    color: 'black',
    brand: 'Razer',
    type: 'Keycap',
    qty: 1,
    name: 'Razer Phantom Keycap - Black',
    price: 39.9,
    image: {
      original: '',
      thumbnail: '/assets/images/razer_phantom_keycap_black.png',
    },
  },
  {
    id: v4(),
    color: 'white',
    brand: 'Razer',
    type: 'Keycap',
    qty: 1,
    name: 'Razer PBT Keycap - Mercury White',
    price: 39.9,
    image: {
      original: '',
      thumbnail: '/assets/images/razer_pbt_keycap_mercury_white.png',
    },
  },
  {
    id: v4(),
    color: 'pink',
    brand: 'Razer',
    type: 'Keycap',
    qty: 1,
    name: 'Razer PBT Keycap - Quartz Pink',
    price: 39.9,
    image: {
      original: '',
      thumbnail: '/assets/images/razer_pbt_keycap_quartz_pink.png',
    },
  },
  {
    id: v4(),
    color: 'white',
    brand: 'SteelSeries',
    type: 'Keycap',
    qty: 1,
    name: 'PRISMCAPS',
    price: 29.9,
    image: {
      original: '',
      thumbnail: '/assets/images/steelseries_prismcaps_white.png',
    },
  },
  {
    id: v4(),
    color: 'black',
    brand: 'MXCherry',
    type: 'Keycap',
    qty: 1,
    name: 'Dota 2 Keycap',
    price: 99.9,
    image: {
      original: '',
      thumbnail: '/assets/images/dota_2_keycap_black.png',
    },
  },
  {
    id: v4(),
    color: 'brown',
    brand: 'Novelty',
    type: 'Keycap',
    qty: 1,
    name: 'Kiwi Keycap',
    price: 99.9,
    image: {
      original: '',
      thumbnail: '/assets/images/kiwi_keycap.png',
    },
  },
  {
    id: v4(),
    color: 'green',
    brand: 'Novelty',
    type: 'Keycap',
    qty: 1,
    name: 'Melon Keycap',
    price: 99.9,
    image: {
      original: '',
      thumbnail: '/assets/images/melon_keycap.png',
    },
  },
  {
    id: v4(),
    color: 'black',
    brand: 'Novelty',
    type: 'Keycap',
    qty: 1,
    name: 'Capsmith Keycap',
    price: 99.9,
    image: {
      original: '',
      thumbnail: '/assets/images/capsmith_keycap.png',
    },
  },
];

export const data: Array<Product> = [
  {
    id: v4(),
    color: 'black',
    qty: 1,
    brand: 'roccat',
    connectivity: 'wired',
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
  {
    id: v4(),
    color: 'black',
    qty: 1,
    brand: 'roccat',
    connectivity: 'wired',
    type: 'Keyboard',
    variant: 'gaming',
    price: 59.99,
    name: 'Magma',
    image: {
      original:
        'https://cdn.shopify.com/s/files/1/0505/5912/3609/products/pdp_gallery_03_d0a9da7c-7102-477e-a401-f9cac8258a66_1200x@2x.png?v=1615353477',
      thumbnail:
        'https://cdn.shopify.com/s/files/1/0508/6747/0494/products/Magma-US_2x_18e58b2d-0280-4a6b-b0c0-0f4e346fcde0_550x534.png?v=1619698239',
    },
    description: ['Award Winning Design', '100 million keystroke life-cycle', '32-bit ARM Cortex-M0 based processor'],
  },
  {
    id: v4(),
    color: 'black',
    qty: 1,
    brand: 'roccat',
    connectivity: 'wireless',
    type: 'Keyboard',
    variant: 'casual',
    price: 99.99,
    name: 'Pyro',
    image: {
      original:
        'https://cdn.shopify.com/s/files/1/0505/5912/3609/products/pdp_gallery_03_d0a9da7c-7102-477e-a401-f9cac8258a66_1200x@2x.png?v=1615353477',
      thumbnail:
        'https://cdn.shopify.com/s/files/1/0508/6747/0494/products/Pyro-US_2x_c9595efa-fdb3-41ef-82cc-ddb4d4b6d754_550x534.png?v=1619698268',
    },
    description: ['Award Winning Design', '100 million keystroke life-cycle', '32-bit ARM Cortex-M0 based processor'],
  },
  {
    id: v4(),
    color: 'black',
    qty: 1,
    brand: 'roccat',
    connectivity: 'wireless',
    type: 'Keyboard',
    variant: 'gaming',
    price: 159.99,
    name: 'Vulcan 122 AIMO',
    image: {
      original:
        'https://cdn.shopify.com/s/files/1/0505/5912/3609/products/pdp_gallery_03_d0a9da7c-7102-477e-a401-f9cac8258a66_1200x@2x.png?v=1615353477',
      thumbnail:
        'https://cdn.shopify.com/s/files/1/0508/6747/0494/products/Vulcan-120-US-2x-1_550x534.png?v=1605922046',
    },
    description: ['Award Winning Design', '100 million keystroke life-cycle', '32-bit ARM Cortex-M0 based processor'],
  },
];

export const cartData: Array<Product> = [
  {
    id: v4(),
    color: 'black',
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
];
