import Header from './Header';
import Footer from './Footer';

/** Layout — wraps all pages with sticky header + footer. */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
