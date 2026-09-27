import { useState } from 'react';
import pastorImg from '../assets/pastor-israel-erechovwe.jpg';
import worshipImg from '../assets/worship-prayer-ministry.jpg';
import cathedralImg from '../assets/church-cathedral-exterior.jpg';
import pastorFlyer from '../assets/pastor-worship-flyer.jpg';
import scheduleFlyer from '../assets/church-programs-schedule.jpg';
import interiorsStrip from '../assets/church-interiors-strip.jpg';
import ImageModal from '../components/ImageModal';
import VideoSection from '../components/VideoSection';

const sermons = [
  {
    id: 1,
    title: 'Walking in Covenant Freedom',
    series: 'Freedom in Christ',
    speaker: 'Revd. Israel Ufuoma Erechovwe',
    date: 'September 20, 2026',
    duration: '54 min',
    scripture: 'John 8:36',
    img: worshipImg,
  },
  {
    id: 2,
    title: 'The Mystery of Anointing & Yoke-Breaking Power',
    series: 'Anointing Services',
    speaker: 'Revd. Israel Ufuoma Erechovwe',
    date: 'September 13, 2026',
    duration: '48 min',
    scripture: 'Isaiah 10:27',
    img: scheduleFlyer,
  },
  {
    id: 3,
    title: 'Kingdom Purpose & Destiny Discovery',
    series: 'Foundations of Faith',
    speaker: 'Revd. Israel Ufuoma Erechovwe',
    date: 'September 6, 2026',
    duration: '52 min',
    scripture: 'Jeremiah 29:11',
    img: pastorImg,
  },
  {
    id: 4,
    title: 'Prevailing in Spiritual Warfare Through Fasting',
    series: 'The Prayer Life',
    speaker: 'Revd. Israel Ufuoma Erechovwe',
    date: 'August 30, 2026',
    duration: '60 min',
    scripture: 'Matthew 17:21',
    img: pastorFlyer,
  },
  {
    id: 5,
    title: 'Building a Vision for Generations',
    series: 'Kingdom Expansion',
    speaker: 'Revd. Israel Ufuoma Erechovwe',
    date: 'August 23, 2026',
    duration: '50 min',
    scripture: 'Habakkuk 2:2-3',
    img: cathedralImg,
  },
  {
    id: 6,
    title: 'Walking by Faith, Not by Sight',
    series: 'Foundations of Faith',
    speaker: 'Revd. Israel Ufuoma Erechovwe',
    date: 'August 16, 2026',
    duration: '46 min',
    scripture: '2 Corinthians 5:7',
    img: interiorsStrip,
  },
];

const seriesList = ['All Series', 'Freedom in Christ', 'Anointing Services', 'Foundations of Faith', 'The Prayer Life', 'Kingdom Expansion'];

export default function Sermons() {
  const [filter, setFilter] = useState('All Series');
  const [modalImage, setModalImage] = useState<{ src: string; title: string; caption?: string } | null>(null);

  const filtered = filter === 'All Series' ? sermons : sermons.filter(s => s.series === filter);

  return (
    <div className="min-h-screen bg-navy-950 text-gold-200">
      {/* Hero */}
      <section
        className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 px-4 text-center"
        style={{
          backgroundImage: `url(${cathedralImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/95 via-navy-950/88 to-navy-950/98" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2 sm:mb-3">The Anointed Word</p>
          <h1 className="font-decorative text-2xl sm:text-4xl md:text-5xl gold-text mb-3">Sermon Archives</h1>
          <p className="text-gold-300/80 text-xs sm:text-sm md:text-base font-body italic max-w-lg mx-auto">
            "Faith cometh by hearing, and hearing by the word of God." — Romans 10:17
          </p>
          <div className="section-divider max-w-[80px] sm:max-w-[100px] mx-auto mt-4 sm:mt-5" />
        </div>
      </section>

      {/* Series Filter */}
      <section className="bg-navy-900 py-4 sm:py-5 px-3 sm:px-4 border-b border-gold-800/20">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-1.5 sm:gap-2 justify-center">
          {seriesList.map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-display tracking-wider uppercase rounded-sm transition-colors ${
                filter === s
                  ? 'bg-gold-600 text-navy-950 font-bold shadow-xs'
                  : 'border border-gold-700/40 text-gold-300 hover:border-gold-400 hover:text-gold-200'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(sermon => (
            <div
              key={sermon.id}
              className="card-navy rounded-sm overflow-hidden group flex flex-col justify-between border border-gold-800/30 hover:border-gold-500/50 transition-all duration-300"
            >
              <div>
                <div
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => setModalImage({ src: sermon.img, title: sermon.title, caption: `${sermon.speaker} · ${sermon.scripture}` })}
                >
                  <img
                    src={sermon.img}
                    alt={sermon.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-gold-400 bg-navy-950/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-gold-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute bottom-2 left-2 text-[10px] bg-navy-950/90 text-gold-300 px-2 py-0.5 rounded-xs border border-gold-500/30">
                    📖 {sermon.scripture}
                  </span>
                </div>

                <div className="p-5">
                  <span className="text-gold-400 text-[10px] font-display uppercase tracking-widest block mb-1">
                    {sermon.series}
                  </span>
                  <h3 className="font-display text-gold-200 text-base font-semibold mb-2 group-hover:text-gold-300 transition-colors leading-snug">
                    {sermon.title}
                  </h3>
                  <p className="text-gold-300/80 text-xs font-display mb-1">{sermon.speaker}</p>
                </div>
              </div>

              <div className="px-5 pb-5">
                <div className="pt-3 border-t border-gold-800/20 flex items-center justify-between text-[11px] text-gold-200/60 font-display">
                  <span>📅 {sermon.date}</span>
                  <span>⏱ {sermon.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pulpit Ministry & Live Exhortation Videos */}
      <VideoSection
        title="Pulpit Exhortations & Ministry Moments"
        subtitle="Watch live excerpts of preaching, spiritual declarations, and worship ministration from our services."
        limit={4}
        showCategories={true}
      />

      {/* Lightbox / Image Modal */}
      {modalImage && (
        <ImageModal
          isOpen={true}
          onClose={() => setModalImage(null)}
          imageSrc={modalImage.src}
          title={modalImage.title}
          caption={modalImage.caption}
        />
      )}
    </div>
  );
}
