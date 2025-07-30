export const getCurrentAmount = (
  strategy: 'fixed-amount' | 'dynamic-amount',
  week: number,
  initialAmount: number
): number => {
  let amount: number = 0;

  if (strategy === 'fixed-amount') {
    return initialAmount * week;
  } else if (strategy === 'dynamic-amount') {
    for (let i = 1; i <= week; i++) {
      amount += initialAmount * i;
    }

    return amount;
  }

  return amount;
};

export const getTotalAmount = (
  strategy: 'fixed-amount' | 'dynamic-amount',
  initialAmount: number
): number => {
  let amount: number = 0;

  if (strategy === 'fixed-amount') {
    return initialAmount * 52;
  } else if (strategy === 'dynamic-amount') {
    for (let i = 1; i <= 52; i++) {
      amount += initialAmount * i;
    }

    return amount;
  }

  return amount;
};
