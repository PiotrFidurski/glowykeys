function useFormatCurrency(unit: number, qty = 1) {
  const dollars = (unit / 100) * qty;

  const priceInDollars = dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  return { priceInDollars };
}

export { useFormatCurrency };
