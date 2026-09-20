const events = [
  {
    id: 1,
    title: 'Annual Faith Conference 2026',
    date: 'October 3–5, 2026',
    time: '9:00 AM Daily',
    location: 'Faith Believers Ministry Auditorium',
    category: 'Conference',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&h=420&fit=crop&auto=format',
    featured: true,
  },
  {
    id: 2,
    title: 'Women\'s Fellowship Retreat',
    date: 'October 12, 2026',
    time: '10:00 AM',
    location: 'Church Hall',
    category: 'Fellowship',
    img: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=380&fit=crop&auto=format',
    featured: false,
  },
  {
    id: 3,
    title: 'Youth Night of Power',
    date: 'October 18, 2026',
    time: '6:00 PM',
    location: 'Main Sanctuary',
    category: 'Youth',
    img: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=600&h=380&fit=crop&auto=format',
    featured: false,
  },
  {
    id: 4,
    title: 'Community Outreach Day',
    date: 'October 25, 2026',
    time: '8:00 AM',
    location: 'Community Centre',
    category: 'Outreach',
    img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=380&fit=crop&auto=format',
    featured: false,
  },
  {
    id: 5,
    title: 'Men\'s Prayer Breakfast',
    date: 'November 1, 2026',
    time: '7:00 AM',
    location: 'Church Hall',
    category: 'Prayer',
    img: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=380&fit=crop&auto=format',
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Conference: 'bg-gold-600 text-navy-950',
  Fellowship: 'bg-navy-700 text-gold-300 border border-gold-700/40',
  Youth: 'bg-mahogany text-gold-200',
  Outreach: 'bg-navy-700 text-gold-300 border border-gold-700/40',
  Prayer: 'bg-navy-700 text-gold-300 border border-gold-700/40',
};

export default function Events() {
  const featured = events.find(e => e.featured);
  const rest = events.filter(e => !e.featured);

  return (
    <div className="min-h-screen bg-gold-100">
      {/* Hero */}
      <section
        className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 text-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1511578314322-379afb476865?w=1400&h=400&fit=crop&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy-950/88" />
        <div className="relative z-10">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2 sm:mb-3">What's Happening</p>
          <h1 className="font-decorative text-2xl sm:text-4xl md:text-5xl gold-text">Events</h1>
          <div className="section-divider max-w-[80px] sm:max-w-[100px] mx-auto mt-4 sm:mt-5" />
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="bg-navy-900 py-10 sm:py-14 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-4 sm:mb-6">Featured Event</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-gold-600/30">
              <img src={featured.img} alt={featured.title} className="w-full h-52 sm:h-64 md:h-auto object-cover" />
              <div className="bg-navy-800 p-6 sm:p-8 flex flex-col justify-center">
                <span className={`text-[10px] px-3 py-1 rounded-sm font-display tracking-wider uppercase inline-block mb-3 sm:mb-4 w-fit ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
                <h2 className="font-display text-gold-200 text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">{featured.title}</h2>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gold-200/60 mb-5 sm:mb-6">
                  <p>📅 {featured.date}</p>
                  <p>🕐 {featured.time}</p>
                  <p>📍 {featured.location}</p>
                </div>
                <button className="btn-gold px-6 py-2.5 rounded-sm text-xs sm:text-sm w-full sm:w-fit">Register Now</button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Events */}
      <section className="py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-navy-800 text-lg sm:text-xl mb-6 sm:mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {rest.map(event => (
              <div key={event.id} className="card-navy rounded-sm overflow-hidden group flex flex-col">
                <img src={event.img} alt={event.title} className="w-full h-40 sm:h-44 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-sm font-display tracking-wider uppercase inline-block mb-2 sm:mb-3 ${categoryColors[event.category]}`}>
                      {event.category}
                    </span>
                    <h3 className="font-display text-gold-200 text-sm mb-2 sm:mb-3">{event.title}</h3>
                    <div className="space-y-1 text-xs text-gold-200/50 mb-4">
                      <p>📅 {event.date} · {event.time}</p>
                      <p>📍 {event.location}</p>
                    </div>
                  </div>
                  <button className="btn-outline-gold px-4 sm:px-5 py-2 rounded-sm text-xs w-full sm:w-fit">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
