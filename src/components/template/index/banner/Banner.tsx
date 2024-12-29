"use client";
import React, { useState, useEffect, useRef } from "react";
import BannerBlog from "./BannerBlog";

const Banner: React.FC = () => {
  const slides: string[] = [
    "https://media.rawg.io/media/games/2e7/2e732a02c29c84ca177855848932a5aa.jpg",
    "https://media.rawg.io/media/games/d97/d97f663b752a6484df105993f17abb49.jpg",
    "https://media.rawg.io/media/games/f24/f2493ea338fe7bd3c7d73750a85a0959.jpeg",
    "https://media.rawg.io/media/games/708/7080e6c87e0825cb02888bf3c44b3889.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [direction, setDirection] = useState<"top" | "bottom">("bottom"); // Direction of animation
  const [startY, setStartY] = useState<number | null>(null);

  const autoplayRef = useRef<NodeJS.Timeout | null>(null); // Ref to store autoplay interval

  const nextSlide = () => {
    if (isAnimating) return;
    resetAutoplay(); // Restart autoplay
    setDirection("bottom");
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Match animation duration
  };

  const prevSlide = () => {
    if (isAnimating) return;
    resetAutoplay(); // Restart autoplay
    setDirection("top");
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Match animation duration
  };

  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(nextSlide, 5000);
  };

  const applyCurrentSlide = (index: number) => {
    setCurrentSlide(index);
    resetAutoplay();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY); // Save the starting touch position
    resetAutoplay();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startY === null) return;

    const endY = e.changedTouches[0].clientY; // Capture the ending touch position
    const diff = startY - endY; // Calculate the swipe distance

    if (diff > 50) nextSlide(); // Swipe left
    if (diff < -50) prevSlide(); // Swipe right

    setStartY(null); // Reset the touch position
  };

  // Autoplay setup
  useEffect(() => {
    resetAutoplay(); // Start autoplay on component mount

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="px-[100px] text-center overflow-hidden desktop:px-12 mobile:px-4 mobile:pt-1">
      <div className="flex flex-row-reverse gap-4 items-center justify-between mobile:flex-col-reverse">
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[550px] overflow-hidden rounded-3xl"
        >
          {/* Slides */}
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-[600px] object-cover object-top rounded-3xl transition-transform duration-300 ${
                index === currentSlide
                  ? "translate-y-0"
                  : direction === "bottom"
                  ? "translate-y-full opacity-0 pointer-events-none"
                  : "-translate-y-full opacity-0 pointer-events-none"
              }`}
            />
          ))}
        </div>
        <div className="flex flex-col justify-start items-center gap-4 mobile:flex-row mobile:gap-2 mobile:w-[99%] mobile:pl-5">
          <button
            onClick={prevSlide}
            className="p-2 z-10 bg-primary text-white rounded-full shadow hover:bg-primary/80 transition-colors mobile:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 -rotate-90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          </button>
          {slides.map((item, index) => (
            <img
              key={index}
              src={item}
              alt="image gallery"
              onClick={() => applyCurrentSlide(index)}
              className={`w-28 h-16 rounded-lg cursor-pointer border-[3px] transition-all mobile:rounded mobile:w-1/4 mobile:h-auto mobile:border-[2px] ${
                index === currentSlide ? "scale-110 border-violet-500" : "border-transparent"
              }`}
            />
          ))}
          <button
            onClick={nextSlide}
            className="p-2 z-10 bg-primary text-white rounded-full shadow hover:bg-primary/80 transition-colors mobile:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 rotate-90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <BannerBlog />
    </div>
  );
};

export default Banner;
