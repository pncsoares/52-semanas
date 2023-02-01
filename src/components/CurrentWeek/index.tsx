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
  }, [currentWeekNumber, initialAmount]);

  const changeInitialAmount = (amount: number): void => {
    setInitialAmount(amount);
  };

  return (
    <>
      <div className="flex flex-col flex-1 justify-center items-center content-center">
        <div className="hero-content text-center flex">
          <div className="max-w-md flex flex-col gap-3 sm:gap-4 md:gap-5 items-center">
            <span className="text-4xl sm:text-5xl font-bold">Semana {currentWeekNumber}</span>

            <span>Montante inicial</span>
            <div className="btn-group">
              <button
                className={`btn ${initialAmount === 0.25 ? 'btn-active' : ''} `}
                onClick={() => changeInitialAmount(0.25)}
              >
                0,25 €
              </button>
              <button
                className={`btn ${initialAmount === 0.5 ? 'btn-active' : ''} `}
                onClick={() => changeInitialAmount(0.5)}
              >
                0,50 €
              </button>
              <button
                className={`btn ${initialAmount === 0.75 ? 'btn-active' : ''} `}
                onClick={() => changeInitialAmount(0.75)}
              >
                0,75 €
              </button>
              <button
                className={`btn ${initialAmount === 1 ? 'btn-active' : ''} `}
                onClick={() => changeInitialAmount(1)}
              >
                1,00 €
              </button>
            </div>

            <label>Montantes calculados 👇</label>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
              <div className="stats bg-success text-success-content">
                <div className="stat">
                  <div className="stat-title">Até agora</div>
                  <div className="stat-value">{currentAmount} €</div>
                </div>
              </div>

              <div className="stats bg-primary text-primary-content">
                <div className="stat">
                  <div className="stat-title">No final do ano</div>
                  <div className="stat-value">{totalAmount} €</div>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-items-center gap-4">
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
      </div>
    </>
  );
}
