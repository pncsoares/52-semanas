import GitHub from '../SocialMedia/GitHub';

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-4 sm:p-8 flex flex-col gap-4">
        <div>
          <p className="font-bold text-md sm:text-lg">Feito por Pedro Soares</p>
          <p>Copyright © {new Date().getFullYear()} - Todos os direitos reservados</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <GitHub />
          </div>
        </div>
      </footer>
    </>
  );
}
