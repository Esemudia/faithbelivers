import { useState } from 'react';
import cathedralImg from '../assets/church-cathedral-exterior.jpg';
import structureImg from '../assets/church-building-structure.jpg';
import masterplanImg from '../assets/church-campus-masterplan.jpg';
import ImageModal from '../components/ImageModal';

const amounts = [5000, 10000, 25000, 50000, 100000];

export default function Give() {
  const [amount, setAmount] = useState<number | ''>(25000);
  const [custom, setCustom] = useState('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [fund, setFund] = useState('Building Project');
  const [modalOpen, setModalOpen] = useState(false);

  const selected = custom ? parseFloat(custom) : amount;

  return (
    <div className="min-h-screen bg-navy-950 text-gold-200">
      {/* Hero */}
      <section
        className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 px-4 text-center"
        style={{
          backgroundImage: `url(${cathedralImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/95 via-navy-950/88 to-navy-950/98" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2 sm:mb-3">Kingdom Partnership</p>
          <h1 className="font-decorative text-2xl sm:text-4xl md:text-5xl gold-text mb-3 sm:mb-4">Online Giving</h1>
          <p className="text-gold-300/80 font-body italic text-xs sm:text-sm px-2">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
          </p>
          <div className="section-divider max-w-[80px] sm:max-w-[100px] mx-auto mt-4 sm:mt-5" />
        </div>
      </section>

      {/* Building Fund Spotlight Banner */}
      <section className="bg-navy-900 py-10 sm:py-14 px-4 sm:px-6 border-b border-gold-800/30">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div
            className="md:col-span-5 rounded-sm overflow-hidden border-2 border-gold-500/40 shadow-xl group cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <img
              src={cathedralImg}
              alt="Mega Church Sanctuary"
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-3 bg-navy-950 flex items-center justify-between text-xs text-gold-300">
              <span className="font-display">5,000+ Seater Cathedral Complex</span>
              <span className="text-[10px] text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded-sm">View Blueprint</span>
            </div>
          </div>

          <div className="md:col-span-7">
            <span className="text-[10px] font-display uppercase tracking-widest px-2.5 py-1 bg-gold-600/20 text-gold-300 border border-gold-500/30 rounded-sm inline-block mb-2">
              Special Building Project Focus
            </span>
            <h2 className="font-display text-gold-200 text-xl sm:text-2xl mb-2">
              Partner with the Mega Church Sanctuary Project
            </h2>
            <p className="text-gold-200/70 text-xs sm:text-sm leading-relaxed mb-4">
              We invite believers, partners, and friends around the globe to sow into the building of our 5,000+ seating capacity Cathedral, Conference Halls, Children's auditoriums, and community campus in Ughelli, Delta State. Every seed you sow advances God's work for generations.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => { setFund('Building Project'); window.scrollTo({ top: 600, behavior: 'smooth' }); }}
                className="btn-gold py-2 px-5 text-xs rounded-sm"
              >
                Sow into Building Project
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="btn-outline-gold py-2 px-5 text-xs rounded-sm"
              >
                Inspect Architectural Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Give Form & Bank Details */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Form */}
          <div className="md:col-span-7 card-navy rounded-sm p-6 sm:p-8 border border-gold-700/30">
            <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-4">Online Giving Form</p>

            {/* Frequency */}
            <div className="flex gap-2 mb-5">
              {(['one-time', 'monthly'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFrequency(f)}
                  className={`flex-1 py-2 text-xs font-display tracking-widest uppercase rounded-sm transition-colors ${
                    frequency === f ? 'bg-gold-600 text-navy-950 font-bold' : 'border border-gold-700/40 text-gold-300 hover:border-gold-400'
                  }`}
                >
                  {f === 'one-time' ? 'One Time' : 'Monthly Pledge'}
                </button>
              ))}
            </div>

            {/* Fund Selector */}
            <div className="mb-5">
              <label className="block text-gold-300/70 text-xs font-display tracking-widest uppercase mb-1.5">Designate Giving To</label>
              <select
                value={fund}
                onChange={e => setFund(e.target.value)}
                className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-2.5 text-gold-200 text-xs sm:text-sm focus:outline-none focus:border-gold-500/60"
              >
                <option value="Building Project">Mega Church Building Project (5,000+ Seater)</option>
                <option value="Tithes & Offering">General Fund (Tithes & Offerings)</option>
                <option value="Missions & Evangelism">Missions & Community Evangelism</option>
                <option value="Welfare & Benevolence">Welfare & Benevolence (Widows & Needy)</option>
                <option value="Youth & Children">Youth & Children's Ministry</option>
              </select>
            </div>

            {/* Amount Presets */}
            <p className="text-gold-300/70 text-xs font-display tracking-widest uppercase mb-2">Preset Amounts (₦ / $)</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-4">
              {amounts.map(a => (
                <button
                  key={a}
                  onClick={() => { setAmount(a); setCustom(''); }}
                  className={`py-2 text-xs font-display tracking-wide rounded-sm transition-colors ${
                    amount === a && !custom ? 'bg-gold-600 text-navy-950 font-bold' : 'border border-gold-700/40 text-gold-300 hover:border-gold-400'
                  }`}
                >
                  ₦{a.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-5">
              <label className="block text-gold-300/70 text-xs font-display tracking-widest uppercase mb-1.5">Custom Amount</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-400 font-display text-sm">₦/$</span>
                <input
                  type="number"
                  value={custom}
                  onChange={e => { setCustom(e.target.value); setAmount(''); }}
                  placeholder="Enter custom amount"
                  className="w-full bg-navy-950 border border-gold-700/30 rounded-sm pl-12 pr-4 py-2.5 text-gold-200 text-xs sm:text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60"
                />
              </div>
            </div>

            <button className="btn-gold w-full py-3.5 rounded-sm text-xs sm:text-sm font-semibold shadow-lg">
              {selected ? `Proceed to Give ₦${selected.toLocaleString()} to ${fund}` : 'Proceed to Give'}
            </button>
          </div>

          {/* Direct Bank Wire & Pastoral Contact */}
          <div className="md:col-span-5 space-y-5">
            <div className="card-navy rounded-sm p-6 border border-gold-700/30">
              <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-3">Direct Bank Transfer</p>
              <div className="space-y-3 text-xs text-gold-200/80">
                <div className="p-3 bg-navy-950 rounded-sm border border-gold-800/30">
                  <p className="text-[10px] text-gold-400 uppercase tracking-widest mb-0.5">Account Name</p>
                  <p className="font-semibold text-gold-200 text-sm">Faith Believers Ministry Int'l</p>
                </div>

                <div className="p-3 bg-navy-950 rounded-sm border border-gold-800/30">
                  <p className="text-[10px] text-gold-400 uppercase tracking-widest mb-0.5">Church Enquiries & Confirmation</p>
                  <p className="font-semibold text-gold-200 text-sm">08035688965</p>
                  <p className="text-[11px] text-gold-400/70 mt-1">Please send transaction confirmation via WhatsApp/SMS to this number.</p>
                </div>

                <div className="p-3 bg-navy-950 rounded-sm border border-gold-800/30">
                  <p className="text-[10px] text-gold-400 uppercase tracking-widest mb-0.5">Physical Church Office</p>
                  <p className="text-gold-200/90 text-xs">KM 365, Ughelli/Patani Express Way, By Solace Hotel, Ughelli, Delta State, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-navy-900 rounded-sm border border-gold-800/20 text-center">
              <p className="text-xs text-gold-300 italic font-body">
                "Building people, strengthening faith, raising leaders, and advancing the Kingdom of God."
              </p>
              <p className="text-[10px] text-gold-500 font-display uppercase tracking-widest mt-1">
                Revd. Israel Ufuoma Erechovwe · Lead Pastor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Blueprint */}
      {modalOpen && (
        <ImageModal
          isOpen={true}
          onClose={() => setModalOpen(false)}
          imageSrc={structureImg}
          title="Mega Church Design Structure & Facilities Blueprint"
          caption="5,000+ Seating Main Sanctuary, Multi-Purpose Halls, Classrooms & Guest Facilities"
        />
      )}
    </div>
  );
}
