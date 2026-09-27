import { useEffect, useRef } from 'react';

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

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    // Auto play when modal opens
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked by browser policy until user interacts
      });
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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

        {/* Video Player */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden max-h-[70vh]">
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            controls
            playsInline
            className="w-full max-h-[70vh] object-contain shadow-2xl"
          >
            Your browser does not support the video tag.
          </video>
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
