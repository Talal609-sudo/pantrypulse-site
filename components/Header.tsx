'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => { setOpen(false); }, [pathname]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function NavLinks({
    className = '',
    onClick,
  }: { className?: string; onClick?: () => void }) {
    return (
      <ul className={className}>
        {nav.map((item) => {
          const isActive = item.href === '/'
            ? pathname === '/'
            : pathname?.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`nav-link ${isActive ? 'text-white' : ''}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={onClick}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <header role="banner" className="sticky top-0 z-40 bg-bg/80 backdrop-blur">
      <div className="container my-4">
        <div className="card px-5 py-4">
          {/* Grid keeps nav centered on desktop */}
          <div className="flex items-center justify-between md:grid md:grid-cols-3">

            {/* Left: logo */}
            <div className="text-lg font-bold tracking-wide">PantryPulse</div>

            {/* Center: desktop nav */}
            <nav aria-label="Primary" className="hidden md:flex justify-center">

              <NavLinks className="flex items-center justify-center gap-6" />
            </nav>

            {/* Right: mobile menu button */}
            <div className="md:hidden">

              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? 'Close menu' : 'Open menu'}
                className="rounded-lg px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  {open ? (
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                  ) : (
                    <>
                      <rect x="3" y="6" width="18" height="2" rx="1" />
                      <rect x="3" y="11" width="18" height="2" rx="1" />
                      <rect x="3" y="16" width="18" height="2" rx="1" />
                    </>
                  )}
                </svg>
                <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile panel (collapsible below header) */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="container">
          <div className="card mt-2 px-5 py-4" role="dialog" aria-label="Mobile navigation">
            <NavLinks className="flex flex-col gap-4" onClick={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </header>
  );
}
