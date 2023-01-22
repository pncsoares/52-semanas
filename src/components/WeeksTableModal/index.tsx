import WeeksTable from '../WeeksTable';

interface WeeksTableModalProps {
  initialAmount: number;
  currentWeekNumber: number;
}

export default function WeeksTableModal({
  initialAmount,
  currentWeekNumber,
}: WeeksTableModalProps) {
  return (
    <>
      <input
        type="checkbox"
        id="weeksTable"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box p-0 max-w-6xl">
          <h3 className="font-bold text-2xl pt-5">Lista de semanas</h3>
          <WeeksTable
            initialAmount={initialAmount}
            currentWeekNumber={currentWeekNumber}
          />
          <div className="modal-action pr-5 pb-5">
            <label
              htmlFor="weeksTable"
              className="btn"
            >
              Fechar
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
