import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideData {
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  imageUrl: string;
}

interface ElegantCarouselProps {
  slides: SlideData[];
}

export function ElegantCarousel({ slides }: ElegantCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const SLIDE_DURATION = 6000;

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      setProgress(0);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  const goNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
  }, [currentIndex, goToSlide, slides.length]);

  const goPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  }, [currentIndex, goToSlide, slides.length]);

  useEffect(() => {
    if (isPaused) return;

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);

    intervalRef.current = setInterval(() => {
      goNext();
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, isPaused, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const currentSlide = slides[currentIndex];

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-azimute-paper dark:bg-azimute-dark-paper flex items-center min-h-[600px] lg:min-h-[700px] py-12 lg:py-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background accent wash */}
      <div
        className="absolute inset-0 z-0 opacity-40 dark:opacity-20 transition-all duration-1000 ease-in-out"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${currentSlide.accent}20 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 w-full max-w-container mx-auto px-6 md:px-12 xl:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center relative min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={contentVariants}
              className="flex flex-col"
            >
              {/* Collection number */}
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-azimute-black/20 dark:bg-white/20" />
                <span className="text-[12px] font-medium tracking-widest text-azimute-charcoal dark:text-[#FAFAF7]/70">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[clamp(2.5rem,4vw,3.5rem)] font-serif text-azimute-black dark:text-[#FAFAF7] leading-[1.1] mb-4">
                {currentSlide.title}
              </h3>

              {/* Subtitle */}
              <p
                className="text-lg md:text-xl font-medium mb-6 transition-colors duration-500"
                style={{ color: currentSlide.accent }}
              >
                {currentSlide.subtitle}
              </p>

              {/* Description */}
              <p className="text-azimute-charcoal/80 dark:text-[#FAFAF7]/70 text-[15px] md:text-base leading-relaxed max-w-md">
                {currentSlide.description}
              </p>

              {/* Navigation Arrows */}
              <div className="flex gap-4 mt-12">
                <button
                  onClick={goPrev}
                  className="w-12 h-12 rounded-full border border-azimute-black/10 dark:border-white/10 flex items-center justify-center hover:bg-azimute-black/5 dark:hover:bg-white/5 transition-colors text-azimute-charcoal dark:text-[#FAFAF7]"
                  aria-label="Previous slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goNext}
                  className="w-12 h-12 rounded-full border border-azimute-black/10 dark:border-white/10 flex items-center justify-center hover:bg-azimute-black/5 dark:hover:bg-white/5 transition-colors text-azimute-charcoal dark:text-[#FAFAF7]"
                  aria-label="Next slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[550px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={imageVariants}
              className="absolute inset-0 overflow-hidden rounded-sm shadow-premium dark:shadow-none border border-transparent dark:border-white/5 bg-azimute-blue-soft/10 dark:bg-[#080D14]"
            >
              <motion.img
                src={currentSlide.imageUrl}
                alt={currentSlide.title}
                className="w-full h-full object-cover"
                animate={{ scale: 1.05 }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
              />
              <div
                className="absolute inset-0 mix-blend-multiply opacity-20 dark:opacity-40 transition-colors duration-1000"
                style={{
                  background: `linear-gradient(135deg, ${currentSlide.accent}40 0%, transparent 60%)`,
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-0 left-0 w-full flex z-20 px-6 md:px-12 xl:px-16 max-w-container mx-auto pb-8">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="flex-1 group px-2"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className="h-1 relative bg-azimute-black/10 dark:bg-white/10 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full transition-all duration-75 rounded-full"
                style={{
                  width: index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%',
                  backgroundColor: index === currentIndex ? currentSlide.accent : index < currentIndex ? currentSlide.accent : undefined,
                }}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
