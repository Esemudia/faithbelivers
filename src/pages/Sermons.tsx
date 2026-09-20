import { useState } from 'react';

const sermons = [
  { id: 1, title: 'Walking in Covenant Faithfulness', series: 'Foundations of Faith', speaker: 'Revd. Israel Erechovwe', date: 'September 15, 2026', duration: '52 min', img: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=340&fit=crop&auto=format' },
  { id: 2, title: 'The Power of the Resurrection', series: 'Christ Triumphant', speaker: 'Revd. Israel Erechovwe', date: 'September 8, 2026', duration: '48 min', img: 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=600&h=340&fit=crop&auto=format' },
  { id: 3, title: 'Kingdom Identity', series: 'Born for This', speaker: 'Revd. Israel Erechovwe', date: 'September 1, 2026', duration: '55 min', img: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=340&fit=crop&auto=format' },
  { id: 4, title: 'Praying Without Ceasing', series: 'The Prayer Life', speaker: 'Revd. Israel Erechovwe', date: 'August 25, 2026', duration: '44 min', img: 'https://images.unsplash.com/photo-1473621038790-b778b4750efe?w=600&h=340&fit=crop&auto=format' },
  { id: 5, title: 'Freedom from Every Chain', series: 'Freedom in Christ', speaker: 'Revd. Israel Erechovwe', date: 'August 18, 2026', duration: '61 min', img: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=340&fit=crop&auto=format' },
  { id: 6, title: 'The Favour of God', series: 'Foundations of Faith', speaker: 'Revd. Israel Erechovwe', date: 'August 11, 2026', duration: '49 min', img: 'https://images.unsplash.com/photo-1551038247-3d935814b8b3?w=600&h=340&fit=crop&auto=format' },
];

const series = ['All Series', 'Foundations of Faith', 'Christ Triumphant', 'Born for This', 'The Prayer Life', 'Freedom in Christ'];

export default function Sermons() {
  const [filter, setFilter] = useState('All Series');

  const filtered = filter === 'All Series' ? sermons : sermons.filter(s => s.series === filter);

  return (
    <div className="min-h-screen bg-gold-100">
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 px-4 text-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1400&h=400&fit=crop&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy-950/88" />
        <div className="relative z-10">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-3">The Word</p>
          <h1 className="font-decorative text-3xl md:text-5xl gold-text">Sermons</h1>
          <div className="section-divider max-w-[100px] mx-auto mt-5" />
        </div>
      </section>

      {/* Filter */}
      <section className="bg-navy-900 py-6 px-4 border-b border-gold-800/20">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {series.map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-1.5 text-xs font-display tracking-wider uppercase rounded-sm transition-colors ${
                filter === s
                  ? 'bg-gold-600 text-navy-950'
                  : 'border border-gold-700/40 text-gold-300 hover:border-gold-400 hover:text-gold-200'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(sermon => (
            <div key={sermon.id} className="card-navy rounded-sm overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={sermon.img}
                  alt={sermon.title}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full border-2 border-gold-400 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gold-500 text-[10px] font-display tracking-widest uppercase mb-1">{sermon.series}</p>
                <h3 className="font-display text-gold-200 text-sm leading-snug mb-3">{sermon.title}</h3>
                <div className="flex items-center justify-between text-[11px] text-gold-200/40 font-display">
                  <span>{sermon.date}</span>
                  <span>{sermon.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
