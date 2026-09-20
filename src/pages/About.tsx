export default function About() {
  return (
    <div className="min-h-screen bg-gold-100">
      {/* Page Hero */}
      <section
        className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 text-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1438232992991-995b671f4466?w=1400&h=500&fit=crop&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy-950/85" />
        <div className="relative z-10">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2 sm:mb-3">Who We Are</p>
          <h1 className="font-decorative text-2xl sm:text-4xl md:text-5xl gold-text">About Us</h1>
          <div className="section-divider max-w-[80px] sm:max-w-[100px] mx-auto mt-4 sm:mt-5" />
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gold-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="text-gold-700 text-xs font-display tracking-widest uppercase mb-2 sm:mb-3">Our Mission</p>
            <h2 className="font-display text-navy-800 text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-5 leading-snug">
              Building Faith. Spreading Love. Changing Lives.
            </h2>
            <p className="text-navy-700/70 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">
              Faith Believers Ministry International (also known as Freedom in Christ) is a Spirit-filled, Word-based church committed to the Great Commission. We exist to make disciples of all nations, equipping believers to walk in the fullness of God's purposes.
            </p>
            <p className="text-navy-700/70 leading-relaxed text-xs sm:text-sm">
              Founded on the unshakeable truth of Scripture, our community gathers to worship, grow, serve, and go — carrying the love of Christ into every corner of the earth.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=700&h=500&fit=crop&auto=format"
            alt="Congregation worshipping together"
            className="rounded-sm w-full max-h-[320px] sm:max-h-[400px] md:max-h-none object-cover shadow-xl border border-gold-400/20"
          />
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-900 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2">What We Believe</p>
            <h2 className="font-display text-gold-200 text-xl sm:text-2xl md:text-3xl">Our Core Values</h2>
            <div className="section-divider max-w-[80px] sm:max-w-[100px] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { icon: '✝', label: 'Faith', desc: 'We anchor every decision in the Word of God.' },
              { icon: '❤', label: 'Love', desc: 'We serve one another and our community with Christ-like love.' },
              { icon: '🔥', label: 'Worship', desc: 'We pursue God\'s presence in spirit and in truth.' },
              { icon: '🕊', label: 'Freedom', desc: 'We proclaim freedom in Christ for every soul.' },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="card-navy rounded-sm p-5 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl mb-3">{icon}</div>
                <h3 className="font-display text-gold-400 text-xs sm:text-sm tracking-widest uppercase mb-2">{label}</h3>
                <p className="text-gold-200/50 text-xs sm:text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pastor */}
      <section className="bg-gold-100 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=700&fit=crop&auto=format"
            alt="Lead Pastor"
            className="rounded-sm w-full max-h-[380px] sm:max-h-[460px] md:max-h-none object-cover object-top shadow-xl border border-gold-400/30 order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <p className="text-gold-700 text-xs font-display tracking-widest uppercase mb-2 sm:mb-3">Lead Pastor</p>
            <h2 className="font-display text-navy-800 text-xl sm:text-2xl md:text-3xl mb-2">Revd. Israel Ufuoma Erechovwe</h2>
            <p className="text-gold-600 font-display text-xs tracking-widest uppercase mb-4 sm:mb-5">Faith Believers Ministry Int'l</p>
            <p className="text-navy-700/70 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">
              Revd. Israel Ufuoma Erechovwe is a Christian minister, preacher, and teacher of the Word of God. Called and consecrated to serve the body of Christ, he leads Faith Believers Ministry International with a burning passion for souls and an uncompromising commitment to Scripture.
            </p>
            <p className="text-navy-700/70 leading-relaxed text-xs sm:text-sm">
              Through anointed preaching, teaching, and pastoral care, he equips believers to walk in the freedom Christ has won for them — bold in faith, rooted in love, and ready to impact generations.
            </p>
            <blockquote className="mt-5 sm:mt-6 border-l-2 border-gold-500 pl-4 italic text-navy-600/70 text-xs sm:text-sm">
              "The calling of God is not a burden — it is a privilege to carry the light of Christ into a world that desperately needs it."
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
