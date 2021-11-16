export function compare({ productA, productB, order, type }) {
  return order === 'ASC' ? productA[type] - productB[type] : productB[type] - productA[type];
}
