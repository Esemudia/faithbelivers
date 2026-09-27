import { useState } from 'react';
import scheduleFlyer from '../assets/church-programs-schedule.jpg';
import pastorFlyer from '../assets/pastor-worship-flyer.jpg';
import cathedralImg from '../assets/church-cathedral-exterior.jpg';
import worshipImg from '../assets/worship-prayer-ministry.jpg';
import ImageModal from '../components/ImageModal';

const recurringPrograms = [
  {
    id: 1,
    title: 'Monthly Anointing Service',
    timing: 'Every 1st Sunday of a New Month',
    time: '8:00 AM – 10:30 AM',
    location: 'Faith Believers Ministry Auditorium',
    category: 'Anointing',
    desc: 'A powerful monthly covenant service of supernatural empowerment, prophetic blessing, and breaking of yokes.',
    flyerHighlighted: true,
  },
  {
    id: 2,
    title: 'Business Men/Women Prayer Hub',
    timing: 'Every 3rd Friday of Every Month',
    time: '12:00 PM – 1:00 PM (1 Hour Power Prayer)',
    location: 'Church Prayer Hall & Online',
    category: 'Marketplace',
    desc: 'Targeted intercession for career growth, business expansion, contracts, divine wisdom, and financial breakthrough.',
    flyerHighlighted: true,
  },
  {
    id: 3,
    title: 'Monday Breakthrough Morning Prayers',
    timing: 'Every Monday Morning',
    time: '6:00 AM – 7:30 AM',
    location: 'Main Sanctuary',
    category: 'Prayer',
    desc: 'Start your week in the presence of God with commanding declarations, spiritual covers, and prophetic directions.',
    flyerHighlighted: true,
  },
  {
    id: 4,
    title: 'Monthly Community Evangelism',
    timing: 'Every 3rd Saturday of the Month',
    time: '7:00 AM – 8:00 AM',
    location: 'Assembly at Church Grounds',
    category: 'Outreach',
    desc: 'Taking the message of Freedom in Christ to our neighborhoods, markets, and homes with tracts and love outreach.',
    flyerHighlighted: true,
  },
  {
    id: 5,
    title: 'Counseling & Deliverance Sessions',
    timing: 'Every Monday',
    time: '10:00 AM – 1:00 PM',
    location: 'Pastor\'s Office & Counseling Room',
    category: 'Deliverance',
    desc: 'One-on-one confidential spiritual counseling, biblical guidance, and deliverance prayers with Revd. Israel Erechovwe.',
    flyerHighlighted: false,
  },
  {
    id: 6,
    title: 'Mid-Week Fasting & Prayer Service',
    timing: 'Every Wednesday',
    time: '10:00 AM – 2:00 PM',
    location: 'Main Sanctuary',
    category: 'Prayer',
    desc: 'Seeking the face of God in corporate fasting, deep study of the scriptures, and intense praying in the Spirit.',
    flyerHighlighted: false,
  },
];

const categoryColors: Record<string, string> = {
  Anointing: 'bg-gold-600 text-navy-950 font-bold',
  Marketplace: 'bg-navy-700 text-gold-300 border border-gold-600/40',
  Prayer: 'bg-mahogany/80 text-gold-200 border border-gold-500/30',
  Outreach: 'bg-emerald-800/80 text-emerald-200 border border-emerald-500/30',
  Deliverance: 'bg-purple-900/80 text-purple-200 border border-purple-500/30',
};

export default function Events() {
  const [modalImage, setModalImage] = useState<{ src: string; title: string; caption?: string } | null>(null);

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
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2 sm:mb-3">Gatherings & Programs</p>
          <h1 className="font-decorative text-2xl sm:text-4xl md:text-5xl gold-text mb-3">Church Events & Schedules</h1>
          <p className="text-gold-300/80 text-xs sm:text-sm font-body italic max-w-lg mx-auto">
            "You are welcome to church... God bless you for coming... Your miracle is sure!"
          </p>
          <div className="section-divider max-w-[80px] sm:max-w-[100px] mx-auto mt-4 sm:mt-5" />
        </div>
      </section>

      {/* Official Flyers Spotlight */}
      <section className="bg-navy-900 py-12 sm:py-16 px-4 sm:px-6 border-b border-gold-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[10px] font-display uppercase tracking-[0.2em] px-3 py-1 bg-gold-600/20 text-gold-300 border border-gold-500/30 rounded-sm inline-block mb-2">
              Official Program Announcements
            </span>
            <h2 className="font-display text-gold-200 text-xl sm:text-2xl md:text-3xl">
              Featured Ministry Schedules
            </h2>
            <p className="text-gold-200/60 text-xs sm:text-sm mt-1">
              Click any flyer to open in high-resolution full view
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Schedule flyer */}
            <div
              className="card-navy rounded-sm overflow-hidden border-2 border-gold-500/40 shadow-xl group cursor-pointer flex flex-col justify-between"
              onClick={() => setModalImage({ src: scheduleFlyer, title: 'Special Programs Schedule Flyer', caption: 'Every 1st Sunday Anointing · 3rd Friday Prayer Hub · Monday Breakthrough · 3rd Saturday Evangelism' })}
            >
              <div className="p-3 bg-navy-950 border-b border-gold-800/30 text-center">
                <span className="font-display text-xs text-gold-300 uppercase tracking-wider">
                  Special Monthly & Weekly Programs Flyer
                </span>
              </div>
              <div className="flex-1 flex items-center justify-center p-3 bg-navy-950/50">
                <img
                  src={scheduleFlyer}
                  alt="Programs Schedule Flyer"
                  className="max-h-[360px] w-auto object-contain rounded-xs group-hover:scale-103 transition-transform duration-300"
                />
              </div>
              <div className="p-3 bg-navy-950 border-t border-gold-800/30 flex items-center justify-between text-xs text-gold-400">
                <span>Your Miracle is Sure</span>
                <span className="text-[10px] bg-gold-500/10 px-2 py-0.5 rounded-sm">🔍 View Full Size</span>
              </div>
            </div>

            {/* Worship with Us Flyer */}
            <div
              className="card-navy rounded-sm overflow-hidden border-2 border-gold-500/40 shadow-xl group cursor-pointer flex flex-col justify-between"
              onClick={() => setModalImage({ src: pastorFlyer, title: 'Worship With Us — Weekly Schedule Flyer', caption: 'Rev. Israel Ufuoma Erechovwe · Sunday Worship · Monday Counseling · Wednesday Fasting & Prayer' })}
            >
              <div className="p-3 bg-navy-950 border-b border-gold-800/30 text-center">
                <span className="font-display text-xs text-gold-300 uppercase tracking-wider">
                  Worship With Us & Pastoral Schedule Flyer
                </span>
              </div>
              <div className="flex-1 flex items-center justify-center p-3 bg-navy-950/50">
                <img
                  src={pastorFlyer}
                  alt="Pastoral Worship Flyer"
                  className="max-h-[360px] w-auto object-contain rounded-xs group-hover:scale-103 transition-transform duration-300"
                />
              </div>
              <div className="p-3 bg-navy-950 border-t border-gold-800/30 flex items-center justify-between text-xs text-gold-400">
                <span>KM 365 Ughelli/Patani Expressway</span>
                <span className="text-[10px] bg-gold-500/10 px-2 py-0.5 rounded-sm">🔍 View Full Size</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Cards */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-gold-200 text-xl sm:text-2xl">All Regular & Special Services</h2>
              <p className="text-gold-200/50 text-xs sm:text-sm">Join us for life-altering spiritual encounters</p>
            </div>
            <a
              href="tel:08035688965"
              className="btn-gold px-5 py-2.5 rounded-sm text-xs inline-flex items-center gap-2 self-start sm:self-auto"
            >
              <span>📞</span> Enquiries: 08035688965
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recurringPrograms.map(event => (
              <div
                key={event.id}
                className="card-navy rounded-sm p-6 flex flex-col justify-between border border-gold-800/30 hover:border-gold-500/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-sm font-display tracking-wider uppercase ${categoryColors[event.category]}`}>
                      {event.category}
                    </span>
                    <span className="text-gold-400 font-display text-[11px] font-semibold">
                      {event.timing}
                    </span>
                  </div>

                  <h3 className="font-display text-gold-200 text-base sm:text-lg mb-2 group-hover:text-gold-300 transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-gold-300/80 mb-4 bg-navy-950/60 p-3 rounded-sm border border-gold-800/20">
                    <p>🕐 {event.time}</p>
                    <p>📍 {event.location}</p>
                  </div>

                  <p className="text-gold-200/60 text-xs leading-relaxed">
                    {event.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gold-800/20 flex items-center justify-between">
                  <span className="text-[11px] text-gold-400/60 font-display">Jesus Is Lord!</span>
                  <button
                    onClick={() => setModalImage({ src: event.flyerHighlighted ? scheduleFlyer : pastorFlyer, title: event.title, caption: `${event.timing} · ${event.time}` })}
                    className="text-gold-300 hover:text-gold-200 text-xs font-display flex items-center gap-1"
                  >
                    View Flyer →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Altar Experience Banner */}
      <section className="bg-navy-900 py-12 px-4 sm:px-6 border-t border-gold-800/30">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 p-6 sm:p-8 bg-navy-950 rounded-sm border border-gold-600/40">
          <img
            src={worshipImg}
            alt="Altar Ministry Service"
            className="w-full md:w-56 h-36 object-cover rounded-sm border border-gold-500/30"
          />
          <div>
            <span className="text-gold-400 font-display text-xs uppercase tracking-widest">Altar Encounters</span>
            <h3 className="font-display text-gold-200 text-lg sm:text-xl mt-1 mb-2">Need Special Prayer or Counseling?</h3>
            <p className="text-gold-200/60 text-xs sm:text-sm mb-4">
              Revd. Israel Ufuoma Erechovwe and the pastoral intercession team are available every Monday 10:00 AM – 1:00 PM for one-on-one counseling and deliverance.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/prayer" className="btn-gold px-5 py-2 rounded-sm text-xs">Send Prayer Request</a>
              <a href="tel:08035688965" className="btn-outline-gold px-5 py-2 rounded-sm text-xs">Call Church Line</a>
            </div>
          </div>
        </div>
      </section>

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
