export default function Live() {
  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero */}
      <section className="relative pt-32 pb-10 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-red-600/90 text-white text-xs font-display tracking-widest uppercase px-4 py-1.5 rounded-sm mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-white inline-block" />
          Live Now
        </div>
        <h1 className="font-decorative text-3xl md:text-5xl gold-text mb-3">Watch Live</h1>
        <p className="text-gold-300/60 font-body text-sm">Join us for worship in real time from anywhere in the world</p>
        <div className="section-divider max-w-[100px] mx-auto mt-5" />
      </section>

      {/* Stream Embed placeholder */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div
            className="w-full aspect-video bg-navy-900 border border-gold-700/30 rounded-sm flex flex-col items-center justify-center gap-4 animate-glow"
          >
            <div className="w-20 h-20 rounded-full border-2 border-gold-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-gold-400 ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <p className="font-display text-gold-400 text-sm tracking-wider">Live Stream</p>
            <p className="text-gold-300/40 text-xs">Stream begins at service time</p>
          </div>

          {/* Service times reminder */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { day: 'Sunday', time: '8:00 AM & 10:30 AM', type: 'Morning Worship' },
              { day: 'Wednesday', time: '6:30 PM', type: 'Bible Study' },
              { day: 'Friday', time: '7:00 PM', type: 'Prayer Night' },
            ].map(({ day, time, type }) => (
              <div key={day} className="card-navy rounded-sm p-5 text-center">
                <p className="text-gold-400 font-display text-xs tracking-widest uppercase mb-1">{day}</p>
                <p className="text-gold-200 font-display text-base mb-1">{time}</p>
                <p className="text-gold-200/40 text-xs">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Broadcasts */}
      <section className="bg-navy-900 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2">Catch Up</p>
            <h2 className="font-display text-gold-200 text-2xl">Recent Broadcasts</h2>
            <div className="section-divider max-w-[100px] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Sunday Morning Worship', date: 'Sep 15, 2026', img: 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=600&h=340&fit=crop&auto=format' },
              { title: 'Wednesday Bible Study', date: 'Sep 10, 2026', img: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=340&fit=crop&auto=format' },
              { title: 'Friday Prayer Night', date: 'Sep 5, 2026', img: 'https://images.unsplash.com/photo-1473621038790-b778b4750efe?w=600&h=340&fit=crop&auto=format' },
            ].map(({ title, date, img }) => (
              <div key={title} className="card-navy rounded-sm overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img src={img} alt={title} className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-navy-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full border-2 border-gold-400 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gold-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-gold-200 text-sm mb-1">{title}</h3>
                  <p className="text-gold-200/40 text-xs">{date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
