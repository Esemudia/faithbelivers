import { useState } from 'react';
import worshipImg from '../assets/worship-prayer-ministry.jpg';
import pastorImg from '../assets/pastor-israel-erechovwe.jpg';
import ImageModal from '../components/ImageModal';

const testimonies = [
  {
    id: 1,
    name: 'Brother Ejiro M.',
    location: 'Ughelli, Delta State',
    category: 'Healing',
    text: 'I was afflicted with chronic kidney distress and severe body pain for over two years. During the 1st Sunday Anointing Service, Revd. Israel laid hands on me and declared freedom. The pain vanished instantly, and medical scans confirm my kidneys are completely healed! Jesus is Lord!',
    date: 'September 2026',
  },
  {
    id: 2,
    name: 'Sister Blessing O.',
    location: 'Warri, Delta State',
    category: 'Deliverance',
    text: 'For 5 years, my sleep was plagued by nightmares and strange spiritual oppression. I attended the Monday Counseling & Deliverance session with Pastor Israel. Following anointed prayer, total peace was restored to my soul. I am free indeed!',
    date: 'September 2026',
  },
  {
    id: 3,
    name: 'Emmanuel A.',
    location: 'Port Harcourt, Nigeria',
    category: 'Breakthrough',
    text: 'My business was experiencing stagnation and severe debts. I connected with the 3rd Friday Business Men & Women Prayer Hub and sowed into the church building project. Within three weeks, God gave me a major logistics contract that cleared all debts!',
    date: 'August 2026',
  },
  {
    id: 4,
    name: 'Deaconess & Elder P.',
    location: 'Ughelli South LGA',
    category: 'Restoration',
    text: 'Our marriage was on the verge of divorce after years of constant turmoil. Through the pastoral counsel of Pastor Israel and the Word of God taught at Faith Believers Ministry, love and unity have been completely restored in our home.',
    date: 'August 2026',
  },
  {
    id: 5,
    name: 'Favour I.',
    location: 'Benin City, Edo State',
    category: 'Provision',
    text: 'I was unable to pay my final year university tuition fees and was facing expulsion. I submitted a prayer request on this platform. Within 48 hours, an unexpected sponsor paid the full tuition and accommodation. God never fails!',
    date: 'July 2026',
  },
  {
    id: 6,
    name: 'Mama Grace U.',
    location: 'Delta State',
    category: 'Healing',
    text: 'My daughter collapsed with acute respiratory failure. We rushed her to church during the Wednesday fasting & prayer. Pastor Israel and the church held her in prayer. She opened her eyes, breathed normally, and walked back home whole!',
    date: 'July 2026',
  },
];

const categories = ['All', 'Healing', 'Deliverance', 'Breakthrough', 'Restoration', 'Provision'];
const catColors: Record<string, string> = {
  Healing: 'bg-emerald-800/50 text-emerald-300 border border-emerald-500/30',
  Deliverance: 'bg-purple-900/50 text-purple-300 border border-purple-500/30',
  Breakthrough: 'bg-gold-700/40 text-gold-300 border border-gold-500/30',
  Restoration: 'bg-rose-900/40 text-rose-300 border border-rose-500/30',
  Provision: 'bg-blue-900/40 text-blue-300 border border-blue-500/30',
};

export default function Testimonies() {
  const [filter, setFilter] = useState('All');
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = filter === 'All' ? testimonies : testimonies.filter(t => t.category === filter);

  return (
    <div className="min-h-screen bg-navy-950 text-gold-200">
      {/* Hero */}
      <section
        className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 px-4 text-center"
        style={{
          backgroundImage: `url(${worshipImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/95 via-navy-950/88 to-navy-950/98" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2 sm:mb-3">Trophies of Grace</p>
          <h1 className="font-decorative text-2xl sm:text-4xl md:text-5xl gold-text mb-3">Living Testimonies</h1>
          <p className="text-gold-300/80 text-xs sm:text-sm md:text-base font-body italic max-w-lg mx-auto">
            "And they overcame him by the blood of the Lamb, and by the word of their testimony." — Revelation 12:11
          </p>
          <div className="section-divider max-w-[80px] sm:max-w-[100px] mx-auto mt-4 sm:mt-5" />
        </div>
      </section>

      {/* Altar Spotlight Banner */}
      <section className="bg-navy-900 py-6 px-4 sm:px-6 border-b border-gold-800/30">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={worshipImg}
              alt="Altar of Miracles"
              className="w-12 h-12 rounded-full object-cover border border-gold-500/40 cursor-pointer"
              onClick={() => setModalOpen(true)}
            />
            <div>
              <p className="font-display text-gold-300 text-xs sm:text-sm font-semibold">
                God is Still Performing Wonders at the Altar
              </p>
              <p className="text-gold-200/60 text-[11px] sm:text-xs">
                Has God done something miraculous in your life through Faith Believers Ministry?
              </p>
            </div>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 1200, behavior: 'smooth' })}
            className="btn-gold py-2 px-4 text-xs rounded-sm whitespace-nowrap self-start sm:self-auto"
          >
            Share Your Story Below ↓
          </button>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-navy-950 py-4 sm:py-5 px-3 sm:px-4 border-b border-gold-800/20">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-1.5 sm:gap-2 justify-center">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-display tracking-wider uppercase rounded-sm transition-colors ${
                filter === c
                  ? 'bg-gold-600 text-navy-950 font-bold shadow-xs'
                  : 'border border-gold-700/40 text-gold-300 hover:border-gold-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(t => (
            <div
              key={t.id}
              className="card-navy rounded-sm p-6 flex flex-col justify-between border border-gold-800/30 hover:border-gold-500/40 transition-all duration-300"
            >
              <div>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-sm font-display tracking-wider uppercase inline-block mb-3 ${catColors[t.category]}`}>
                  {t.category}
                </span>
                <p className="text-gold-200/80 text-xs sm:text-sm leading-relaxed italic mb-4 font-body">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-gold-800/20 pt-3 text-xs">
                <div>
                  <p className="font-display text-gold-300 font-semibold">{t.name}</p>
                  <p className="text-gold-400/60 text-[11px]">{t.location}</p>
                </div>
                <p className="text-gold-400/50 text-[10px] font-display">{t.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Share Form */}
      <section className="bg-navy-900 py-14 sm:py-20 px-4 sm:px-6 border-t border-gold-800/30">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2">Give God the Glory</p>
            <h2 className="font-display text-gold-200 text-xl sm:text-2xl md:text-3xl">Submit Your Testimony</h2>
            <p className="text-gold-200/60 text-xs sm:text-sm mt-1">Your testimony will encourage thousands of believers</p>
          </div>

          {submitted ? (
            <div className="card-navy rounded-sm p-8 text-center border-2 border-gold-500/40 shadow-xl animate-fade-up">
              <div className="text-5xl mb-4">🙌</div>
              <p className="font-display text-gold-300 mb-2 text-lg sm:text-xl">Thank You for Sharing!</p>
              <p className="text-gold-200/60 text-xs sm:text-sm leading-relaxed mb-6">
                Your testimony glorifies Jesus and builds faith in others. Revd. Israel and the pastoral team celebrate God's goodness in your life!
              </p>
              <button
                onClick={() => { setSubmitted(false); setName(''); setLocation(''); setText(''); }}
                className="btn-outline-gold px-6 py-2.5 rounded-sm text-xs"
              >
                Submit Another Testimony
              </button>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="card-navy rounded-sm p-6 sm:p-8 space-y-4 border border-gold-700/30">
              <div>
                <label className="block text-gold-300/70 text-xs font-display tracking-widest uppercase mb-1.5">Your Name</label>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Brother Ejiro M."
                  required
                  className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-xs sm:text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60"
                />
              </div>

              <div>
                <label className="block text-gold-300/70 text-xs font-display tracking-widest uppercase mb-1.5">City / Location</label>
                <input
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  placeholder="e.g. Ughelli, Delta State"
                  required
                  className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-xs sm:text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60"
                />
              </div>

              <div>
                <label className="block text-gold-300/70 text-xs font-display tracking-widest uppercase mb-1.5">Your Story of God's Power</label>
                <textarea
                  required
                  value={text}
                  onChange={e => setText(e.target.value)}
                  rows={5}
                  placeholder="Describe what God did for you through prayer, the Word, or the anointing..."
                  className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-xs sm:text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60 resize-none"
                />
              </div>

              <button type="submit" className="btn-gold w-full py-3.5 rounded-sm text-xs sm:text-sm font-semibold shadow-lg">
                Submit Testimony to the Church
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <ImageModal
          isOpen={true}
          onClose={() => setModalOpen(false)}
          imageSrc={worshipImg}
          title="Altar Prayer & Deliverance Ministry"
          caption="Where miracles, healings, and life restorations take place regularly"
        />
      )}
    </div>
  );
}
