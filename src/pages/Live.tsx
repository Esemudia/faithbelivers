export default function Live() {
  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-red-600/90 text-white text-xs font-display tracking-widest uppercase px-3.5 py-1 rounded-sm mb-4 sm:mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-white inline-block" />
          Live Now
        </div>
        <h1 className="font-decorative text-2xl sm:text-4xl md:text-5xl gold-text mb-2 sm:mb-3">Watch Live</h1>
        <p className="text-gold-300/60 font-body text-xs sm:text-sm px-2">Join us for worship in real time from anywhere in the world</p>
        <div className="section-divider max-w-[80px] sm:max-w-[100px] mx-auto mt-4 sm:mt-5" />
      </section>

      {/* Stream Embed */}
      <section className="px-4 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto">
          <div
            className="w-full aspect-video bg-navy-900 border border-gold-700/30 rounded-sm flex flex-col items-center justify-center gap-3 sm:gap-4 animate-glow p-4 text-center"
          >
            <div className="w-14 sm:w-20 h-14 sm:h-20 rounded-full border-2 border-gold-500 flex items-center justify-center">
              <svg className="w-6 sm:w-8 h-6 sm:h-8 text-gold-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <p className="font-display text-gold-400 text-xs sm:text-sm tracking-wider">Faith Believers Live Stream</p>
            <p className="text-gold-300/40 text-[11px] sm:text-xs">Stream broadcast begins at scheduled service times</p>
          </div>

          {/* Service times reminder */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { day: 'Sunday', time: '8:00 AM & 10:30 AM', type: 'Morning Worship' },
              { day: 'Wednesday', time: '6:30 PM', type: 'Bible Study' },
              { day: 'Friday', time: '7:00 PM', type: 'Prayer Night' },
            ].map(({ day, time, type }) => (
              <div key={day} className="card-navy rounded-sm p-4 sm:p-5 text-center">
                <p className="text-gold-400 font-display text-[10px] sm:text-xs tracking-widest uppercase mb-1">{day}</p>
                <p className="text-gold-200 font-display text-sm sm:text-base mb-1">{time}</p>
                <p className="text-gold-200/40 text-xs">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Broadcasts */}
      <section className="bg-navy-900 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2">Catch Up</p>
            <h2 className="font-display text-gold-200 text-xl sm:text-2xl">Recent Broadcasts</h2>
            <div className="section-divider max-w-[80px] sm:max-w-[100px] mx-auto mt-3 sm:mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { title: 'Sunday Morning Worship', date: 'Sep 15, 2026', img: 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=600&h=340&fit=crop&auto=format' },
              { title: 'Wednesday Bible Study', date: 'Sep 10, 2026', img: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=340&fit=crop&auto=format' },
              { title: 'Friday Prayer Night', date: 'Sep 5, 2026', img: 'https://images.unsplash.com/photo-1473621038790-b778b4750efe?w=600&h=340&fit=crop&auto=format' },
            ].map(({ title, date, img }) => (
              <div key={title} className="card-navy rounded-sm overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img src={img} alt={title} className="w-full h-36 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-navy-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-gold-400 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gold-400 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-gold-200 text-xs sm:text-sm mb-1">{title}</h3>
                  <p className="text-gold-200/40 text-[11px] sm:text-xs">{date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
