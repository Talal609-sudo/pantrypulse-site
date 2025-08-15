import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const viewport = { width: 'device-width', initialScale: 1 }; // ok if already present

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-[100dvh] flex flex-col">
        <Header />
        <main id="main" className="container flex-1 py-6">{children}</main>
        <Footer />  {/* <-- no card/border wrapper */}
      </body>
    </html>
  );
}