
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StackedPhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const images = [
    "/img/FILM1.jpg",
    "/img/FILM2.jpg",
    "/img/FILM3.jpg",
    "/img/FILM4.jpg",
    "/img/FILM5.jpg"
  ];

  // Auto-advance carousel every 5 seconds (disabled on mobile for performance)
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return; // Disable auto-advance on mobile

    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isDragging]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle touch events for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setIsDragging(false);
  };

  // Mouse drag support for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStart(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setTouchEnd(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      handleTouchEnd();
    }
  };

  const getImageStyle = (index: number) => {
    const diff = index - currentIndex;
    const absIndex = Math.abs(diff);
    const isMobile = window.innerWidth < 768;

    // Simplified for mobile: only show current image
    if (isMobile && absIndex > 0) return { display: 'none' };
    // Desktop: show current and next 2 images in stack
    if (!isMobile && absIndex > 2) return { display: 'none' };

    // Simplified transforms for mobile
    if (isMobile) {
      return {
        transform: 'translateZ(0)',
        zIndex: 1,
        opacity: 1,
        transition: isDragging ? 'none' : 'opacity 0.3s ease',
      };
    }

    // Full desktop effects
    const baseRotation = diff * 3;
    const baseOffset = absIndex * 8;
    const scale = 1 - (absIndex * 0.05);
    const zIndex = images.length - absIndex;
    const opacity = 1 - (absIndex * 0.2);

    return {
      transform: `
        translateX(${diff * 12}px)
        translateY(${baseOffset}px)
        rotate(${baseRotation}deg)
        scale(${scale})
      `,
      zIndex,
      opacity,
      transition: isDragging ? 'none' : 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    };
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Stacked Images Container */}
      <div
        className="relative h-[28rem] cursor-grab active:cursor-grabbing select-none"
        style={{
          willChange: isDragging ? 'transform' : 'auto',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
            style={getImageStyle(index)}
          >
            <img
              src={image}
              alt={`Portfolio photo ${index + 1}`}
              className="w-full h-full object-cover"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
                // Lighter filters for mobile performance
                filter: window.innerWidth < 768 ? 'none' : 'contrast(1.05) saturate(1.02)',
              }}
              loading={index === currentIndex ? "eager" : "lazy"}
              decoding="async"
              draggable={false}
            />
            
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
          </div>
        ))}

        {/* Navigation arrows for desktop */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hidden md:block"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hidden md:block"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary scale-125'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Swipe hint for mobile */}
      <div className="text-center mt-4 md:hidden">
        <p className="text-xs text-muted-foreground opacity-70">
          Swipe to browse photos
        </p>
      </div>
    </div>
  );
};

export default StackedPhotoCarousel;
