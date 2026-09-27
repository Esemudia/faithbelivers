import { useState } from 'react';
import { Link } from 'react-router';
import pastorImg from '../assets/pastor-israel-erechovwe.jpg';
import worshipImg from '../assets/worship-prayer-ministry.jpg';
import cathedralImg from '../assets/church-cathedral-exterior.jpg';
import masterplanImg from '../assets/church-campus-masterplan.jpg';
import structureImg from '../assets/church-building-structure.jpg';
import interiorsStrip from '../assets/church-interiors-strip.jpg';
import pastorFlyer from '../assets/pastor-worship-flyer.jpg';
import ImageModal from '../components/ImageModal';
import VideoSection from '../components/VideoSection';

const coreValues = [
  { icon: '✝', label: 'Faith & The Word', desc: 'Anchored completely in the undiluted, infallible Word of God.' },
  { icon: '🔥', label: 'Prayer & Power', desc: 'A culture of unceasing intercession, deliverance, and spiritual warfare.' },
  { icon: '🕊', label: 'Freedom in Christ', desc: 'Proclaiming total liberty from bondage, sin, and limitation (John 8:36).' },
  { icon: '❤', label: 'Love & Service', desc: 'Demonstrating Christ\'s compassion through service to the body and community.' },
  { icon: '👑', label: 'Holiness & Integrity', desc: 'Living a consecrated, victorious life that honours God in all things.' },
  { icon: '📢', label: 'Evangelism & Missions', desc: 'Reaching the unreached and raising disciples across every nation.' },
];

const campusFacilities = [
  'Main Sanctuary (5,000+ Seating Capacity)',
  'Fellowship & Banquet Hall',
  'Multi-Purpose Hall & Seminar Rooms',
  'Children\'s Church & Youth Church Auditoriums',
  'Pastoral Offices & Leadership Council Rooms',
  'Spiritual Counseling & Prayer Suites',
  'Choir & Media Broadcast Suite',
  'Classrooms & Bible School Library',
  'Guest House & Visitors Accommodation',
  'Health Centre (First Aid & Wellness)',
  'Sports Field & Youth Community Hub',
  'Power House (Generators & Solar) & Water Plant',
  'Security Gate House & Landscaped Green Areas',
  'Ample Parking Space for Members & Guests',
];

export default function About() {
  const [modalImage, setModalImage] = useState<{ src: string; title: string; caption?: string } | null>(null);

  return (
    <div className="min-h-screen bg-navy-950 text-gold-200">
      {/* Page Hero */}
      <section
        className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 px-4 text-center"
        style={{
          backgroundImage: `url(${cathedralImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/95 via-navy-950/88 to-navy-950/98" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2 sm:mb-3">
            Who We Are · Freedom in Christ
          </p>
          <h1 className="font-decorative text-2xl sm:text-4xl md:text-5xl gold-text mb-3">
            About Faith Believers Ministry
          </h1>
          <p className="text-gold-300/80 text-xs sm:text-sm md:text-base font-body italic max-w-2xl mx-auto">
            "Raising believers · Restoring lives · Fulfilling purpose · Advancing God's Kingdom"
          </p>
          <div className="section-divider max-w-[100px] mx-auto mt-4 sm:mt-5" />
        </div>
      </section>

      {/* Ministry Overview & Real Altar Photo */}
      <section className="py-12 sm:py-18 px-4 sm:px-6 bg-navy-900 border-b border-gold-800/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2">Our Foundation</p>
            <h2 className="font-display text-gold-200 text-xl sm:text-2xl md:text-3xl mb-4 leading-snug">
              A Ministry Born by Divine Mandate
            </h2>
            <p className="text-gold-200/70 text-xs sm:text-sm leading-relaxed mb-3">
              Faith Believers Ministry Int'l (also known as <strong>Freedom in Christ</strong>) was established on <strong>7th June, 2026</strong>, with a clear spiritual mandate: to proclaim the Gospel of Jesus Christ, establish believers in God's undiluted Word, and raise people who live purposeful, victorious Christian lives.
            </p>
            <p className="text-gold-200/70 text-xs sm:text-sm leading-relaxed mb-4">
              We are a Spirit-filled, Christ-centred ministry where people encounter God, grow in spiritual maturity, and experience genuine deliverance from spiritual bondages into the liberty of Christ.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 bg-navy-950/80 rounded-sm border-l-2 border-gold-500">
                <h4 className="font-display text-xs uppercase tracking-wider text-gold-300 font-semibold mb-1">Our Vision</h4>
                <p className="text-xs text-gold-200/70 italic">
                  "To raise a people who know God, walk in His Word, experience freedom through Jesus Christ, and fulfil their God-given purpose."
                </p>
              </div>

              <div className="p-3.5 bg-navy-950/80 rounded-sm border-l-2 border-gold-500">
                <h4 className="font-display text-xs uppercase tracking-wider text-gold-300 font-semibold mb-1">Our Mission</h4>
                <p className="text-xs text-gold-200/70">
                  Preaching Jesus Christ, establishing a lifestyle of prayer and holiness, healing the broken-hearted, and equipping believers for impactful Kingdom leadership.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div
              className="relative rounded-sm overflow-hidden border-2 border-gold-500/40 shadow-2xl group cursor-pointer"
              onClick={() => setModalImage({ src: worshipImg, title: 'Altar Prayer & Ministry in Action', caption: 'Revd. Israel Ufuoma Erechovwe ministering to congregants during church prayer service' })}
            >
              <img
                src={worshipImg}
                alt="Altar Prayer & Deliverance Service"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-gold-300 bg-navy-950/80 px-3 py-1.5 rounded-sm border border-gold-500/30">
                <span className="font-display text-[11px] sm:text-xs">Ministry at the Altar: Prayer & Deliverance</span>
                <span className="text-[10px] text-gold-400">Click to View</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Pastor Profile - Real Photo & Background */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gold-100 text-navy-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-gold-700 text-xs font-display tracking-widest uppercase mb-2">Pastoral Leadership</p>
            <h2 className="font-display text-navy-900 text-2xl sm:text-3xl md:text-4xl">
              Meet Revd. Israel Ufuoma Erechovwe
            </h2>
            <p className="text-gold-800 text-xs sm:text-sm font-display uppercase tracking-widest mt-1">
              Lead Pastor & Spiritual Father
            </p>
            <div className="section-divider max-w-[100px] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Pastor Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-gold-500 to-navy-900 rounded-sm opacity-60 blur-xs" />
                <img
                  src={pastorImg}
                  alt="Revd. Israel Ufuoma Erechovwe"
                  className="relative rounded-sm w-full h-auto object-cover shadow-2xl border-2 border-gold-600/40"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-navy-950/95 text-gold-200 p-3 rounded-sm text-center border border-gold-500/40">
                  <p className="font-display text-sm font-semibold text-gold-300">Revd. Israel Ufuoma Erechovwe</p>
                  <p className="text-[10px] text-gold-400 uppercase tracking-widest">Lead Pastor · Freedom in Christ</p>
                </div>
              </div>

              <div className="mt-4 flex gap-3 w-full max-w-sm justify-center">
                <button
                  onClick={() => setModalImage({ src: pastorFlyer, title: 'Worship with Revd. Israel Ufuoma Erechovwe', caption: 'Official Church Weekly Schedule & Counseling Hours' })}
                  className="btn-outline-navy w-full py-2.5 text-xs text-center rounded-sm font-display"
                >
                  View Pastor's Flyer
                </button>
              </div>
            </div>

            {/* Pastor Details */}
            <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-navy-800/80 leading-relaxed">
              <p>
                <strong>Revd. Israel Ufuoma Erechovwe</strong> is a dedicated Christian minister, preacher, teacher of God's Word, and spiritual leader with an enduring burden for souls, restoration, discipleship, and destiny fulfilment.
              </p>
              <p>
                Under his leadership, Faith Believers Ministry Int'l has become a lighthouse of spiritual transformation, where the sick are prayed for, the broken receive healing, and men and women are equipped to walk in divine purpose.
              </p>

              {/* Education & Ministerial Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-white/70 rounded-sm border border-gold-400/40">
                  <h4 className="font-display text-xs text-navy-900 uppercase tracking-wider font-semibold mb-1">
                    🎓 Academic Background
                  </h4>
                  <p className="text-xs text-navy-700">
                    Graduated from the prestigious <strong>University of Nigeria, Nsukka (UNN)</strong>, where he studied Veterinary Science (2001–2006).
                  </p>
                </div>

                <div className="p-3.5 bg-white/70 rounded-sm border border-gold-400/40">
                  <h4 className="font-display text-xs text-navy-900 uppercase tracking-wider font-semibold mb-1">
                    📜 Ministerial Credentials
                  </h4>
                  <ul className="text-xs text-navy-700 list-disc list-inside space-y-0.5">
                    <li>Diploma in Theology — PFN College of Theology</li>
                    <li>WOBIN — BCC, LCC, LED</li>
                    <li>Foundation Bible Class — Christian Union, UNN</li>
                  </ul>
                </div>
              </div>

              {/* Family & Origins */}
              <div className="p-3.5 bg-white/70 rounded-sm border border-gold-400/40">
                <h4 className="font-display text-xs text-navy-900 uppercase tracking-wider font-semibold mb-1">
                  👨‍👩‍👧‍👦 Family & Origin
                </h4>
                <p className="text-xs text-navy-700">
                  Revd. Israel hails from <strong>Umolo-Olomu Clan, Ughelli South Local Government Area, Delta State, Nigeria</strong>. He is happily married to <strong>Deaconess (Mrs.) Precious Emuejevoke Erechovwe</strong>, and their blessed union is gifted with wonderful children. Together, they minister as a family consecrated to God's Kingdom.
                </p>
              </div>

              <blockquote className="border-l-3 border-gold-600 pl-4 py-1 italic text-navy-900 bg-gold-200/40 rounded-r-sm">
                "Building people, strengthening faith, raising leaders, and advancing the Kingdom of God."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Mega Church Campus & Architectural Vision */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-navy-900 border-y border-gold-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[10px] font-display uppercase tracking-[0.25em] px-3 py-1 bg-gold-600/20 text-gold-300 border border-gold-500/30 rounded-sm inline-block mb-3">
              Future Campus & Architectural Design
            </span>
            <h2 className="font-decorative text-2xl sm:text-3xl md:text-4xl text-gold-200 mb-3">
              Mega Church Design Structure
            </h2>
            <p className="text-gold-200/70 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
              A 5,000+ seating capacity sanctuary complex designed for spiritual worship, leadership development, conference assemblies, and community outreach.
            </p>
            <div className="section-divider max-w-[100px] mx-auto mt-4" />
          </div>

          {/* Exterior & Blueprint Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <div
              className="card-navy rounded-sm overflow-hidden border border-gold-600/30 group cursor-pointer"
              onClick={() => setModalImage({ src: cathedralImg, title: 'Mega Church Cathedral 3D Render', caption: 'Main front architectural view with grand entrance columns, golden cross and fountains' })}
            >
              <img
                src={cathedralImg}
                alt="Cathedral Exterior"
                className="w-full h-56 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-navy-950 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-sm text-gold-300">Front Cathedral Elevation</h4>
                  <p className="text-xs text-gold-200/50">Modern architectural masterpiece</p>
                </div>
                <span className="text-[10px] font-display uppercase tracking-wider text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded-sm border border-gold-500/30">
                  Enlarge
                </span>
              </div>
            </div>

            <div
              className="card-navy rounded-sm overflow-hidden border border-gold-600/30 group cursor-pointer"
              onClick={() => setModalImage({ src: masterplanImg, title: 'Campus Site Masterplan', caption: 'Aerial layout of sanctuary, halls, parking lot and landscaped grounds' })}
            >
              <img
                src={masterplanImg}
                alt="Campus Masterplan Blueprint"
                className="w-full h-56 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-navy-950 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-sm text-gold-300">Aerial Campus Masterplan</h4>
                  <p className="text-xs text-gold-200/50">Seating Capacity 5,000+ blueprint</p>
                </div>
                <span className="text-[10px] font-display uppercase tracking-wider text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded-sm border border-gold-500/30">
                  Enlarge
                </span>
              </div>
            </div>
          </div>

          {/* Interiors Strip Banner */}
          <div
            className="rounded-sm overflow-hidden border-2 border-gold-500/40 shadow-xl group cursor-pointer mb-8"
            onClick={() => setModalImage({ src: interiorsStrip, title: 'Planned Interior Facilities', caption: 'Main Sanctuary · Fellowship Hall · Children\'s Church · Multi-Purpose Hall · Guest House · Green Areas' })}
          >
            <img
              src={interiorsStrip}
              alt="Mega Church Interior Facilities"
              className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="p-3 bg-navy-950 flex items-center justify-between text-xs text-gold-300">
              <span className="font-display">Facility Renders: Sanctuary, Halls, Guest House & Green Grounds</span>
              <span className="text-[10px] text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded-sm">Click to View Full Strip</span>
            </div>
          </div>

          {/* Facilities List Grid */}
          <div className="card-navy rounded-sm p-6 sm:p-8 border border-gold-700/30">
            <h3 className="font-display text-gold-300 text-base sm:text-lg mb-4 text-center">
              Comprehensive Campus Amenities & Facilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {campusFacilities.map((fac, idx) => (
                <div key={fac} className="flex items-center gap-2 p-2.5 bg-navy-950/60 rounded-sm border border-gold-800/20 text-xs text-gold-200/80">
                  <span className="text-gold-400 font-bold shrink-0">✓</span>
                  <span>{fac}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-gold-800/30 text-center">
              <button
                onClick={() => setModalImage({ src: structureImg, title: 'Full Mega Church Design Blueprint', caption: 'Complete architectural specification poster for Faith Believers Ministry Int\'l' })}
                className="btn-gold py-2.5 px-6 text-xs rounded-sm inline-block"
              >
                Inspect Full Blueprint Infographic
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-navy-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2">Our Beliefs</p>
            <h2 className="font-display text-gold-200 text-xl sm:text-2xl md:text-3xl">Our Core Ministry Values</h2>
            <div className="section-divider max-w-[100px] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {coreValues.map(({ icon, label, desc }) => (
              <div key={label} className="card-navy rounded-sm p-5 sm:p-6 border border-gold-800/30 hover:border-gold-500/40 transition-colors">
                <div className="text-2xl sm:text-3xl mb-3">{icon}</div>
                <h3 className="font-display text-gold-400 text-sm tracking-wider uppercase mb-2">{label}</h3>
                <p className="text-gold-200/60 text-xs sm:text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-outline-gold px-8 py-3 rounded-sm text-xs inline-block">
              Connect With Faith Believers Ministry
            </Link>
          </div>
        </div>
      </section>

      {/* Real Church Life & Worship Video Section */}
      <VideoSection
        limit={6}
        title="Experience Church Life in Motion"
        subtitle="Watch authentic moments of praise, prayer, joyful worship, and warm fellowship at Faith Believers Ministry."
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
