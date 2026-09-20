import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router';
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-950/95 backdrop-blur-sm shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
            <img src={logoImg} alt="Faith Believers Ministry" className="h-12 md:h-16 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `nav-link px-3 py-1.5 rounded transition-colors ${
                    isActive ? 'text-gold-400' : 'text-gold-200 hover:text-gold-400'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gold-400 transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gold-400 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gold-400 transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-navy-950/98 backdrop-blur-md border-t border-gold-800/30 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `nav-link px-4 py-3 rounded border-b border-gold-800/20 ${
                    isActive ? 'text-gold-400' : 'text-gold-200 hover:text-gold-400'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
