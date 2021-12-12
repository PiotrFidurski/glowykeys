export interface Image {
  originalPlaceholder: string;
  thumbnail: string;
  original: string;
  placeholder: string;
}

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
  image: Image;
}

export interface ApiResponse<T> {
  data: Array<T> | T;
}

export interface ApiErrorResponse {
  error: string;
}

export interface FilterFnProps {
  product: Product;
  variant?: Array<string>;
  connectivity?: Array<string>;
  brand?: Array<string>;
  color?: Array<string>;
}

export interface CompareProps {
  productA: Product;
  productB: Product;
  order: string;
  type: string;
}
