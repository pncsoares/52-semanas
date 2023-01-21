import CurrentWeek from '@/components/CurrentWeek';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen select-none bg-base-100 text-bg-base-100-content font-mono">
        <Header />
        <CurrentWeek />
        <Footer />
      </div>
    </>
  );
}
