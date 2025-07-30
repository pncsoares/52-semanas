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
    <div className="flex flex-col flex-1 justify-center items-center text-center px-4 sm:px-8 py-8 max-w-2xl mx-auto">
      <span className="text-5xl sm:text-6xl font-extrabold mb-6 text-primary">
        Semana {currentWeekNumber}
      </span>

      <div className="flex flex-col sm:flex-row gap-6 w-full mb-8">
        <div className="flex flex-col gap-2 flex-1">
          <label className="text-start ml-1 font-semibold text-base-content">Estratégia</label>
          <select
            className="select select-bordered"
            value={strategy}
            onChange={(e) => setStrategy(e.target.value as 'fixed-amount' | 'dynamic-amount')}
          >
            <option value="dynamic-amount">Incrementar a cada semana</option>
            <option value="fixed-amount">Valor fixo por semana</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <label className="text-start ml-1 font-semibold text-base-content">
            {strategy === 'dynamic-amount' ? 'Montante inicial' : 'Montante fixo'}
          </label>
          <input
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            className="input input-bordered w-full"
            value={initialAmount === 0 ? '' : initialAmount}
            onChange={(e) => setInitialAmount(Number(e.target.value) || 0)}
            min={0}
            step={1}
            placeholder="Insira o valor"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full mb-8">
        <label className="font-bold text-xl text-base-content mb-2">Montantes calculados 👇</label>
        <div className="flex flex-row gap-4 justify-center">
          <div className="stats bg-success text-success-content shadow-md rounded-lg">
            <div className="stat">
              <div className="stat-title text-base">Até agora</div>
              <div className="stat-value text-2xl">{currentAmount} €</div>
            </div>
          </div>
          <div className="stats bg-primary text-primary-content shadow-md rounded-lg">
            <div className="stat">
              <div className="stat-title text-base">No final do ano</div>
              <div className="stat-value text-2xl">{totalAmount} €</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-6 mt-4">
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
  );
}
