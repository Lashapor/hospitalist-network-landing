import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CookieBanner } from '../components/CookieBanner';
import { ScrollToTop } from '../components/ScrollToTop';
import { BookDemo } from '../components/BookDemo';

export function Root() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
      <ScrollToTop />
      <BookDemo />
    </div>
  );
}
