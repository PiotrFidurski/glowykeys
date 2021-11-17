import { CompareProps } from './types';

export function compare({ productA, productB, order, type }: CompareProps) {
  return order === 'ASC' ? productA[type] - productB[type] : productB[type] - productA[type];
}
