import LightDarkSwitcher from '../LightDarkSwitcher';
import NavbarCenter from '../Navbar/NavbarCenter';
import NavbarEnd from '../Navbar/NavbarEnd';
import NavbarStart from '../Navbar/NavbarStart';

export default function Header() {
  return (
    <>
      {/* <div className="navbar bg-base-100 py-0 sm:py-10 px-5 sm:px-10"> */}
      <div className="navbar flex flex-row justify-between items-center content-center p-5 sm:p-10">
        <a className="normal-case text-xl font-bold">Desafio 52 semanas 💰</a>
        <LightDarkSwitcher />
        {/* <NavbarStart /> */}
        {/* <NavbarCenter /> */}
        {/* <NavbarEnd /> */}
      </div>
    </>
  );
}
