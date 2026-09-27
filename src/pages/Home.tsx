import { useState } from 'react';
import { Link } from 'react-router';
import churchLogo from '../assets/church-logo.png';
import pastorImg from '../assets/pastor-israel-erechovwe.jpg';
import cathedralImg from '../assets/church-cathedral-exterior.jpg';
import structureImg from '../assets/church-building-structure.jpg';
import masterplanImg from '../assets/church-campus-masterplan.jpg';
import altarImg from '../assets/worship-prayer-ministry.jpg';
import scheduleFlyer from '../assets/church-programs-schedule.jpg';
import pastorFlyer from '../assets/pastor-worship-flyer.jpg';
import ImageModal from '../components/ImageModal';

const weeklySchedule = [
  {
    day: 'Sunday',
    time: '8:00 AM – 10:00 AM',
    title: 'Glorious Worship Service',
    desc: 'Uplifting praise, fervent worship, and life-transforming revelation from God\'s Word.',
    badge: 'Main Worship',
  },
  {
    day: 'Monday',
    time: '10:00 AM – 1:00 PM',
    title: 'Counseling & Deliverance',
    desc: 'One-on-one pastoral counseling, spiritual guidance, and deliverance prayers with the Lead Pastor.',
    badge: 'Spiritual Care',
  },
  {
    day: 'Wednesday',
    time: '10:00 AM – 2:00 PM',
    title: 'Fasting & Prayer Service',
    desc: 'Deep intercession, waiting on the Lord, and breaking spiritual strongholds through focused prayer.',
    badge: 'Intercession',
  },
];

const specialPrograms = [
  {
    title: 'Monthly Anointing Service',
    timing: 'Every 1st Sunday of Every Month',
    desc: 'A divine empowerment service where God breaks every yoke and releases fresh oil of favour.',
    icon: '🪔',
  },
  {
    title: 'Business Men/Women Prayer Hub',
    timing: 'Every 3rd Friday (12:00 PM – 1:00 PM)',
    desc: '1-Hour focused spiritual empowerment and marketplace breakthrough prayer for entrepreneurs.',
    icon: '💼',
  },
  {
    title: 'Breakthrough Morning Prayers',
    timing: 'Every Monday Morning (6:00 AM – 7:30 AM)',
    desc: 'Commanding your week with early morning prayer decrees, open doors, and divine protection.',
    icon: '🌅',
  },
  {
    title: 'Community Evangelism',
    timing: 'Every 3rd Saturday (7:00 AM – 8:00 AM)',
    desc: 'Taking the undiluted Gospel of Jesus Christ to streets, homes, and hearts in our city.',
    icon: '📢',
  },
];

export default function Home() {
  const [modalImage, setModalImage] = useState<{ src: string; title: string; caption?: string } | null>(null);

  return (
    <div className="bg-navy-950 text-gold-200">
      {/* Hero Section */}
      <section
        className="relative min-h-[100dvh] flex items-center justify-center text-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 md:py-32"
        style={{
          backgroundImage: `url(${cathedralImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
        }}
      >
        {/* Multi-layered gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/92 via-navy-950/85 to-navy-950/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 px-4 max-w-4xl mx-auto animate-fade-up">
          <img
            src={churchLogo}
            alt="Faith Believers Ministry International Logo"
            className="h-28 sm:h-36 md:h-48 w-auto max-w-[80vw] mx-auto mb-4 sm:mb-6 drop-shadow-2xl object-contain hover:scale-105 transition-transform duration-300"
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs uppercase tracking-widest font-display mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
            Freedom In Christ · Established June 7, 2026
          </div>

          <h1 className="font-decorative text-2xl sm:text-4xl md:text-5xl lg:text-6xl gold-text mb-2 leading-tight">
            Faith Believers Ministry
          </h1>
          <p className="font-display text-gold-300 text-xs sm:text-sm md:text-base tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-5">
            International (A.K.A Freedom In Christ)
          </p>

          <div className="section-divider max-w-[140px] sm:max-w-xs mx-auto mb-4 sm:mb-6" />

          <p className="text-gold-200 text-base sm:text-lg md:text-xl font-body italic mb-2 px-2">
            Building Faith. Spreading Love. Changing Lives.
          </p>
          <p className="text-gold-400/80 text-xs sm:text-sm font-body italic mb-7 sm:mb-10 px-4">
            "For we walk by faith, not by sight." — 2 Corinthians 5:7
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-xs sm:max-w-md mx-auto">
            <Link
              to="/live"
              className="btn-gold w-full sm:w-auto px-7 py-3.5 rounded-sm text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-lg shadow-gold-900/30"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 inline-block animate-pulse" />
              Watch Live Service
            </Link>
            <Link
              to="/events"
              className="btn-outline-gold w-full sm:w-auto px-7 py-3.5 rounded-sm text-xs sm:text-sm inline-block"
            >
              View Service Schedule
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-gold-400/50 text-[10px] font-display tracking-widest uppercase">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-gold-400/50 to-transparent animate-bounce" />
        </div>
      </section>

      {/* Official Worship Schedule */}
      <section className="bg-navy-900 py-12 sm:py-16 px-4 sm:px-6 border-y border-gold-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2">Worship With Us</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display text-gold-200">Weekly Services & Gatherings</h2>
            <div className="section-divider max-w-[100px] sm:max-w-[120px] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {weeklySchedule.map(s => (
              <div
                key={s.day}
                className="card-navy rounded-sm p-6 sm:p-7 flex flex-col justify-between border border-gold-700/25 hover:border-gold-500/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-display uppercase tracking-widest px-2.5 py-1 bg-gold-500/10 text-gold-400 border border-gold-500/20 rounded-sm">
                      {s.badge}
                    </span>
                    <span className="text-gold-400 font-display text-xs font-semibold">{s.day}</span>
                  </div>
                  <h3 className="font-display text-gold-200 text-base sm:text-lg mb-1 group-hover:text-gold-300 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gold-400/90 font-display text-xs sm:text-sm font-medium mb-3">
                    {s.time}
                  </p>
                  <p className="text-gold-200/60 text-xs sm:text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-gold-800/20 flex items-center justify-between text-xs text-gold-400/70">
                  <span>365 Ughelli/Patani Expressway</span>
                  <Link to="/contact" className="hover:text-gold-300 font-display">Directions →</Link>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Flyer preview trigger banner */}
          <div className="mt-8 p-4 sm:p-5 rounded-sm bg-navy-950/80 border border-gold-600/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={pastorFlyer}
                alt="Worship Schedule Flyer"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-sm object-cover border border-gold-500/40 cursor-pointer shadow-md"
                onClick={() => setModalImage({ src: pastorFlyer, title: 'Worship Schedule & Pastoral Flyer', caption: 'Rev. Israel Ufuoma Erechovwe · Faith Believers Ministry Int\'l' })}
              />
              <div>
                <h4 className="font-display text-gold-300 text-sm font-semibold">Official Church Schedule Flyer</h4>
                <p className="text-gold-200/60 text-xs">For enquiries or pastoral appointment: 08035688965</p>
              </div>
            </div>
            <button
              onClick={() => setModalImage({ src: pastorFlyer, title: 'Official Worship Schedule Flyer', caption: 'Rev. Israel Ufuoma Erechovwe — Lead Pastor' })}
              className="btn-outline-gold px-5 py-2 text-xs rounded-sm whitespace-nowrap"
            >
              View Full Flyer
            </button>
          </div>
        </div>
      </section>

      {/* Mega Church Building Project Spotlight */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 border-b border-gold-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[10px] font-display uppercase tracking-[0.25em] px-3 py-1 bg-gold-600/20 text-gold-300 border border-gold-500/30 rounded-sm inline-block mb-3">
              Vision 2026 & Beyond
            </span>
            <h2 className="font-decorative text-2xl sm:text-3xl md:text-4xl text-gold-200 mb-3">
              The Mega Church Sanctuary Project
            </h2>
            <p className="text-gold-300/70 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-body">
              "A Place of Worship, Fellowship, Transformation and Global Impact" — Designed with a 5,000+ Seating Capacity Cathedral and comprehensive community facilities.
            </p>
            <div className="section-divider max-w-[120px] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Cathedral 3D Render Display */}
            <div className="lg:col-span-7 space-y-4">
              <div
                className="relative rounded-sm overflow-hidden border-2 border-gold-500/40 shadow-2xl group cursor-pointer"
                onClick={() => setModalImage({ src: structureImg, title: 'Mega Church Design Structure & Master Plan', caption: '5,000+ Capacity Main Sanctuary, Multi-Purpose Halls, Classrooms & Guest Facilities' })}
              >
                <img
                  src={cathedralImg}
                  alt="Mega Church Design Structure Exterior"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-3 left-3 right-3 bg-navy-950/85 backdrop-blur-md px-3 py-2 rounded-sm border border-gold-500/30 flex items-center justify-between">
                  <span className="font-display text-xs text-gold-300 uppercase tracking-wider">
                    Cathedral Architectural Front Elevation
                  </span>
                  <span className="text-[10px] text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded-sm">
                    Click to Zoom
                  </span>
                </div>
              </div>

              {/* Masterplan preview thumbnail */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div
                  className="rounded-sm overflow-hidden border border-gold-600/30 group cursor-pointer relative bg-navy-900"
                  onClick={() => setModalImage({ src: masterplanImg, title: 'Campus Site Plan & Seating Blueprint', caption: 'Main Sanctuary (5,000+), Fellowship Hall, Children & Youth Churches' })}
                >
                  <img
                    src={masterplanImg}
                    alt="Campus Masterplan Blueprint"
                    className="w-full h-28 sm:h-36 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-950/40 flex items-end p-2 sm:p-2.5">
                    <p className="text-[11px] font-display text-gold-200 bg-navy-950/90 px-2 py-1 rounded-xs border border-gold-500/30">
                      📐 Site Blueprint
                    </p>
                  </div>
                </div>

                <div
                  className="rounded-sm overflow-hidden border border-gold-600/30 group cursor-pointer relative bg-navy-900"
                  onClick={() => setModalImage({ src: structureImg, title: 'Complete Architectural Infographic', caption: '15 Key Facilities & Community Impact Features' })}
                >
                  <img
                    src={structureImg}
                    alt="Full Mega Church Structure Poster"
                    className="w-full h-28 sm:h-36 object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-950/40 flex items-end p-2 sm:p-2.5">
                    <p className="text-[11px] font-display text-gold-200 bg-navy-950/90 px-2 py-1 rounded-xs border border-gold-500/30">
                      🏛 Facilities Infographic
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details & Facilities */}
            <div className="lg:col-span-5 space-y-5">
              <div className="card-navy rounded-sm p-6 border border-gold-600/30">
                <h3 className="font-display text-gold-300 text-lg sm:text-xl mb-3">
                  Key Planned Facilities
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gold-200/80">
                  <li className="flex items-start gap-2.5">
                    <span className="text-gold-400 font-bold">01.</span>
                    <span><strong>Main Sanctuary:</strong> 5,000+ tiered seating for worship, word & deliverance.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-gold-400 font-bold">02.</span>
                    <span><strong>Fellowship & Banquet Hall:</strong> For conferences, banquets, and church events.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-gold-400 font-bold">03.</span>
                    <span><strong>Multi-Purpose & Seminar Hall:</strong> Equipped for youth training, workshops, and retreats.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-gold-400 font-bold">04.</span>
                    <span><strong>Children & Youth Churches:</strong> Dedicated modern spaces for discipleship across all age groups.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-gold-400 font-bold">05.</span>
                    <span><strong>Guest House & Health Centre:</strong> Comfortable accommodations for visitors and first-aid medical support.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-gold-400 font-bold">06.</span>
                    <span><strong>Independent Power & Water Plants:</strong> Round-the-clock solar/generators and water treatment.</span>
                  </li>
                </ul>

                <div className="mt-6 pt-5 border-t border-gold-800/30 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setModalImage({ src: structureImg, title: 'Full Mega Church Design Blueprint', caption: 'Faith Believers Ministry International Sanctuary Project' })}
                    className="btn-outline-gold py-2.5 px-4 text-xs rounded-sm text-center flex-1"
                  >
                    View Blueprint
                  </button>
                  <Link
                    to="/give"
                    className="btn-gold py-2.5 px-4 text-xs rounded-sm text-center flex-1"
                  >
                    Partner with the Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Altar Ministry & Deliverance Service Section */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 bg-navy-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2">Spiritual Encounters</p>
            <h2 className="font-decorative text-2xl sm:text-3xl md:text-4xl text-gold-200 mb-4 leading-snug">
              Experiencing the Freedom That Is Found in Christ
            </h2>
            <p className="text-gold-200/70 text-xs sm:text-sm leading-relaxed mb-4">
              At Faith Believers Ministry International, we believe in the present-day power of God to heal, deliver, restore, and transform lives. Our altar is a place of earnest prayer where God meets people at the point of their deepest needs.
            </p>
            <p className="text-gold-200/70 text-xs sm:text-sm leading-relaxed mb-6">
              Under the spiritual leadership of Revd. Israel Ufuoma Erechovwe, congregants experience heartfelt prayer, the undiluted preaching of the Word, and authentic moves of the Holy Spirit.
            </p>

            <blockquote className="border-l-2 border-gold-500 pl-4 py-1 italic text-gold-300 text-xs sm:text-sm mb-6 bg-gold-500/5 rounded-r-sm">
              "If the Son therefore shall make you free, ye shall be free indeed." — John 8:36
            </blockquote>

            <div className="flex flex-wrap gap-3">
              <Link to="/testimonies" className="btn-gold px-6 py-2.5 rounded-sm text-xs">
                Read Testimonies
              </Link>
              <Link to="/prayer" className="btn-outline-gold px-6 py-2.5 rounded-sm text-xs">
                Submit Prayer Request
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div
              className="relative rounded-sm overflow-hidden border-2 border-gold-500/40 shadow-2xl cursor-pointer group"
              onClick={() => setModalImage({ src: altarImg, title: 'Altar Prayer & Deliverance Ministry', caption: 'Revd. Israel Ufuoma Erechovwe and ministers laying hands and praying with the congregation' })}
            >
              <img
                src={altarImg}
                alt="Altar Prayer & Deliverance Service"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-gold-300">
                <span className="font-display">Altar Prayer & Deliverance Service</span>
                <span className="text-[10px] bg-navy-900/80 px-2 py-0.5 rounded-sm border border-gold-500/30">Click to View</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs & Flyers Showcase */}
      <section className="bg-navy-900 py-12 sm:py-16 px-4 sm:px-6 border-y border-gold-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2">Special Programs</p>
            <h2 className="font-display text-gold-200 text-xl sm:text-2xl md:text-3xl">
              Monthly & Specialized Gatherings
            </h2>
            <div className="section-divider max-w-[100px] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Program Flyer */}
            <div className="md:col-span-5 flex justify-center">
              <div
                className="max-w-xs w-full rounded-sm overflow-hidden border-2 border-gold-500/40 shadow-xl group cursor-pointer relative bg-navy-950"
                onClick={() => setModalImage({ src: scheduleFlyer, title: 'Special Programs Schedule Flyer', caption: 'Anointing Service · Business Hub · Breakthrough Prayers · Evangelism' })}
              >
                <img
                  src={scheduleFlyer}
                  alt="Special Church Programs Schedule"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-950/10 group-hover:bg-transparent transition-colors" />
                <div className="p-3 bg-navy-950 text-center border-t border-gold-800/30">
                  <span className="text-xs font-display text-gold-300 uppercase tracking-wider">
                    🔍 Click to Enlarge Flyer
                  </span>
                </div>
              </div>
            </div>

            {/* List of Special Programs */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specialPrograms.map(p => (
                <div key={p.title} className="card-navy rounded-sm p-5 border border-gold-800/30 flex flex-col justify-between">
                  <div>
                    <div className="text-2xl mb-2">{p.icon}</div>
                    <h3 className="font-display text-gold-300 text-sm font-semibold mb-1">{p.title}</h3>
                    <p className="text-gold-400 font-display text-xs mb-2">{p.timing}</p>
                    <p className="text-gold-200/60 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Pastor Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gold-100 text-navy-950">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative max-w-sm w-full">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-gold-500 to-navy-800 rounded-sm opacity-60 blur-xs" />
              <img
                src={pastorImg}
                alt="Revd. Israel Ufuoma Erechovwe - Lead Pastor"
                className="relative rounded-sm w-full h-auto object-cover shadow-2xl border-2 border-gold-600/40"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-navy-950/90 text-gold-300 px-3 py-2 rounded-sm text-center border border-gold-500/40 backdrop-blur-xs">
                <p className="font-display text-xs sm:text-sm font-semibold">Revd. Israel Ufuoma Erechovwe</p>
                <p className="text-[10px] text-gold-400/80 uppercase tracking-widest">Lead Pastor & Founder</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="text-gold-700 text-xs font-display tracking-widest uppercase mb-2">Our Spiritual Shepherd</p>
            <h2 className="font-display text-navy-900 text-2xl sm:text-3xl md:text-4xl mb-3 leading-snug">
              Revd. Israel Ufuoma Erechovwe
            </h2>
            <p className="text-gold-700 font-display text-xs tracking-widest uppercase mb-4">
              Lead Pastor, Faith Believers Ministry Int'l
            </p>
            <p className="text-navy-800/80 leading-relaxed mb-3 text-xs sm:text-sm">
              Revd. Israel Ufuoma Erechovwe is a passionate Christian minister, preacher, teacher of the Word, and spiritual leader dedicated to the salvation, restoration, spiritual maturity, and destiny fulfilment of God's people.
            </p>
            <p className="text-navy-800/80 leading-relaxed mb-5 text-xs sm:text-sm">
              His leadership philosophy centres on: <em>"Building people, strengthening faith, raising leaders, and advancing the Kingdom of God."</em>
            </p>

            <div className="p-4 bg-navy-950/5 rounded-sm border border-gold-600/20 mb-6">
              <p className="text-navy-900 font-display text-xs font-semibold uppercase tracking-wider mb-1">
                Personal Ministry Statement:
              </p>
              <p className="italic text-navy-700 text-xs sm:text-sm">
                "My passion is to preach Christ, teach God's Word, raise believers, restore hope, strengthen families, and help people discover and fulfil God's purpose for their lives."
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/about" className="btn-navy px-6 py-2.5 rounded-sm text-xs">
                Read Full Biography
              </Link>
              <button
                onClick={() => setModalImage({ src: pastorFlyer, title: 'Revd. Israel Ufuoma Erechovwe Poster', caption: 'Faith Believers Ministry International (Freedom in Christ)' })}
                className="btn-outline-navy px-5 py-2.5 rounded-sm text-xs"
              >
                View Ministry Flyer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="bg-navy-900 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2">The Word</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display text-gold-200 mb-6">Scripture of the Day</h2>
          <div className="bg-navy-950 rounded-sm p-6 sm:p-8 md:p-10 border border-gold-600/40 shadow-xl">
            <p className="text-gold-300 text-base sm:text-xl md:text-2xl italic leading-relaxed mb-4">
              "For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life."
            </p>
            <p className="font-display text-gold-500 text-xs sm:text-sm tracking-widest">— John 3:16</p>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-navy-950 py-12 sm:py-16 px-4 sm:px-6 text-center border-t border-gold-800/30">
        <div className="max-w-2xl mx-auto">
          <p className="text-gold-400/80 text-xs font-display tracking-widest uppercase mb-2 sm:mb-3">
            Kingdom Partnership
          </p>
          <h2 className="font-display text-gold-200 text-xl sm:text-2xl md:text-3xl mb-4">
            Partner With Us to Change Lives
          </h2>
          <p className="text-gold-200/60 text-xs sm:text-sm mb-6 max-w-lg mx-auto">
            Your generous tithes, offerings, and building fund gifts help us expand the Kingdom of God and take the message of freedom across nations.
          </p>
          <Link to="/give" className="btn-gold px-8 sm:px-10 py-3.5 rounded-sm text-xs sm:text-sm inline-block shadow-lg">
            Give Online Now
          </Link>
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
