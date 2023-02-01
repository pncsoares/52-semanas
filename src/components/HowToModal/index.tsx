import HowTo from '../HowTo';

export default function HowToModal() {
  return (
    <>
      <input
        type="checkbox"
        id="howTo"
        className="modal-toggle m-2"
      />
      <div className="modal">
        <div className="modal-box text-left p-0 max-w-6xl">
          <HowTo />
          <div className="modal-action pr-5 pb-5">
            <label
              htmlFor="howTo"
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
