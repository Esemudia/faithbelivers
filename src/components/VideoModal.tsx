import { useEffect, useRef, useState } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
  poster?: string;
  category?: string;
  desc?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoSrc,
  title,
  poster,
  category,
  desc,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    setHasError(false);
    setIsPlaying(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    // Auto play when modal opens, handling browser autoplay restrictions gracefully
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay blocked by browser policy without user gesture; show play overlay
            setIsPlaying(false);
          });
      }
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      if (video) {
        video.pause();
      }
    };
  }, [isOpen, onClose, videoSrc]);

  if (!isOpen) return null;

  const handleManualPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-navy-950 border border-gold-600/40 rounded-sm shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gold-800/30 bg-navy-900/95">
          <div className="flex items-center gap-2.5">
            {category && (
              <span className="text-[10px] px-2.5 py-0.5 rounded-sm font-display tracking-wider uppercase bg-gold-600 text-navy-950 font-bold">
                {category}
              </span>
            )}
            <h3 className="font-display text-gold-200 text-xs sm:text-sm font-semibold truncate max-w-[280px] sm:max-w-md">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gold-400 hover:text-gold-200 hover:bg-gold-500/10 rounded-sm transition-colors focus:outline-none"
            aria-label="Close video player"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden max-h-[70vh] group">
          {hasError ? (
            <div className="p-8 text-center text-gold-200 max-w-md mx-auto">
              <span className="text-3xl mb-3 block">⚠️</span>
              <h4 className="font-display text-sm font-semibold mb-1 text-gold-300">Video Playback Notice</h4>
              <p className="text-xs text-gold-200/70 mb-4">
                Unable to load this video clip. Please check your internet connection and try reloading.
              </p>
              <button
                onClick={() => {
                  setHasError(false);
                  if (videoRef.current) {
                    videoRef.current.load();
                    videoRef.current.play().catch(() => {});
                  }
                }}
                className="btn-gold py-2 px-4 text-xs rounded-sm"
              >
                Retry Playback
              </button>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                poster={poster}
                controls
                playsInline
                preload="auto"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={() => setHasError(true)}
                className="w-full max-h-[70vh] object-contain shadow-2xl"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Large Play Overlay if paused or autoplay was prevented */}
              {!isPlaying && (
                <div
                  onClick={handleManualPlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity"
                >
                  <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full border-2 border-gold-400 bg-navy-950/90 text-gold-400 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <svg className="w-8 sm:w-10 h-8 sm:h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Description / Caption Footer */}
        {desc && (
          <div className="px-4 py-3 border-t border-gold-800/20 bg-navy-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <p className="text-gold-200/80 font-body leading-relaxed">{desc}</p>
            <span className="text-[10px] text-gold-400/50 font-display uppercase tracking-widest shrink-0">
              Faith Believers Ministry Media
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
