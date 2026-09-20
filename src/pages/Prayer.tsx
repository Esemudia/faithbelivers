import { useState } from 'react';

export default function Prayer() {
  const [name, setName] = useState('');
  const [request, setRequest] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [anonymous, setAnonymous] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 px-4 text-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1473621038790-b778b4750efe?w=1400&h=500&fit=crop&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy-950/90" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-3">Intercession</p>
          <h1 className="font-decorative text-3xl md:text-5xl gold-text mb-4">Prayer Request</h1>
          <p className="text-gold-300/60 font-body italic text-sm">"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." — Philippians 4:6</p>
          <div className="section-divider max-w-[100px] mx-auto mt-5" />
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="card-navy rounded-sm p-10 text-center animate-glow">
              <div className="text-5xl mb-5">🕊</div>
              <h2 className="font-display text-gold-300 text-xl mb-3">Your Prayer Has Been Received</h2>
              <p className="text-gold-200/60 text-sm leading-relaxed mb-6">
                Our prayer team will lift your request before the throne of grace. Be encouraged — God hears every prayer.
              </p>
              <button
                onClick={() => { setSubmitted(false); setName(''); setRequest(''); setAnonymous(false); }}
                className="btn-outline-gold px-6 py-2.5 rounded-sm text-sm"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-navy rounded-sm p-8 space-y-6">
              <div>
                <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-6">Submit Your Prayer Request</p>
                <label className="flex items-center gap-3 cursor-pointer mb-5">
                  <input
                    type="checkbox"
                    checked={anonymous}
                    onChange={e => setAnonymous(e.target.checked)}
                    className="w-4 h-4 accent-gold-600"
                  />
                  <span className="text-gold-200/70 text-sm font-display tracking-wide">Submit anonymously</span>
                </label>
                {!anonymous && (
                  <div className="mb-4">
                    <label className="block text-gold-300/60 text-xs font-display tracking-widest uppercase mb-2">Your Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60 transition-colors"
                    />
                  </div>
                )}
              </div>
              <div>
                <label className="block text-gold-300/60 text-xs font-display tracking-widest uppercase mb-2">Prayer Request</label>
                <textarea
                  value={request}
                  onChange={e => setRequest(e.target.value)}
                  placeholder="Share your prayer request..."
                  rows={6}
                  required
                  className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60 transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-gold w-full py-3.5 rounded-sm text-sm">
                Submit Prayer Request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Prayer Times */}
      <section className="bg-navy-900 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-3">Corporate Prayer</p>
          <h2 className="font-display text-gold-200 text-2xl mb-8">Join Us in Prayer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { day: 'Friday', time: '7:00 PM', title: 'Night of Prayer', desc: 'Corporate intercession for the church and nations.' },
              { day: 'Daily', time: '6:00 AM', title: 'Morning Watch', desc: 'Start each day seeking God\'s face together.' },
            ].map(({ day, time, title, desc }) => (
              <div key={title} className="card-navy rounded-sm p-6 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-gold-500 font-display text-xs tracking-widest uppercase">{day} · {time}</span>
                </div>
                <h3 className="font-display text-gold-300 text-base mb-2">{title}</h3>
                <p className="text-gold-200/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
