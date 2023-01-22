import LightDarkSwitcher from '../LightDarkSwitcher';

export default function Header() {
  return (
    <>
      <div className="navbar flex flex-row justify-between items-center content-center p-5 sm:p-10">
        <a className="normal-case text-xl font-bold">Desafio 52 semanas 💰</a>
        <LightDarkSwitcher />
      </div>
    </>
  );
}
