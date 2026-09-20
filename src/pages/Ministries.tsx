const ministries = [
  {
    icon: '🙌',
    title: 'Worship & Arts',
    desc: 'Leading the congregation into the presence of God through anointed music, song, and creative arts.',
    img: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&h=380&fit=crop&auto=format',
    lead: 'Worship Team',
  },
  {
    icon: '📖',
    title: 'Bible Study & Discipleship',
    desc: 'Equipping believers in the knowledge of God\'s Word through in-depth, Spirit-led teaching.',
    img: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=380&fit=crop&auto=format',
    lead: 'Revd. Israel Erechovwe',
  },
  {
    icon: '🔥',
    title: 'Youth Ministry',
    desc: 'Raising a generation of bold, Spirit-filled young people who are anchored in God\'s Word.',
    img: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=600&h=380&fit=crop&auto=format',
    lead: 'Youth Leaders',
  },
  {
    icon: '🌹',
    title: 'Women\'s Fellowship',
    desc: 'Empowering women to walk in their God-given identity and purpose with faith, dignity, and love.',
    img: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=380&fit=crop&auto=format',
    lead: 'Women\'s Leader',
  },
  {
    icon: '💪',
    title: 'Men\'s Fellowship',
    desc: 'Building covenant men — leaders in the home, church, and community who bear the heart of Christ.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=380&fit=crop&auto=format',
    lead: 'Men\'s Leader',
  },
  {
    icon: '🌍',
    title: 'Outreach & Missions',
    desc: 'Carrying the Gospel beyond our walls — locally and globally — to every unreached soul.',
    img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=380&fit=crop&auto=format',
    lead: 'Missions Team',
  },
  {
    icon: '🕊',
    title: 'Prayer Ministry',
    desc: 'The engine room of the church — interceding day and night for God\'s will to be done.',
    img: 'https://images.unsplash.com/photo-1473621038790-b778b4750efe?w=600&h=380&fit=crop&auto=format',
    lead: 'Prayer Warriors',
  },
  {
    icon: '🤝',
    title: 'Children\'s Ministry',
    desc: 'Training children in the way of the Lord, so when they grow up, they will not depart from it.',
    img: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=380&fit=crop&auto=format',
    lead: 'Children\'s Team',
  },
];

export default function Ministries() {
  return (
    <div className="min-h-screen bg-gold-100">
      {/* Hero */}
      <section
        className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 text-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1400&h=400&fit=crop&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy-950/88" />
        <div className="relative z-10">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2 sm:mb-3">Serving Together</p>
          <h1 className="font-decorative text-2xl sm:text-4xl md:text-5xl gold-text">Ministries</h1>
          <div className="section-divider max-w-[80px] sm:max-w-[100px] mx-auto mt-4 sm:mt-5" />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-navy-900 py-8 sm:py-12 px-4 text-center">
        <p className="max-w-2xl mx-auto text-gold-200/70 text-xs sm:text-sm md:text-base leading-relaxed">
          Every ministry at Faith Believers exists to fulfil one mission: advancing the Kingdom of God. Discover where God is calling you to serve.
        </p>
      </section>

      {/* Grid */}
      <section className="py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {ministries.map(({ icon, title, desc, img, lead }) => (
            <div key={title} className="card-navy rounded-sm overflow-hidden group flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden">
                  <img src={img} alt={title} className="w-full h-36 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-navy-950/50" />
                  <div className="absolute top-3 left-3 text-2xl">{icon}</div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-display text-gold-300 text-sm mb-2 leading-snug">{title}</h3>
                  <p className="text-gold-200/50 text-xs leading-relaxed mb-3">{desc}</p>
                </div>
              </div>
              <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                <p className="text-gold-500/60 text-[10px] font-display tracking-wider uppercase border-t border-gold-800/10 pt-2">{lead}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-navy-900 py-10 sm:py-14 px-4 text-center border-t border-gold-800/20">
        <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2 sm:mb-3">Find Your Place</p>
        <h2 className="font-display text-gold-200 text-xl sm:text-2xl mb-3 sm:mb-4">Get Involved</h2>
        <p className="text-gold-200/50 max-w-md mx-auto text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 px-2">
          Every member of the body has a role to play. Connect with a ministry today and discover the joy of serving God's people.
        </p>
        <a href="/contact" className="btn-gold px-8 py-3.5 rounded-sm text-xs sm:text-sm inline-block">Connect With Us</a>
      </section>
    </div>
  );
}
