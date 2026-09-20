import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div className="min-h-screen bg-gold-100">
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 px-4 text-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1438232992991-995b671f4466?w=1400&h=400&fit=crop&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy-950/88" />
        <div className="relative z-10">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-3">Reach Out</p>
          <h1 className="font-decorative text-3xl md:text-5xl gold-text">Contact Us</h1>
          <div className="section-divider max-w-[100px] mx-auto mt-5" />
        </div>
      </section>

      {/* Info + Form */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <p className="text-gold-700 text-xs font-display tracking-widest uppercase mb-4">Get in Touch</p>
            <h2 className="font-display text-navy-800 text-2xl mb-6">We'd Love to Hear from You</h2>
            <p className="text-navy-700/70 leading-relaxed mb-8 text-sm">
              Whether you have a question about our services, need pastoral support, want to join a ministry, or simply want to know more about Faith Believers Ministry — we're here for you.
            </p>

            <div className="space-y-5">
              {[
                { icon: '✝', label: 'Senior Pastor', value: 'Revd. Israel Ufuoma Erechovwe' },
                { icon: '🕐', label: 'Sunday Services', value: '8:00 AM & 10:30 AM' },
                { icon: '📖', label: 'Bible Study (Wed)', value: '6:30 PM' },
                { icon: '🙏', label: 'Prayer Night (Fri)', value: '7:00 PM' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 p-4 bg-navy-900/5 rounded-sm border border-gold-400/20">
                  <span className="text-xl mt-0.5">{icon}</span>
                  <div>
                    <p className="text-gold-700 text-[10px] font-display tracking-widest uppercase mb-0.5">{label}</p>
                    <p className="text-navy-800 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              {['Facebook', 'YouTube', 'Instagram', 'Twitter'].map(s => (
                <span key={s} className="w-9 h-9 rounded-full border border-gold-600/40 flex items-center justify-center text-gold-600 text-xs font-display cursor-pointer hover:border-gold-500 hover:text-gold-500 transition-colors" title={s}>
                  {s[0]}
                </span>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="card-navy rounded-sm p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="font-display text-gold-300 text-lg mb-3">Message Sent!</h3>
                <p className="text-gold-200/50 text-sm leading-relaxed mb-6">
                  Thank you for reaching out. A member of our team will get back to you shortly.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }} className="btn-outline-gold px-6 py-2.5 rounded-sm text-sm">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="card-navy rounded-sm p-7 space-y-4">
                <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2">Send a Message</p>
                {[
                  { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                  { key: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                  { key: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key}>
                    <label className="block text-gold-300/60 text-xs font-display tracking-widest uppercase mb-1.5">{label}</label>
                    <input
                      type={type}
                      required
                      value={form[key as keyof typeof form]}
                      onChange={e => update(key, e.target.value)}
                      placeholder={placeholder}
                      className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60 transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-gold-300/60 text-xs font-display tracking-widest uppercase mb-1.5">Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={e => update('message', e.target.value)}
                    rows={5}
                    placeholder="Your message..."
                    className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60 transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold w-full py-3.5 rounded-sm text-sm">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
