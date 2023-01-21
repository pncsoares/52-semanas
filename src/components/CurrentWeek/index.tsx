import { getCurrentAmount } from '@/services/amount.services';
import { getCurrentWeekNumber } from '@/services/date.services';
import { useEffect, useState } from 'react';

export default function CurrentWeek() {
  const [currentWeekNumber, setCurrentWeekNumber] = useState<number>(1);
  const [currentAmount, setCurrentAmount] = useState<number>(1);

  useEffect(() => {
    const weekNumber = getCurrentWeekNumber();
    setCurrentWeekNumber(weekNumber);

    const amount = getCurrentAmount(weekNumber);
    setCurrentAmount(amount);
  }, []);

  return (
    <>
      <div className="flex flex-col flex-1 p-5 sm:p-10 justify-center">
        <div className="hero">
          <div className="hero-content text-center flex gap-5">
            <div className="max-w-md flex flex-col gap-6 items-center">
              <span className="text-5xl font-bold">Semana {currentWeekNumber}</span>
              <div className="badge badge-primary badge-lg">Montante poupado: {currentAmount}€</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
