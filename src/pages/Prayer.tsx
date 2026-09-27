import { useState } from 'react';
import worshipImg from '../assets/worship-prayer-ministry.jpg';
import scheduleFlyer from '../assets/church-programs-schedule.jpg';
import ImageModal from '../components/ImageModal';
import VideoSection from '../components/VideoSection';

const prayerTimes = [
  {
    day: 'Every Monday Morning',
    time: '6:00 AM – 7:30 AM',
    title: 'Breakthrough Morning Prayers',
    desc: 'Command your week with prophetic declarations, breakthrough petitions, and divine protection.',
  },
  {
    day: 'Every Monday',
    time: '10:00 AM – 1:00 PM',
    title: 'Counseling & Deliverance Prayers',
    desc: 'Personal spiritual counseling and targeted deliverance ministry with Revd. Israel Ufuoma Erechovwe.',
  },
  {
    day: 'Every Wednesday',
    time: '10:00 AM – 2:00 PM',
    title: 'Corporate Fasting & Prayer',
    desc: 'Waiting upon the Lord together in fasting, reading the Word, and interceding for families and nations.',
  },
  {
    day: 'Every 3rd Friday',
    time: '12:00 PM – 1:00 PM',
    title: 'Business Men/Women Prayer Hub',
    desc: '1-Hour focused spiritual power prayer for workplace breakthroughs, deals, and economic prosperity.',
  },
];

export default function Prayer() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Healing');
  const [request, setRequest] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [anonymous, setAnonymous] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2 sm:mb-3">Intercession & Deliverance</p>
          <h1 className="font-decorative text-2xl sm:text-4xl md:text-5xl gold-text mb-3 sm:mb-4">Prayer Requests</h1>
          <p className="text-gold-300/80 font-body italic text-xs sm:text-sm px-2">
            "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." — Philippians 4:6
          </p>
          <div className="section-divider max-w-[80px] sm:max-w-[100px] mx-auto mt-4 sm:mt-5" />
        </div>
      </section>

      {/* Main Altar Ministry Banner & Form */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Showcase & Phone support */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className="card-navy rounded-sm overflow-hidden border-2 border-gold-500/40 shadow-xl group cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <img
                src={worshipImg}
                alt="Altar Prayer & Deliverance"
                className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-navy-900 border-t border-gold-800/30">
                <span className="text-[10px] text-gold-400 uppercase tracking-widest font-display block mb-1">
                  Living Altar of Prayer
                </span>
                <h3 className="font-display text-gold-200 text-sm font-semibold">
                  Ministering Grace, Healing & Deliverance
                </h3>
                <p className="text-gold-200/60 text-xs mt-1">
                  Revd. Israel Ufuoma Erechovwe and our intercessors pray over every request submitted. Click to expand photo.
                </p>
              </div>
            </div>

            {/* Direct Urgent Prayer Line */}
            <div className="p-5 bg-navy-900 rounded-sm border border-gold-700/30 text-center">
              <span className="text-2xl mb-2 block">📞</span>
              <h4 className="font-display text-gold-300 text-sm font-semibold mb-1">Direct Pastoral Prayer Line</h4>
              <p className="text-gold-200/60 text-xs mb-3">For emergency prayer or urgent pastoral counsel:</p>
              <a
                href="tel:08035688965"
                className="btn-gold py-2 px-6 rounded-sm text-xs font-display inline-block"
              >
                Call: 08035688965
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="card-navy rounded-sm p-8 sm:p-12 text-center border-2 border-gold-500/40 shadow-xl animate-fade-up">
                <div className="text-5xl mb-4">🕊</div>
                <h2 className="font-display text-gold-300 text-xl sm:text-2xl mb-2">Your Prayer Has Been Received</h2>
                <p className="text-gold-200/70 text-xs sm:text-sm leading-relaxed mb-6 max-w-md mx-auto">
                  Revd. Israel Ufuoma Erechovwe and the intercessory team have received your request. Be confident: <em>"The prayer of a righteous person is powerful and effective."</em> (James 5:16).
                </p>
                <button
                  onClick={() => { setSubmitted(false); setName(''); setPhone(''); setRequest(''); setAnonymous(false); }}
                  className="btn-outline-gold px-6 py-2.5 rounded-sm text-xs"
                >
                  Submit Another Prayer Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-navy rounded-sm p-6 sm:p-8 space-y-5 border border-gold-700/30">
                <div>
                  <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-1">We Are Standing With You</p>
                  <h3 className="font-display text-gold-200 text-lg mb-4">Submit Your Prayer Need</h3>

                  <label className="flex items-center gap-3 cursor-pointer mb-4">
                    <input
                      type="checkbox"
                      checked={anonymous}
                      onChange={e => setAnonymous(e.target.checked)}
                      className="w-4 h-4 accent-gold-600"
                    />
                    <span className="text-gold-200/80 text-xs font-display tracking-wide">Submit anonymously</span>
                  </label>

                  {!anonymous && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gold-300/70 text-xs font-display tracking-widest uppercase mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={e => setName(e.target.value)}
                          placeholder="Your name"
                          className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-xs sm:text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60"
                        />
                      </div>
                      <div>
                        <label className="block text-gold-300/70 text-xs font-display tracking-widest uppercase mb-1.5">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                          placeholder="e.g. 08035688965"
                          className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-xs sm:text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60"
                        />
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <label className="block text-gold-300/70 text-xs font-display tracking-widest uppercase mb-1.5">
                      Need Category
                    </label>
                    <select
                      value={category}
                      onChange={e => setCategory(e.target.value)}
                      className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-xs sm:text-sm focus:outline-none focus:border-gold-500/60"
                    >
                      <option value="Healing">Divine Healing & Health</option>
                      <option value="Deliverance">Deliverance & Spiritual Freedom</option>
                      <option value="Financial">Financial Breakthrough & Business Favour</option>
                      <option value="Family">Family, Marriage & Children</option>
                      <option value="Career">Career, Job & Academic Elevation</option>
                      <option value="Salvation">Salvation & Spiritual Growth</option>
                      <option value="Thanksgiving">Thanksgiving for Answered Prayer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gold-300/70 text-xs font-display tracking-widest uppercase mb-1.5">
                      Your Request in Detail
                    </label>
                    <textarea
                      value={request}
                      onChange={e => setRequest(e.target.value)}
                      placeholder="Pour out your heart... what would you like God to do for you?"
                      rows={5}
                      required
                      className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-xs sm:text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60 resize-none"
                    />
                  </div>
                </div>

                <button type="submit" className="btn-gold w-full py-3.5 rounded-sm text-xs sm:text-sm font-semibold shadow-lg">
                  Submit Prayer Request to the Altar
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Corporate Prayer Schedule */}
      <section className="bg-navy-900 py-12 sm:py-16 px-4 sm:px-6 border-t border-gold-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2">Corporate Intercession</p>
            <h2 className="font-display text-gold-200 text-xl sm:text-2xl md:text-3xl">Official Prayer Assemblies</h2>
            <div className="section-divider max-w-[80px] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {prayerTimes.map(({ day, time, title, desc }) => (
              <div key={title} className="card-navy rounded-sm p-5 border border-gold-800/30">
                <span className="text-gold-500 font-display text-[10px] tracking-widest uppercase block mb-1">
                  {day} · {time}
                </span>
                <h3 className="font-display text-gold-300 text-sm sm:text-base mb-1.5">{title}</h3>
                <p className="text-gold-200/60 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Altar Intercession & Deliverance Videos */}
      <VideoSection
        title="Altar Deliverance & Intercession in Action"
        subtitle="Watch the Holy Spirit at work through fervent prayer, laying on of hands, and deliverance ministration."
        categoryFilter="Deliverance"
        showCategories={false}
        limit={3}
      />

      {/* Modal for Altar Photo */}
      {modalOpen && (
        <ImageModal
          isOpen={true}
          onClose={() => setModalOpen(false)}
          imageSrc={worshipImg}
          title="Altar Prayer & Deliverance Ministry"
          caption="Revd. Israel Ufuoma Erechovwe and the ministry team praying over church members"
        />
      )}
    </div>
  );
}
