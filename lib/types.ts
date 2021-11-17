export interface Product {
  type: 'Keyboard' | 'Keycap' | 'Switch';
  variant?: string;
  name: string;
  price: number;
  qty?: number;
  connectivity: string;
  id: string;
  brand: string;
  description: Array<string>;
  image: {
    thumbnail: string;
    original: string;
  };
}

export interface FilterProps {
  product: Product;
  variants?: Array<string> | string;
  connectivity?: Array<string> | string;
}

export interface QueryParams {
  variants?: string | string[];
  connectivity?: string | string[];
}

export interface CompareProps {
  productA: Product;
  productB: Product;
  order: string;
  type: string;
}
