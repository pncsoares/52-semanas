export const getCurrentWeekNumber = (): number => {
  const currentDate = new Date();
  const year = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate.valueOf() - year.valueOf()) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);
  return weekNumber;
};
