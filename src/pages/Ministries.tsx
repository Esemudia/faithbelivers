import { useState } from 'react';
import pastorImg from '../assets/pastor-israel-erechovwe.jpg';
import worshipImg from '../assets/worship-prayer-ministry.jpg';
import cathedralImg from '../assets/church-cathedral-exterior.jpg';
import interiorsStrip from '../assets/church-interiors-strip.jpg';
import ImageModal from '../components/ImageModal';
import VideoSection from '../components/VideoSection';

const ministries = [
  {
    icon: '🕊',
    title: 'Prayer & Deliverance Ministry',
    desc: 'The engine room of the church — contending in the Spirit, interceding for souls, and ministering supernatural freedom to all in bondage.',
    img: worshipImg,
    lead: 'Revd. Israel Ufuoma Erechovwe',
    customLead: true,
  },
  {
    icon: '📖',
    title: 'Word, Bible Study & Discipleship',
    desc: 'Equipping believers in the undiluted truth of Scripture, raising mature disciples grounded in faith and ready for Kingdom impact.',
    img: pastorImg,
    lead: 'Lead Pastor & Pastoral Faculty',
    customLead: true,
  },
  {
    icon: '🙌',
    title: 'Worship & Creative Arts',
    desc: 'Ushering the congregation into the glorious presence of God through anointed praise, deep worship, and sacred creative expression.',
    img: cathedralImg,
    lead: 'Music & Worship Directorate',
    customLead: false,
  },
  {
    icon: '👶',
    title: 'Children & Youth Ministry',
    desc: 'Raising godly champions from childhood to young adulthood, instilling kingdom character, biblical truth, and purpose.',
    img: interiorsStrip,
    lead: 'Children & Youth Pastors',
    customLead: false,
  },
  {
    icon: '💼',
    title: 'Business Men & Women Prayer Hub',
    desc: 'Empowering marketplace leaders, professionals, and entrepreneurs to thrive financially and spiritually in their callings.',
    img: cathedralImg,
    lead: 'Marketplace Ministry Team',
    customLead: false,
  },
  {
    icon: '📢',
    title: 'Evangelism & Community Missions',
    desc: 'Taking the message of Freedom in Christ beyond church walls through aggressive soul winning, tract distribution, and welfare outreaches.',
    img: worshipImg,
    lead: 'Missions & Outreach Team',
    customLead: false,
  },
];

export default function Ministries() {
  const [modalImage, setModalImage] = useState<{ src: string; title: string; caption?: string } | null>(null);

  return (
    <div className="min-h-screen bg-navy-950 text-gold-200">
      {/* Hero */}
      <section
        className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 px-4 text-center"
        style={{
          backgroundImage: `url(${cathedralImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/95 via-navy-950/88 to-navy-950/98" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2 sm:mb-3">Serving the Lord Together</p>
          <h1 className="font-decorative text-2xl sm:text-4xl md:text-5xl gold-text mb-3">Our Ministries</h1>
          <p className="text-gold-300/80 text-xs sm:text-sm md:text-base font-body italic max-w-xl mx-auto">
            "For as we have many members in one body, and all members have not the same office: So we, being many, are one body in Christ." — Romans 12:4-5
          </p>
          <div className="section-divider max-w-[80px] sm:max-w-[100px] mx-auto mt-4 sm:mt-5" />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-navy-900 py-8 sm:py-10 px-4 text-center border-b border-gold-800/20">
        <p className="max-w-2xl mx-auto text-gold-200/70 text-xs sm:text-sm md:text-base leading-relaxed">
          At Faith Believers Ministry, every department is dedicated to one supreme mission: building faith, spreading love, changing lives, and advancing the Kingdom of God.
        </p>
      </section>

      {/* Ministries Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map(({ icon, title, desc, img, lead }) => (
            <div
              key={title}
              className="card-navy rounded-sm overflow-hidden group flex flex-col justify-between border border-gold-800/30 hover:border-gold-500/50 transition-all duration-300"
            >
              <div>
                <div
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => setModalImage({ src: img, title, caption: lead })}
                >
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors" />
                  <div className="absolute top-3 left-3 text-2xl bg-navy-950/80 w-10 h-10 rounded-full flex items-center justify-center border border-gold-500/40 shadow-md">
                    {icon}
                  </div>
                  <div className="absolute bottom-2 right-2 text-[10px] text-gold-300 bg-navy-950/90 px-2 py-0.5 rounded-sm border border-gold-500/30">
                    Click to Enlarge
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-gold-300 text-base mb-2 group-hover:text-gold-200 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gold-200/60 text-xs sm:text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5">
                <div className="pt-3 border-t border-gold-800/20 flex items-center justify-between text-xs">
                  <span className="text-gold-400 font-display text-[11px] uppercase tracking-wider">{lead}</span>
                  <a href="/contact" className="text-gold-300 hover:text-gold-100 font-display text-[11px]">Join Team →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ministries in Action Video Gallery */}
      <VideoSection
        title="Ministries in Action"
        subtitle="Watch our worship team, choir, intercessory army, and church family in real, vibrant motion."
        limit={6}
        showCategories={true}
      />

      {/* Join CTA */}
      <section className="bg-navy-900 py-12 sm:py-16 px-4 text-center border-t border-gold-800/30">
        <p className="text-gold-400 text-xs font-display tracking-widest uppercase mb-2">Find Your Calling</p>
        <h2 className="font-display text-gold-200 text-xl sm:text-2xl md:text-3xl mb-3">Discover Where You Belong</h2>
        <p className="text-gold-200/60 max-w-lg mx-auto text-xs sm:text-sm leading-relaxed mb-6">
          God has given you unique gifts, talents, and experiences for the edification of the body of Christ. Step forward today and be part of God's workforce.
        </p>
        <a href="/contact" className="btn-gold px-8 py-3.5 rounded-sm text-xs inline-block">
          Volunteer / Join a Ministry
        </a>
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
