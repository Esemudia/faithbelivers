import { Link } from 'react-router';
import logoImg from '../assets/logo1.png';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-800/30 text-gold-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logoImg} alt="Faith Believers Ministry" className="h-14 sm:h-16 md:h-20 w-auto mb-3 sm:mb-4 object-contain" />
            <p className="text-gold-300/80 text-sm leading-relaxed font-body">
              Building Faith. Spreading Love. Changing Lives.
            </p>
            <p className="mt-2 sm:mt-3 text-gold-400/60 text-xs italic font-body">
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
                { to: '/prayer', label: 'Prayer' },
                { to: '/ministries', label: 'Ministries' },
                { to: '/give', label: 'Give Online' },
                { to: '/testimonies', label: 'Testimonies' },
                { to: '/contact', label: 'Contact Us' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gold-200/60 hover:text-gold-400 text-xs sm:text-sm font-display tracking-wide uppercase transition-colors inline-block py-0.5"
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
            <address className="not-italic space-y-1.5 text-xs sm:text-sm text-gold-200/70">
              <p className="font-semibold text-gold-300">Faith Believers Ministry Int'l</p>
              <p className="text-xs italic text-gold-400/60">(aka Freedom in Christ)</p>
              <p className="pt-1 text-gold-200/60">KM 365, Ughelli/Port Harcourt Express Way, Ughelli, Delta State, Nigeria</p>
              <p className="pt-1 text-gold-400/80">Lead Pastor: Revd. Israel Ufuoma Erechovwe</p>
            </address>
            <div className="mt-4 sm:mt-5 flex gap-2.5">
              {['FB', 'YT', 'IG', 'TW'].map(s => (
                <span
                  key={s}
                  className="w-9 sm:w-10 h-9 sm:h-10 rounded-full border border-gold-700/40 flex items-center justify-center text-gold-400 text-xs font-display cursor-pointer hover:border-gold-400 hover:text-gold-300 hover:bg-gold-500/10 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider mt-8 sm:mt-10 mb-5 sm:mb-6" />
        <p className="text-center text-gold-200/40 text-[11px] sm:text-xs font-display tracking-widest">
          © {new Date().getFullYear()} Faith Believers Ministry International. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
