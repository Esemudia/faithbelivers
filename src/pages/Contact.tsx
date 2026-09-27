import { useState } from 'react';
import cathedralImg from '../assets/church-cathedral-exterior.jpg';
import pastorImg from '../assets/pastor-israel-erechovwe.jpg';
import pastorFlyer from '../assets/pastor-worship-flyer.jpg';
import ImageModal from '../components/ImageModal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div className="min-h-screen bg-navy-950 text-gold-200">
      {/* Hero */}
      <section
        className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 px-4 text-center"
        style={{
          backgroundImage: `url(${cathedralImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/95 via-navy-950/88 to-navy-950/98" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2 sm:mb-3">Reach Out to Us</p>
          <h1 className="font-decorative text-2xl sm:text-4xl md:text-5xl gold-text mb-3">Contact the Ministry</h1>
          <p className="text-gold-300/80 text-xs sm:text-sm font-body italic max-w-lg mx-auto">
            "Faith Believers Ministry International (Freedom in Christ) — We are here to pray with you and walk beside you."
          </p>
          <div className="section-divider max-w-[80px] sm:max-w-[100px] mx-auto mt-4 sm:mt-5" />
        </div>
      </section>

      {/* Info + Form */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2">Church Details</p>
              <h2 className="font-display text-gold-200 text-xl sm:text-2xl mb-3">We Would Love to Hear From You</h2>
              <p className="text-gold-200/70 text-xs sm:text-sm leading-relaxed">
                Whether you need pastoral counseling, desire to invite Pastor Israel, want to join a workforce department, or enquire about our services, reach out today.
              </p>
            </div>

            {/* Pastor Israel Card with real photo */}
            <div className="card-navy rounded-sm p-4 border border-gold-600/30 flex items-center gap-4 bg-navy-900">
              <img
                src={pastorImg}
                alt="Revd. Israel Ufuoma Erechovwe"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-sm object-cover border border-gold-500/40 shrink-0 cursor-pointer shadow-md"
                onClick={() => setModalOpen(true)}
              />
              <div>
                <p className="text-gold-400 font-display text-[10px] uppercase tracking-widest">Lead Pastor & Founder</p>
                <h3 className="font-display text-gold-200 text-sm sm:text-base font-semibold">
                  Revd. Israel Ufuoma Erechovwe
                </h3>
                <p className="text-gold-200/60 text-xs mt-0.5">
                  Available for pastoral counseling every Monday 10:00 AM – 1:00 PM.
                </p>
              </div>
            </div>

            {/* Quick Contact Points */}
            <div className="space-y-3">
              {[
                {
                  icon: '📍',
                  label: 'Sanctuary Address',
                  value: 'KM 365, Ughelli/Patani Expressway, By Solace Hotel, Ughelli, Delta State, Nigeria',
                },
                {
                  icon: '📞',
                  label: 'Direct Phone & WhatsApp',
                  value: '08035688965',
                  isPhone: true,
                },
                {
                  icon: '✉️',
                  label: 'Email Enquiries',
                  value: 'faithbelieversministry@gmail.com',
                },
                {
                  icon: '🕐',
                  label: 'Primary Worship Times',
                  value: 'Sun 8:00–10:00 AM · Mon 10:00 AM–1:00 PM · Wed 10:00 AM–2:00 PM',
                },
              ].map(({ icon, label, value, isPhone }) => (
                <div key={label} className="p-3.5 bg-navy-900 rounded-sm border border-gold-800/30 flex items-start gap-3">
                  <span className="text-lg mt-0.5">{icon}</span>
                  <div>
                    <p className="text-gold-400 text-[10px] font-display uppercase tracking-widest mb-0.5">{label}</p>
                    {isPhone ? (
                      <a href="tel:08035688965" className="text-gold-200 text-xs sm:text-sm font-semibold hover:text-gold-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-gold-200/90 text-xs sm:text-sm font-medium leading-snug">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-outline-gold w-full py-2.5 text-xs rounded-sm text-center font-display"
              >
                View Pastor & Schedule Flyer
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="card-navy rounded-sm p-8 sm:p-12 text-center border-2 border-gold-500/40 shadow-xl animate-fade-up">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="font-display text-gold-300 text-xl mb-2">Message Successfully Sent</h3>
                <p className="text-gold-200/60 text-xs sm:text-sm leading-relaxed mb-6 max-w-md mx-auto">
                  Thank you for reaching out to Faith Believers Ministry Int'l. A member of our pastoral office will respond to you promptly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', subject: '', message: '' }); }}
                  className="btn-outline-gold px-6 py-2.5 rounded-sm text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="card-navy rounded-sm p-6 sm:p-8 space-y-4 border border-gold-700/30">
                <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-1">Online Message Form</p>
                <h3 className="font-display text-gold-200 text-lg mb-4">Send Us a Direct Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gold-300/70 text-xs font-display tracking-widest uppercase mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => update('name', e.target.value)}
                      placeholder="Your full name"
                      className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-xs sm:text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60"
                    />
                  </div>
                  <div>
                    <label className="block text-gold-300/70 text-xs font-display tracking-widest uppercase mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => update('phone', e.target.value)}
                      placeholder="e.g. 08035688965"
                      className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-xs sm:text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gold-300/70 text-xs font-display tracking-widest uppercase mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => update('email', e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-xs sm:text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60"
                    />
                  </div>
                  <div>
                    <label className="block text-gold-300/70 text-xs font-display tracking-widest uppercase mb-1.5">Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={e => update('subject', e.target.value)}
                      placeholder="e.g. Pastoral Counseling / Inquiry"
                      className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-xs sm:text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gold-300/70 text-xs font-display tracking-widest uppercase mb-1.5">Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={e => update('message', e.target.value)}
                    rows={5}
                    placeholder="How can we assist you in the Lord?"
                    className="w-full bg-navy-950 border border-gold-700/30 rounded-sm px-4 py-3 text-gold-200 text-xs sm:text-sm placeholder-gold-200/20 focus:outline-none focus:border-gold-500/60 resize-none"
                  />
                </div>

                <button type="submit" className="btn-gold w-full py-3.5 rounded-sm text-xs sm:text-sm font-semibold shadow-lg">
                  Send Message to Church Office
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox / Modal */}
      {modalOpen && (
        <ImageModal
          isOpen={true}
          onClose={() => setModalOpen(false)}
          imageSrc={pastorFlyer}
          title="Revd. Israel Ufuoma Erechovwe — Official Pastoral Notice"
          caption="KM 365 Ughelli/Patani Expressway, By Solace Hotel, Ughelli, Delta State"
        />
      )}
    </div>
  );
}
