import { useState } from 'react';

const testimonies = [
  {
    id: 1,
    name: 'Blessing Okafor',
    location: 'Lagos, Nigeria',
    category: 'Healing',
    text: 'I had been suffering from a chronic illness for seven years. After the prayer team laid hands on me during a Friday prayer night, I felt the power of God move through my body. My next doctor\'s appointment confirmed I was completely healed. To God be all the glory!',
    date: 'September 2026',
  },
  {
    id: 2,
    name: 'Emmanuel Adeyemi',
    location: 'Warri, Nigeria',
    category: 'Salvation',
    text: 'I was living far from God — caught in addiction and hopelessness. A friend invited me to Faith Believers Ministry. The moment Pastor Israel preached on Freedom in Christ, I knew this was my moment. I gave my life to Jesus that Sunday and everything changed.',
    date: 'August 2026',
  },
  {
    id: 3,
    name: 'Grace Nwosu',
    location: 'Abuja, Nigeria',
    category: 'Breakthrough',
    text: 'After three years of unemployment, I made a vow to God and sowed into the ministry during the Faith Conference. Within two weeks I received not one but three job offers. God is faithful! My family will never stop testifying.',
    date: 'August 2026',
  },
  {
    id: 4,
    name: 'Samuel Peters',
    location: 'Port Harcourt, Nigeria',
    category: 'Restoration',
    text: 'My marriage was on the verge of collapse. My wife and I attended a couples\' retreat at the church and through the Word and counselling, God restored our home. We have been walking stronger together ever since.',
    date: 'July 2026',
  },
  {
    id: 5,
    name: 'Favour Ikenna',
    location: 'Delta State, Nigeria',
    category: 'Provision',
    text: 'I could not pay my children\'s school fees and was at my wit\'s end. I brought my needs to God in prayer and the very next day an anonymous gift arrived that covered the full amount. I wept. God sees us.',
    date: 'July 2026',
  },
  {
    id: 6,
    name: 'Joy Ubong',
    location: 'Edo State, Nigeria',
    category: 'Healing',
    text: 'My daughter was diagnosed with a condition the doctors said was incurable. We refused that report. The church prayed with us for months. Today, she is completely well and running around. The Great Physician is still at work.',
    date: 'June 2026',
  },
];

const categories = ['All', 'Healing', 'Salvation', 'Breakthrough', 'Restoration', 'Provision'];
const catColors: Record<string, string> = {
  Healing: 'bg-emerald-800/40 text-emerald-300',
  Salvation: 'bg-gold-700/30 text-gold-300',
  Breakthrough: 'bg-navy-700 text-gold-300',
  Restoration: 'bg-mahogany/40 text-red-300',
  Provision: 'bg-gold-800/30 text-gold-400',
};

export default function Testimonies() {
  const [filter, setFilter] = useState('All');
  const [sharing, setSharing] = useState(false);
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const filtered = filter === 'All' ? testimonies : testimonies.filter(t => t.category === filter);

  return (
    <div className="min-h-screen bg-gold-100">
      {/* Hero */}
      <section
        className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 text-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551038247-3d935814b8b3?w=1400&h=400&fit=crop&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy-950/88" />
        <div className="relative z-10">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2 sm:mb-3">His Faithfulness</p>
          <h1 className="font-decorative text-2xl sm:text-4xl md:text-5xl gold-text">Testimonies</h1>
          <div className="section-divider max-w-[80px] sm:max-w-[100px] mx-auto mt-4 sm:mt-5" />
        </div>
      </section>

      {/* Filter */}
      <section className="bg-navy-900 py-4 sm:py-5 px-3 sm:px-4 border-b border-gold-800/20">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-1.5 sm:gap-2 justify-center">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-display tracking-wider uppercase rounded-sm transition-colors ${
                filter === c ? 'bg-gold-600 text-navy-950 font-semibold shadow-xs' : 'border border-gold-700/40 text-gold-300 hover:border-gold-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5">
          {filtered.map(t => (
            <div key={t.id} className="card-navy rounded-sm p-4 sm:p-6 break-inside-avoid">
              <span className={`text-[10px] px-2.5 py-0.5 rounded-sm font-display tracking-wider uppercase inline-block mb-2 sm:mb-3 ${catColors[t.category]}`}>
                {t.category}
              </span>
              <p className="text-gold-200/70 text-xs sm:text-sm leading-relaxed italic mb-4 sm:mb-5">"{t.text}"</p>
              <div className="flex items-center justify-between border-t border-gold-800/10 pt-3">
                <div>
                  <p className="font-display text-gold-400 text-xs tracking-wide">{t.name}</p>
                  <p className="text-gold-200/30 text-[10px]">{t.location}</p>
                </div>
                <p className="text-gold-200/30 text-[10px]">{t.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Share Form */}
      <section className="bg-navy-900 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2">Your Story Matters</p>
            <h2 className="font-display text-gold-200 text-xl sm:text-2xl">Share Your Testimony</h2>
          </div>
          {submitted ? (
            <div className="card-navy rounded-sm p-6 sm:p-8 text-center">
              <div className="text-4xl mb-4">🙌</div>
              <p className="font-display text-gold-300 mb-2 text-base sm:text-lg">Thank You!</p>
              <p className="text-gold-200/50 text-xs sm:text-sm leading-relaxed">
                Your testimony glorifies God and encourages others. We'll review and share it shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="card-navy rounded-sm p-5 sm:p-7 space-y-4">
              <div>
                <label className="block text-gold-300/60 text-xs font-display tracking-widest uppercase mb-2">Your Name</label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Blessing O." className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60 transition-colors" />
              </div>
              <div>
                <label className="block text-gold-300/60 text-xs font-display tracking-widest uppercase mb-2">Your Testimony</label>
                <textarea required value={text} onChange={e => setText(e.target.value)} rows={5} placeholder="Tell us what God has done..." className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60 transition-colors resize-none" />
              </div>
              <button type="submit" className="btn-gold w-full py-3.5 rounded-sm text-xs sm:text-sm">Submit Testimony</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
