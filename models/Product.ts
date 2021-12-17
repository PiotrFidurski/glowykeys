import { Product } from '@utils/types';
import { model, models, Schema } from 'mongoose';

const schema = new Schema<Product>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
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
    originalPlaceholder: { type: String, required: true },
  },
});

export default models.Product || model('Product', schema);
