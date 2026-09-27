import { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  caption?: string;
}

export default function ImageModal({ isOpen, onClose, imageSrc, title, caption }: ImageModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-navy-950 border border-gold-600/40 rounded-sm shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gold-800/30 bg-navy-900/90">
          <div>
            <h3 className="font-display text-gold-300 text-sm sm:text-base font-semibold">{title}</h3>
            {caption && <p className="text-gold-200/60 text-xs mt-0.5">{caption}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gold-400 hover:text-gold-200 hover:bg-gold-500/10 rounded-sm transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image viewport */}
        <div className="flex-1 overflow-auto p-2 sm:p-4 flex items-center justify-center bg-navy-950/80">
          <img
            src={imageSrc}
            alt={title}
            className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-sm shadow-lg border border-gold-800/20"
          />
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 border-t border-gold-800/20 bg-navy-900/80 flex items-center justify-between text-xs text-gold-400/60 font-display">
          <span>Faith Believers Ministry International</span>
          <span className="hidden sm:inline">Press ESC or click outside to close</span>
        </div>
      </div>
    </div>
  );
}
