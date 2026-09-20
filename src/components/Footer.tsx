import { Link } from 'react-router';
import logoImg from '../assets/logo1.png';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src={logoImg} alt="Faith Believers Ministry" className="h-20 w-auto mb-4" />
            <p className="text-gold-300/70 text-sm leading-relaxed font-body">
              Building Faith. Spreading Love. Changing Lives.
            </p>
            <p className="mt-3 text-gold-400/50 text-xs italic">
              "For we walk by faith, not by sight." — 2 Corinthians 5:7
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-400 text-xs font-display tracking-widest uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['/about', '/sermons', '/live', '/events', '/prayer', '/ministries', '/give', '/testimonies', '/contact'].map(path => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-gold-200/60 hover:text-gold-400 text-sm font-display tracking-wide uppercase transition-colors"
                  >
                    {path.replace('/', '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-400 text-xs font-display tracking-widest uppercase mb-4">Connect With Us</h4>
            <address className="not-italic space-y-2 text-sm text-gold-200/60">
              <p>Faith Believers Ministry Int'l</p>
              <p className="text-xs italic text-gold-200/40">(aka Freedom in Christ)</p>
              <p className="mt-3">Pastor: Revd. Israel Ufuoma Erechovwe</p>
            </address>
            <div className="mt-6 flex gap-3">
              {['FB', 'YT', 'IG', 'TW'].map(s => (
                <span
                  key={s}
                  className="w-9 h-9 rounded-full border border-gold-700/40 flex items-center justify-center text-gold-400 text-xs font-display cursor-pointer hover:border-gold-400 hover:text-gold-300 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider mt-10 mb-6" />
        <p className="text-center text-gold-200/30 text-xs font-display tracking-widest">
          © {new Date().getFullYear()} Faith Believers Ministry International. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
