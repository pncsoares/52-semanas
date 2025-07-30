import LightDarkSwitcher from '../LightDarkSwitcher';

export default function Header() {
  return (
    <>
      <div className="navbar flex flex-row justify-between items-center content-center p-4 sm:p-8">
        <a className="normal-case text-xl font-bold">Desafio 52 semanas 💰</a>
        <LightDarkSwitcher />
      </div>
    </>
  );
}
