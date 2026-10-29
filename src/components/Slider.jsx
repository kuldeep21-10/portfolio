import { useState, useEffect } from "react";

const Slider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto slide: har 3 second me next, hover pe ruk jata hai
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [paused, images.length]);

  return (
    <div
      className="relative  overflow-hidden bg-[#12231c]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Screenshot ${i + 1}`}
            loading="lazy"
            className="h-full w-full shrink-0 object-contain"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full ${
              i === current ? "bg-[#6EE7B7]" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
