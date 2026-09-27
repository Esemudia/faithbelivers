import { Link } from 'react-router';
import logoImg from '../assets/church-logo.png';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-800/30 text-gold-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src={logoImg}
                alt="Faith Believers Ministry International Logo"
                className="h-16 sm:h-20 w-auto mb-3 sm:mb-4 object-contain"
              />
            </Link>
            <p className="text-gold-300 font-display text-sm font-semibold tracking-wider uppercase">
              Faith Believers Ministry Int'l
            </p>
            <p className="text-gold-400/80 text-xs italic font-body mt-0.5">
              (A.K.A Freedom in Christ)
            </p>
            <p className="text-gold-200/70 text-xs sm:text-sm leading-relaxed font-body mt-2">
              Building Faith. Spreading Love. Changing Lives.
            </p>
            <p className="mt-2 text-gold-400/60 text-xs italic font-body">
              "For we walk by faith, not by sight." — 2 Corinthians 5:7
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-400 text-xs font-display tracking-widest uppercase mb-3 sm:mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/sermons', label: 'Sermons' },
                { to: '/live', label: 'Watch Live' },
                { to: '/events', label: 'Events' },
                { to: '/prayer', label: 'Prayer Requests' },
                { to: '/ministries', label: 'Ministries' },
                { to: '/give', label: 'Building Fund' },
                { to: '/testimonies', label: 'Testimonies' },
                { to: '/contact', label: 'Contact Us' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gold-200/60 hover:text-gold-400 text-xs font-display tracking-wide uppercase transition-colors inline-block py-0.5"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-400 text-xs font-display tracking-widest uppercase mb-3 sm:mb-4">Connect With Us</h4>
            <address className="not-italic space-y-1.5 text-xs text-gold-200/80">
              <p className="font-semibold text-gold-300">Faith Believers Ministry Int'l</p>
              <p className="text-gold-200/70">
                KM 365, Ughelli/Patani Expressway, By Solace Hotel, Ughelli, Delta State, Nigeria
              </p>
              <p className="pt-1 text-gold-300">
                <span className="text-gold-400 font-semibold">Phone / WhatsApp:</span>{' '}
                <a href="tel:08035688965" className="hover:text-gold-100 underline decoration-gold-600/50">
                  08035688965
                </a>
              </p>
              <p className="pt-0.5 text-gold-400/90 font-display">
                Lead Pastor: Revd. Israel Ufuoma Erechovwe
              </p>
              <p className="text-[11px] text-gold-500/70 italic">
                Services: Sun 8am | Mon 10am (Counseling) | Wed 10am (Fasting)
              </p>
            </address>

            <div className="mt-4 sm:mt-5 flex gap-2.5">
              {['Facebook', 'YouTube', 'Instagram', 'Twitter'].map(s => (
                <span
                  key={s}
                  className="w-9 h-9 rounded-full border border-gold-700/40 flex items-center justify-center text-gold-400 text-xs font-display cursor-pointer hover:border-gold-400 hover:text-gold-300 hover:bg-gold-500/10 transition-colors"
                  title={s}
                >
                  {s[0]}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider mt-8 sm:mt-10 mb-5 sm:mb-6" />
        <p className="text-center text-gold-200/40 text-[11px] sm:text-xs font-display tracking-widest">
          © {new Date().getFullYear()} Faith Believers Ministry International. All rights reserved. Jesus is Lord!
        </p>
      </div>
    </footer>
  );
}
