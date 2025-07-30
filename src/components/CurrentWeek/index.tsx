import { getCurrentAmount, getTotalAmount } from '@/services/amount.services';
import { getCurrentWeekNumber } from '@/services/date.services';
import { useEffect, useState } from 'react';
import HowToModal from '../HowToModal';
import HowToModalButton from '../HowToModalButton';
import WeeksTableModal from '../WeeksTableModal';
import WeeksTableModalButton from '../WeeksTableModalButton';

export default function CurrentWeek() {
  const [strategy, setStrategy] = useState<'fixed-amount' | 'dynamic-amount'>('dynamic-amount');
  const [currentWeekNumber, setCurrentWeekNumber] = useState<number>(1);
  const [initialAmount, setInitialAmount] = useState<number>(1);
  const [currentAmount, setCurrentAmount] = useState<number>(1);
  const [totalAmount, setTotalAmount] = useState<number>(1);

  useEffect(() => {
    const weekNumber = getCurrentWeekNumber();
    setCurrentWeekNumber(weekNumber);

    const amount = getCurrentAmount(strategy, weekNumber, initialAmount);
    setCurrentAmount(amount);
  }, []);

  useEffect(() => {
    const amount = getCurrentAmount(strategy, currentWeekNumber, initialAmount);
    setCurrentAmount(amount);

    const total = getTotalAmount(strategy, initialAmount);
    setTotalAmount(total);
  }, [strategy, currentWeekNumber, initialAmount]);

  return (
    <>
      <div className="flex flex-col flex-1 justify-evenly content-evenly items-center text-center px-4 sm:px-8">
        <span className="text-4xl sm:text-5xl font-bold">Semana {currentWeekNumber}</span>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-start ml-1">Estratégia</span>
            <select
              className="select select-bordered w-full"
              value={strategy}
              onChange={(e) => setStrategy(e.target.value as 'fixed-amount' | 'dynamic-amount')}
            >
              <option
                value="dynamic-amount"
                defaultChecked
              >
                Incrementar conforme o número da semana
              </option>
              <option value="fixed-amount">Valor fixo por semana</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-start ml-1">
              {strategy === 'dynamic-amount' ? 'Montante inicial' : 'Montante fixo'}
            </span>
            <input
              type="number"
              className="input input-bordered"
              value={initialAmount === 0 ? '' : initialAmount}
              onChange={(e) => setInitialAmount(Number(e.target.value) || 0)}
              min={0}
              step={1}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-bold text-lg">Montantes calculados 👇</label>
          <div className="flex flex-row gap-2 sm:gap-4">
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
        </div>

        <div className="flex flex-row justify-items-center gap-4">
          <WeeksTableModalButton />
          <WeeksTableModal
            strategy={strategy}
            initialAmount={initialAmount}
            currentWeekNumber={currentWeekNumber}
          />

          <HowToModalButton />
          <HowToModal />
        </div>
      </div>
    </>
  );
}
