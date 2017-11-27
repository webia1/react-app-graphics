// Could be more elegant

export function formatCurrency(input) {
  return input.toLocaleString('de-DE', {
    style: 'decimal',
    maximumFractionDigits: 0
  });
}
