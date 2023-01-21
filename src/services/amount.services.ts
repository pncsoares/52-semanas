export const getCurrentAmount = (week: number): number => {
  let amount: number = 0;

  for (let i = 1; i <= week; i++) {
    amount += i;
  }

  return amount;
};
