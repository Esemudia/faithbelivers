import { useState } from 'react';

const amounts = [20, 50, 100, 250, 500];

export default function Give() {
  const [amount, setAmount] = useState<number | ''>('');
  const [custom, setCustom] = useState('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');

  const selected = custom ? parseFloat(custom) : amount;

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero */}
      <section
        className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 text-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1400&h=500&fit=crop&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy-950/90" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2 sm:mb-3">Kingdom Investment</p>
          <h1 className="font-decorative text-2xl sm:text-4xl md:text-5xl gold-text mb-3 sm:mb-4">Give Online</h1>
          <p className="text-gold-300/60 font-body italic text-xs sm:text-sm px-2">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
          </p>
          <div className="section-divider max-w-[80px] sm:max-w-[100px] mx-auto mt-4 sm:mt-5" />
        </div>
      </section>

      {/* Why Give */}
      <section className="bg-navy-900 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center">
          {[
            { icon: '🌍', title: 'Fund the Mission', desc: 'Your gift sends the Gospel across borders and supports global missions.' },
            { icon: '🤝', title: 'Care for the Community', desc: 'We use tithes and offerings to serve the poor, the sick, and the broken.' },
            { icon: '✝', title: 'Build the Kingdom', desc: 'Every seed planted advances God\'s Kingdom for generations to come.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="card-navy rounded-sm p-5 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">{icon}</div>
              <h3 className="font-display text-gold-400 text-xs sm:text-sm tracking-widest uppercase mb-2">{title}</h3>
              <p className="text-gold-200/50 text-xs sm:text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Give Form */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <div className="card-navy rounded-sm p-5 sm:p-8">
            <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-5 sm:mb-6">Online Giving</p>

            {/* Frequency */}
            <div className="flex gap-2 mb-6">
              {(['one-time', 'monthly'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFrequency(f)}
                  className={`flex-1 py-2.5 sm:py-3 text-xs font-display tracking-widest uppercase rounded-sm transition-colors ${
                    frequency === f ? 'bg-gold-600 text-navy-950 font-semibold' : 'border border-gold-700/40 text-gold-300 hover:border-gold-400'
                  }`}
                >
                  {f === 'one-time' ? 'One Time' : 'Monthly'}
                </button>
              ))}
            </div>

            {/* Amount Presets: responsive grid */}
            <p className="text-gold-300/60 text-xs font-display tracking-widest uppercase mb-3">Select Amount</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-5">
              {amounts.map(a => (
                <button
                  key={a}
                  onClick={() => { setAmount(a); setCustom(''); }}
                  className={`py-2.5 sm:py-3 text-sm font-display tracking-wide rounded-sm transition-colors ${
                    amount === a && !custom ? 'bg-gold-600 text-navy-950 font-bold' : 'border border-gold-700/40 text-gold-300 hover:border-gold-400'
                  }`}
                >
                  ${a}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-5">
              <label className="block text-gold-300/60 text-xs font-display tracking-widest uppercase mb-2">Custom Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-400 font-display">$</span>
                <input
                  type="number"
                  value={custom}
                  onChange={e => { setCustom(e.target.value); setAmount(''); }}
                  placeholder="Enter amount"
                  className="w-full bg-navy-950 border border-gold-700/30 rounded-sm pl-8 pr-4 py-3 text-gold-200 text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60 transition-colors"
                />
              </div>
            </div>

            {/* Fund Selector */}
            <div className="mb-6">
              <label className="block text-gold-300/60 text-xs font-display tracking-widest uppercase mb-2">Give Toward</label>
              <select className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-sm focus:outline-none focus:border-gold-500/60 transition-colors">
                <option>General Fund (Tithes & Offerings)</option>
                <option>Missions & Outreach</option>
                <option>Building Fund</option>
                <option>Youth Ministry</option>
                <option>Benevolence Fund</option>
              </select>
            </div>

            <button className="btn-gold w-full py-3.5 rounded-sm text-xs sm:text-sm">
              {selected ? `Give $${selected}` : 'Proceed to Give'}
            </button>
          </div>

          {/* Bank Transfer */}
          <div className="mt-6 card-navy rounded-sm p-5 sm:p-6">
            <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-3">Bank Transfer</p>
            <div className="space-y-2 text-xs sm:text-sm text-gold-200/60">
              <p><span className="text-gold-400/80">Account Name:</span> Faith Believers Ministry Int'l</p>
              <p><span className="text-gold-400/80">Contact the church office for direct transfer details.</span></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
