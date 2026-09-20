import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router';
import logoImg from '../assets/logo1.png';

const links = [
  { to: '/about', label: 'About' },
  { to: '/sermons', label: 'Sermons' },
  { to: '/live', label: 'Live' },
  { to: '/events', label: 'Events' },
  { to: '/prayer', label: 'Prayer' },
  { to: '/ministries', label: 'Ministries' },
  { to: '/give', label: 'Give' },
  { to: '/testimonies', label: 'Testimonies' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Handle scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Handle body scroll locking & Escape key
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false);
      };
      window.addEventListener('keydown', onKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? 'bg-navy-950/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-gold-800/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 shrink-0 py-1"
              onClick={() => setOpen(false)}
            >
              <img
                src={logoImg}
                alt="Faith Believers Ministry"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-200 hover:scale-105"
              />
              <div className="hidden xs:block sm:block text-left">
                <span className="block font-decorative text-gold-300 text-xs sm:text-sm tracking-wider uppercase leading-tight">
                  Faith Believers
                </span>
                <span className="block font-display text-gold-500/70 text-[9px] sm:text-[10px] tracking-widest uppercase">
                  Ministry Int'l
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-sm transition-all duration-200 text-xs font-display tracking-wider uppercase ${
                      isActive
                        ? 'text-gold-400 bg-gold-500/10 font-semibold'
                        : 'text-gold-200/80 hover:text-gold-300 hover:bg-gold-500/5'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/live"
                className="ml-2 btn-gold px-4 py-2 rounded-sm text-xs inline-flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping inline-block" />
                Live
              </Link>
            </nav>

            {/* Tablet nav (lg:flex without clutter) */}
            <nav className="hidden lg:flex xl:hidden items-center gap-0.5">
              {links.slice(0, 6).map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `nav-link px-2 py-1.5 rounded-sm transition-colors text-[11px] font-display uppercase ${
                      isActive ? 'text-gold-400 bg-gold-500/10' : 'text-gold-200/80 hover:text-gold-300'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/give"
                className="btn-gold px-3 py-1.5 rounded-sm text-[11px] ml-1"
              >
                Give
              </Link>
              <button
                className="ml-1 p-2 text-gold-300 hover:text-gold-400"
                onClick={() => setOpen(!open)}
                aria-label="More navigation links"
              >
                <span className="text-xs font-display uppercase tracking-wider">More ▾</span>
              </button>
            </nav>

            {/* Mobile / Small tablet hamburger button */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-11 h-11 rounded-sm border border-gold-800/30 text-gold-400 hover:text-gold-300 hover:border-gold-600/50 focus:outline-none transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 transform ${
                  open ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 transform ${
                  open ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile drawer with scroll support */}
        {open && (
          <div className="lg:hidden border-t border-gold-800/30 bg-navy-950/98 backdrop-blur-xl shadow-2xl animate-fade-up">
            <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto px-4 py-5 flex flex-col">
              <nav className="flex flex-col gap-1">
                {links.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-sm border-b border-gold-800/15 font-display text-sm tracking-wider uppercase transition-colors ${
                        isActive
                          ? 'text-gold-400 bg-gold-500/10 font-semibold'
                          : 'text-gold-200/80 hover:text-gold-300 hover:bg-gold-500/5'
                      }`
                    }
                  >
                    <span>{label}</span>
                    <span className="text-gold-500/50 text-xs">›</span>
                  </NavLink>
                ))}
              </nav>

              {/* Quick action buttons in mobile drawer */}
              <div className="pt-6 pb-2 grid grid-cols-2 gap-3 mt-auto">
                <Link
                  to="/live"
                  onClick={() => setOpen(false)}
                  className="btn-gold py-3 text-center rounded-sm text-xs flex items-center justify-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
                  Watch Live
                </Link>
                <Link
                  to="/give"
                  onClick={() => setOpen(false)}
                  className="btn-outline-gold py-3 text-center rounded-sm text-xs flex items-center justify-center"
                >
                  Give Online
                </Link>
              </div>

              {/* Church contact snippet on mobile */}
              <div className="mt-4 pt-4 border-t border-gold-800/20 text-center">
                <p className="text-[11px] text-gold-300/60 font-body italic">
                  Building Faith. Spreading Love. Changing Lives.
                </p>
                <p className="text-[10px] text-gold-500/50 font-display uppercase tracking-widest mt-1">
                  Revd. Israel Ufuoma Erechovwe
                </p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop for mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
