import Simulator from '../Simulator';

interface SimulatorModalProps {
  initialAmount: number;
  currentWeekNumber: number;
}

export default function SimulatorModal({ initialAmount, currentWeekNumber }: SimulatorModalProps) {
  return (
    <>
      <input
        type="checkbox"
        id="simulator"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box p-0 max-w-6xl">
          <h3 className="font-bold text-2xl pt-5">Simulador</h3>
          <Simulator
            initialAmount={initialAmount}
            currentWeekNumber={currentWeekNumber}
          />
          <div className="modal-action pr-5 pb-5">
            <label
              htmlFor="simulator"
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
