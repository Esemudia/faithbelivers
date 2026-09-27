import { useState } from 'react';
import pastorFlyer from '../assets/pastor-worship-flyer.jpg';
import worshipImg from '../assets/worship-prayer-ministry.jpg';
import cathedralImg from '../assets/church-cathedral-exterior.jpg';
import scheduleFlyer from '../assets/church-programs-schedule.jpg';
import ImageModal from '../components/ImageModal';
import VideoSection from '../components/VideoSection';

const broadcasts = [
  {
    title: 'Sunday Glorious Worship Service',
    series: 'Walking in Covenant Freedom',
    speaker: 'Revd. Israel Ufuoma Erechovwe',
    date: 'Live Every Sunday 8:00 AM',
    img: worshipImg,
  },
  {
    title: 'Fasting & Prayer Impartation',
    series: 'Waiting on the Lord',
    speaker: 'Revd. Israel Ufuoma Erechovwe',
    date: 'Live Every Wednesday 10:00 AM',
    img: pastorFlyer,
  },
  {
    title: 'Monthly Anointing & Deliverance Service',
    series: 'Freedom from Every Chain',
    speaker: 'Revd. Israel Ufuoma Erechovwe',
    date: 'Every 1st Sunday of the Month',
    img: scheduleFlyer,
  },
];

export default function Live() {
  const [modalImage, setModalImage] = useState<{ src: string; title: string; caption?: string } | null>(null);

  return (
    <div className="min-h-screen bg-navy-950 text-gold-200">
      {/* Hero */}
      <section
        className="relative pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 px-4 text-center"
        style={{
          backgroundImage: `url(${cathedralImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/95 via-navy-950/90 to-navy-950" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-red-600/90 text-white text-xs font-display tracking-widest uppercase px-3.5 py-1 rounded-sm mb-3 sm:mb-4 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-white inline-block" />
            Faith Believers Broadcast
          </div>
          <h1 className="font-decorative text-2xl sm:text-4xl md:text-5xl gold-text mb-2">Watch Live Stream</h1>
          <p className="text-gold-300/80 font-body text-xs sm:text-sm px-2">
            Join Revd. Israel Ufuoma Erechovwe and the Faith Believers family in worship from anywhere across the globe
          </p>
          <div className="section-divider max-w-[80px] sm:max-w-[100px] mx-auto mt-4" />
        </div>
      </section>

      {/* Stream Embed & Real Service Schedules */}
      <section className="px-4 pb-12 sm:pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Main stream screen mockup with church backdrop */}
          <div className="relative w-full aspect-video bg-navy-900 border-2 border-gold-600/40 rounded-sm overflow-hidden shadow-2xl flex flex-col items-center justify-center p-6 text-center group">
            <img
              src={worshipImg}
              alt="Live Stream Sanctuary Background"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/70" />

            <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 max-w-md mx-auto">
              <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full border-2 border-gold-400 bg-navy-950/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-7 sm:w-9 h-7 sm:h-9 text-gold-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-gold-300 text-base sm:text-lg font-semibold">
                  Faith Believers Ministry International
                </h3>
                <p className="text-gold-400/80 font-display text-xs tracking-wider uppercase mt-0.5">
                  Live Service Broadcast Portal
                </p>
                <p className="text-gold-200/60 text-xs mt-2">
                  Broadcasts air live on Sundays at 8:00 AM, Mondays at 10:00 AM & Wednesdays at 10:00 AM (WAT).
                </p>
              </div>

              <div className="flex gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold py-2 px-4 text-xs rounded-sm inline-flex items-center gap-1.5"
                >
                  Facebook Live
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-gold py-2 px-4 text-xs rounded-sm inline-flex items-center gap-1.5"
                >
                  YouTube Live
                </a>
              </div>
            </div>
          </div>

          {/* Service times reminder */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { day: 'Every Sunday', time: '8:00 AM – 10:00 AM', title: 'Glorious Worship Service', type: 'Word, Praise & Anointing' },
              { day: 'Every Monday', time: '10:00 AM – 1:00 PM', title: 'Counseling & Deliverance', type: 'Personal Ministry with Pastor' },
              { day: 'Every Wednesday', time: '10:00 AM – 2:00 PM', title: 'Corporate Fasting & Prayer', type: 'Spiritual Warfare & Intercession' },
            ].map(({ day, time, title, type }) => (
              <div key={day} className="card-navy rounded-sm p-5 border border-gold-800/30 text-center">
                <p className="text-gold-400 font-display text-xs tracking-widest uppercase mb-1">{day}</p>
                <p className="text-gold-200 font-display text-base font-semibold mb-1">{time}</p>
                <p className="text-gold-300/80 font-display text-xs">{title}</p>
                <p className="text-gold-200/50 text-[11px] mt-1">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Broadcast Archive */}
      <section className="bg-navy-900 py-12 sm:py-16 px-4 sm:px-6 border-t border-gold-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2">Previous Services</p>
            <h2 className="font-display text-gold-200 text-xl sm:text-2xl md:text-3xl">Recent Ministry Broadcasts</h2>
            <div className="section-divider max-w-[80px] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {broadcasts.map(({ title, series, speaker, date, img }) => (
              <div
                key={title}
                className="card-navy rounded-sm overflow-hidden group cursor-pointer border border-gold-800/30 hover:border-gold-500/50 transition-all duration-300"
                onClick={() => setModalImage({ src: img, title, caption: `${speaker} · ${date}` })}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-950/40 flex items-center justify-center group-hover:bg-navy-950/20 transition-colors">
                    <div className="w-12 h-12 rounded-full border border-gold-400 bg-navy-950/80 flex items-center justify-center">
                      <svg className="w-5 h-5 text-gold-400 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute bottom-2 left-2 text-[10px] bg-navy-950/90 text-gold-300 px-2 py-0.5 rounded-xs border border-gold-500/30">
                    {date}
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  <p className="text-gold-400 text-[10px] font-display uppercase tracking-widest mb-1">{series}</p>
                  <h3 className="font-display text-gold-200 text-sm sm:text-base font-semibold mb-1 group-hover:text-gold-300 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gold-200/60 text-xs">{speaker}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video On-Demand & Service Highlights */}
      <VideoSection
        title="Service Video Highlights & On-Demand Clips"
        subtitle="Watch recorded moments from our services: deep worship, high praise, choir ministration, and altar prayers."
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
