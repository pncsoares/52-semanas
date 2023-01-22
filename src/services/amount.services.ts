export const getCurrentAmount = (week: number, initialAmount: number): number => {
  let amount: number = 0;

  for (let i = 1; i <= week; i++) {
    amount += initialAmount;
  }

  return amount;
};

export const getTotalAmount = (initialAmount: number): number => {
  let amount: number = 0;

  for (let i = 1; i <= 52; i++) {
    amount += initialAmount * i;
  }

  return amount;
};
