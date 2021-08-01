const currency = (number: number | string): string => {
  const numberFormat = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  });

  return numberFormat.format(Number(number)).replace('$', '').trim();
};

export { currency };
