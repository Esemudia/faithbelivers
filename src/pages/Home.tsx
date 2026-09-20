import { Link } from 'react-router';
import logoImg from '../assets/logo1.png';

const highlights = [
  { icon: '✝', title: 'Sunday Worship', desc: '8:00 AM & 10:30 AM — Join us in spirit and truth.' },
  { icon: '📖', title: 'Bible Study', desc: 'Wednesdays at 6:30 PM — Dive deep into the Word.' },
  { icon: '🕊', title: 'Prayer Night', desc: 'Fridays at 7:00 PM — Interceding for the nations.' },
];

const verses = [
  { ref: 'John 3:16', text: 'For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life.' },
  { ref: 'Philippians 4:13', text: 'I can do all things through Christ who strengthens me.' },
  { ref: 'Jeremiah 29:11', text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1600&h=900&fit=crop&auto=format)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 px-4 max-w-4xl mx-auto animate-fade-up">
          <img src={logoImg} alt="Faith Believers Ministry" className="h-40 md:h-56 w-auto mx-auto mb-8 drop-shadow-2xl" />
          <h1 className="font-decorative text-3xl md:text-5xl lg:text-6xl gold-text mb-4 leading-tight">
            Faith Believers Ministry
          </h1>
          <p className="font-display text-gold-300 text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            International
          </p>
          <div className="section-divider max-w-xs mx-auto mb-8" />
          <p className="text-gold-200 text-lg md:text-xl font-body italic mb-2">
            Building Faith. Spreading Love. Changing Lives.
          </p>
          <p className="text-gold-400/70 text-sm font-body italic mb-12">
            "For we walk by faith, not by sight." — 2 Corinthians 5:7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/live" className="btn-gold px-8 py-3.5 rounded-sm text-sm inline-block">
              Watch Live
            </Link>
            <Link to="/sermons" className="btn-outline-gold px-8 py-3.5 rounded-sm text-sm inline-block">
              Watch Sermons
            </Link>
          </div>
        </div>
        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-gold-400/50 text-xs font-display tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold-400/50 to-transparent" />
        </div>
      </section>

      {/* Service Times */}
      <section className="bg-navy-900 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2">Join Us</p>
            <h2 className="text-2xl md:text-3xl font-display text-gold-200">Service Schedule</h2>
            <div className="section-divider max-w-[120px] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map(({ icon, title, desc }) => (
              <div key={title} className="card-navy rounded-sm p-6 text-center">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-display text-gold-400 text-base mb-2 tracking-wide">{title}</h3>
                <p className="text-gold-200/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture Carousel */}
      <section className="bg-gold-100 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-navy-800/40 text-xs font-display tracking-widest uppercase mb-2">The Word</p>
          <h2 className="text-2xl md:text-3xl font-display text-navy-800 mb-10">Scripture of the Day</h2>
          <div className="bg-navy-900 rounded-sm p-8 md:p-12 border border-gold-600/40 animate-glow">
            <p className="text-gold-300 text-xl md:text-2xl italic leading-relaxed mb-6">
              "{verses[0].text}"
            </p>
            <p className="font-display text-gold-500 text-sm tracking-widest">— {verses[0].ref}</p>
          </div>
        </div>
      </section>

      {/* About Banner */}
      <section
        className="relative py-20 px-4 text-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551038247-3d935814b8b3?w=1400&h=600&fit=crop&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-3">Our Pastor</p>
          <h2 className="font-display text-gold-200 text-2xl md:text-4xl mb-4">
            Revd. Israel Ufuoma Erechovwe
          </h2>
          <p className="text-gold-300/70 font-body italic mb-6 text-sm">Lead Pastor, Faith Believers Ministry International</p>
          <p className="text-gold-200/70 mb-8 leading-relaxed text-sm">
            A Christian minister, preacher, and teacher of the Word, called to build faith, spread love, and change lives through the power of the Gospel.
          </p>
          <Link to="/about" className="btn-outline-gold px-8 py-3 rounded-sm text-sm inline-block">
            Learn More
          </Link>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-navy-950 py-12 px-4 text-center border-t border-gold-800/20">
        <div className="max-w-2xl mx-auto">
          <p className="text-gold-400/70 text-xs font-display tracking-widest uppercase mb-3">Support the Ministry</p>
          <h2 className="font-display text-gold-300 text-xl md:text-2xl mb-6">Your Giving Changes Lives</h2>
          <Link to="/give" className="btn-gold px-10 py-3.5 rounded-sm text-sm inline-block">
            Give Now
          </Link>
        </div>
      </section>
    </div>
  );
}
