import { IWeek } from '@/interfaces/Week';
import { useEffect, useState } from 'react';

interface SimulatorProps {
  initialAmount: number;
  currentWeekNumber: number;
}

export default function Simulator({ initialAmount, currentWeekNumber }: SimulatorProps) {
  const [weeks, setWeeks] = useState<IWeek[]>([]);

  useEffect(() => {
    console.log('[]', initialAmount, currentWeekNumber);
    assembleWeeks();
  }, []);

  useEffect(() => {
    console.log('[initialAmount]', initialAmount, currentWeekNumber);
    assembleWeeks();
  }, [initialAmount]);

  const assembleWeeks = (): void => {
    const assembledWeeks: IWeek[] = [];
    let totalAmount = 0;

    for (let i = 1; i <= 52; i++) {
      const weekAmount = initialAmount * i;
      totalAmount += initialAmount * i;

      const weekInfo: IWeek = {
        number: i,
        weekAmount,
        totalAmount,
      };

      assembledWeeks.push(weekInfo);
    }

    setWeeks(assembledWeeks);
  };

  return (
    <>
      <div className="p-5 sm:p-10 overflow-x-auto">
        {/* BEGIN: Mobile */}
        <div className="block sm:hidden w-full">
          <table className="table table-compact w-full text-center">
            <thead>
              <tr>
                <th># semana</th>
                <th>Valor</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {weeks.map((week, index) => (
                <tr
                  key={`tr_${index}`}
                  className={week.number <= currentWeekNumber ? 'text-green-500' : ''}
                >
                  <th key={`th_number_${index}`}>{week.number}</th>
                  <td key={`th_weekAmount_${index}`}>{week.weekAmount} €</td>
                  <td key={`th_totalAmount_${index}`}>{week.totalAmount} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* END: Mobile */}

        {/* BEGIN: Desktop */}
        <div className="hidden sm:flex flex-row gap-5 sm:gap-10 w-full">
          <table className="table table-compact w-full text-center">
            <thead>
              <tr>
                <th># semana</th>
                <th>Valor</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {weeks.slice(0, 26).map((week, index) => (
                <tr
                  key={`tr_${index}`}
                  className={week.number <= currentWeekNumber ? 'text-green-500' : ''}
                >
                  <th key={`th_number_${index}`}>{week.number}</th>
                  <td key={`th_weekAmount_${index}`}>{week.weekAmount} €</td>
                  <td key={`th_totalAmount_${index}`}>{week.totalAmount} €</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="table table-compact w-full text-center">
            <thead>
              <tr>
                <th># semana</th>
                <th>Valor</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {weeks.slice(26).map((week, index) => (
                <tr
                  key={`tr_${index}`}
                  className={week.number <= currentWeekNumber ? 'text-green-500' : ''}
                >
                  <th key={`th_number_${index}`}>{week.number}</th>
                  <td key={`th_weekAmount_${index}`}>{week.weekAmount} €</td>
                  <td key={`th_totalAmount_${index}`}>{week.totalAmount} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* END: Desktop */}
      </div>
    </>
  );
}
