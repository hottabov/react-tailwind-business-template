import Header from './Header';
import Footer from './Footer';
import PromoPopup from '../ui/PromoPopup';
import GtmPageviewTracker from '../utils/GtmPageviewTracker';

/** Layout — wraps all pages with sticky header + footer. */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <GtmPageviewTracker />
      <PromoPopup />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
