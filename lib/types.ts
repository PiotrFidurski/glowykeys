export interface Product {
  type: 'Keyboard' | 'Keycap' | 'Switch';
  variant?: string;
  name: string;
  price: number;
  color: string;
  qty?: number;
  connectivity?: string;
  id: string;
  brand: string;
  description?: Array<string>;
  image: {
    thumbnail: string;
    original: string;
  };
}

export interface FilterFnProps {
  product: Product;
  variants?: Array<string>;
  connectivity?: Array<string>;
  brands?: Array<string>;
}

export interface CompareProps {
  productA: Product;
  productB: Product;
  order: string;
  type: string;
}
