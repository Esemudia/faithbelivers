import { useState } from 'react';
import { churchVideos, ChurchVideo } from '../data/videos';
import VideoModal from './VideoModal';

interface VideoSectionProps {
  limit?: number;
  categoryFilter?: string;
  title?: string;
  subtitle?: string;
  showCategories?: boolean;
}

const allCategories = ['All', 'Welcome', 'Worship', 'Praise', 'Music', 'Celebration', 'Deliverance', 'Fellowship'];

export default function VideoSection({
  limit,
  categoryFilter,
  title = 'Ministry Moments in Motion',
  subtitle = 'Experience the tangible presence of God, fervent worship, and life-changing praise at Faith Believers Ministry.',
  showCategories = true,
}: VideoSectionProps) {
  const [activeCategory, setActiveCategory] = useState(categoryFilter || 'All');
  const [selectedVideo, setSelectedVideo] = useState<ChurchVideo | null>(null);

  // Filter videos
  const filtered = churchVideos.filter(v => {
    if (activeCategory === 'All') return true;
    return v.category === activeCategory;
  });

  const displayedVideos = limit ? filtered.slice(0, limit) : filtered;
  const heroVideo = displayedVideos[0] || churchVideos[0];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-navy-950 border-t border-gold-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-[10px] font-display uppercase tracking-[0.25em] px-3 py-1 bg-gold-600/20 text-gold-300 border border-gold-500/30 rounded-sm inline-block mb-3">
            Real Church Service Video Clips
          </span>
          <h2 className="font-decorative text-2xl sm:text-3xl md:text-4xl text-gold-200 mb-3">
            {title}
          </h2>
          <p className="text-gold-200/70 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-body">
            {subtitle}
          </p>
          <div className="section-divider max-w-[100px] mx-auto mt-4" />
        </div>

        {/* Featured Video Spotlight */}
        {heroVideo && (
          <div className="mb-10 card-navy rounded-sm overflow-hidden border-2 border-gold-500/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 bg-navy-900">
            <div
              className="lg:col-span-7 relative aspect-video bg-black cursor-pointer group flex items-center justify-center overflow-hidden"
              onClick={() => setSelectedVideo(heroVideo)}
            >
              <img
                src={heroVideo.poster}
                alt={heroVideo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors" />

              {/* Pulsing Play Button */}
              <div className="relative z-10 w-16 sm:w-20 h-16 sm:h-20 rounded-full border-2 border-gold-400 bg-navy-950/85 backdrop-blur-xs flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <span className="absolute inset-0 rounded-full bg-gold-500/20 animate-ping" />
                <svg className="w-7 sm:w-8 h-7 sm:h-8 text-gold-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              {/* Duration badge */}
              <span className="absolute bottom-3 right-3 text-[11px] font-display bg-navy-950/90 text-gold-300 px-2.5 py-1 rounded-sm border border-gold-500/40">
                ⏱ {heroVideo.duration}
              </span>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] px-2.5 py-1 rounded-sm font-display tracking-wider uppercase bg-gold-600 text-navy-950 font-bold inline-block mb-3">
                  Featured Clip · {heroVideo.category}
                </span>
                <h3 className="font-display text-gold-200 text-lg sm:text-xl font-semibold mb-2 leading-snug">
                  {heroVideo.title}
                </h3>
                <p className="text-gold-200/70 text-xs sm:text-sm leading-relaxed mb-6 font-body">
                  {heroVideo.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gold-800/30 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-gold-400/80 font-display">
                  Watch in High Definition
                </span>
                <button
                  onClick={() => setSelectedVideo(heroVideo)}
                  className="btn-gold py-2.5 px-5 text-xs rounded-sm inline-flex items-center gap-2"
                >
                  <span>▶</span> Play Video
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Tabs */}
        {showCategories && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-8">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-display tracking-wider uppercase rounded-sm transition-colors ${
                  activeCategory === cat
                    ? 'bg-gold-600 text-navy-950 font-bold shadow-xs'
                    : 'border border-gold-700/40 text-gold-300 hover:border-gold-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {displayedVideos.map(video => (
            <div
              key={video.id}
              className="card-navy rounded-sm overflow-hidden group border border-gold-800/30 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail */}
                <div
                  className="relative aspect-video bg-navy-950 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-navy-950/30 group-hover:bg-navy-950/10 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border border-gold-400 bg-navy-950/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 text-gold-400 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Category badge */}
                  <span className="absolute top-2 left-2 text-[9px] px-2 py-0.5 rounded-xs font-display tracking-wider uppercase bg-navy-950/90 text-gold-300 border border-gold-500/30">
                    {video.category}
                  </span>

                  {/* Duration */}
                  <span className="absolute bottom-2 right-2 text-[10px] font-display bg-navy-950/90 text-gold-300 px-2 py-0.5 rounded-xs border border-gold-500/30">
                    {video.duration}
                  </span>
                </div>

                {/* Details */}
                <div className="p-4">
                  <h4 className="font-display text-gold-200 text-xs sm:text-sm font-semibold mb-1 leading-snug group-hover:text-gold-300 transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-gold-200/60 text-xs line-clamp-2 leading-relaxed font-body">
                    {video.desc}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4">
                <button
                  onClick={() => setSelectedVideo(video)}
                  className="w-full btn-outline-gold py-1.5 text-[11px] rounded-xs font-display text-center"
                >
                  Watch Clip →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <VideoModal
          isOpen={true}
          onClose={() => setSelectedVideo(null)}
          videoSrc={selectedVideo.src}
          poster={selectedVideo.poster}
          title={selectedVideo.title}
          category={selectedVideo.category}
          desc={selectedVideo.desc}
        />
      )}
    </section>
  );
}
