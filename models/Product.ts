import { Image } from '@utils/types';
import { model, models, Schema } from 'mongoose';

export interface ProductDocument {
  name: string;
  price: number;
  quantity: number;
  type: 'keyboard' | 'keycap' | 'switch';
  connectivity?: string;
  variant?: string;
  color: string;
  brand: string;
  description: Array<string>;
  image: Image;
}

const schema = new Schema<ProductDocument>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  type: { type: String, required: true },
  connectivity: { type: String },
  variant: { type: String },
  color: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: [String], required: true },
  image: {
    original: { type: String, required: true },
    thumbnail: { type: String, required: true },
    placeholder: { type: String, required: true },
  },
});

export default models.Product || model('Product', schema);
