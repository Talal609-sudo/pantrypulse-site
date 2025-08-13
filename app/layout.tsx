import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";


export const metadata: Metadata = {
  title: "PantryPulse",
  description: "Keep shelves full and waste low with timely expiry and low-stock alerts.",
  openGraph: {
    title: "PantryPulse",
    description: "Keep shelves full and waste low with timely expiry and low-stock alerts.",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PantryPulse",
    description: "Keep shelves full and waste low with timely alerts.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <a href="#content" className="skip-link">Skip to content</a>
        <Header />
        <main id="content" className="main-enter">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
