import { getCurrentAmount, getTotalAmount } from '@/services/amount.services';
import { getCurrentWeekNumber } from '@/services/date.services';
import { useEffect, useState } from 'react';
import HowToModal from '../HowToModal';
import HowToModalButton from '../HowToModalButton';
import WeeksTableModal from '../WeeksTableModal';
import WeeksTableModalButton from '../WeeksTableModalButton';

export default function CurrentWeek() {
  const [currentWeekNumber, setCurrentWeekNumber] = useState<number>(1);
  const [initialAmount, setInitialAmount] = useState<number>(1);
  const [currentAmount, setCurrentAmount] = useState<number>(1);
  const [totalAmount, setTotalAmount] = useState<number>(1);

  useEffect(() => {
    const weekNumber = getCurrentWeekNumber();
    setCurrentWeekNumber(weekNumber);

    const amount = getCurrentAmount(weekNumber, initialAmount);
    setCurrentAmount(amount);
  }, []);

  useEffect(() => {
    const amount = getCurrentAmount(currentWeekNumber, initialAmount);
    setCurrentAmount(amount);

    const total = getTotalAmount(initialAmount);
    setTotalAmount(total);
  }, [initialAmount]);

  return (
    <>
      <div className="flex flex-col flex-1 py-0 sm:py-10 p-5 sm:p-10 justify-center items-center content-center">
        <div className="hero-content text-center flex">
          <div className="max-w-md flex flex-col gap-4 sm:gap-10 items-center">
            <span className="text-4xl sm:text-5xl font-bold">Semana {currentWeekNumber}</span>

            <div className="form-control">
              <label className="input-group">
                <span>Montante inicial</span>
                <input
                  type="number"
                  min={0}
                  placeholder="1"
                  onChange={(e) => setInitialAmount(+e.target.value)}
                  value={initialAmount}
                  className="input input-bordered input-primary w-24 text-center"
                  autoFocus
                />
                <span>€</span>
              </label>
            </div>

            <label>Montantes calculados 👇</label>
            <div className="stats bg-primary text-primary-content">
              <div className="stat">
                <div className="stat-title">Até agora</div>
                <div className="stat-value">{currentAmount} €</div>
              </div>
              <div className="stat">
                <div className="stat-title">No final do ano</div>
                <div className="stat-value">{totalAmount} €</div>
              </div>
            </div>

            <WeeksTableModalButton />
            <WeeksTableModal
              initialAmount={initialAmount}
              currentWeekNumber={currentWeekNumber}
            />

            <HowToModalButton />
            <HowToModal />
          </div>
        </div>
      </div>
    </>
  );
}
