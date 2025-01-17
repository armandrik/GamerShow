"use client";
import React, { useState } from "react";
import ScrollArrows from "../index/latestgames/ScrollArrows";

type galleryPropType = {
  screenshots : string[]
}

function Gallery({screenshots} : galleryPropType) {

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const showCurrentImage = (index: number) => {
    setCurrentSlide(index);
  };

  const nextImage = () => {
    if (currentSlide === screenshots.length - 1) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide((prev) => prev + 1);
  };
  const prevImage = () => {
    if (currentSlide === 0) {
      setCurrentSlide(screenshots.length - 1);
      return;
    }
    setCurrentSlide((prev) => prev - 1);
  };

  return (
    <div className="lg:flex-col items-start justify-start tablet-lg:flex tablet-lg:w-full tablet-lg:gap-2 mobile:flex-col mobile:flex-wrap mobile:gap-0">
      <div className="relative w-[600px] h-[400px] mb-4 desktop:w-[500px] tablet-lg:w-full mobile:h-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={prevImage}
          className="size-7 text-zinc-200 absolute right-5 top-1/2 z-10 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        {screenshots.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="gallery image"
            className={`w-full h-[400px] selection:bg-transparent pointer-events-none border-4 border-zinc-700/40 object-cover object-top rounded-3xl transition-transform duration-300 mobile:h-2/3 ${
              index === currentSlide ? "translate-y-0" : "hidden"
            }`}
          />
        ))}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={nextImage}
          className="size-7 text-zinc-200 absolute left-5 top-1/2 z-10 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <ScrollArrows display="hidden" elementId="galleyImages" />
      <div id="galleyImages" className="w-[600px] flex items-center justify-start flex-wrap gap-3 desktop:w-[500px] desktop:gap-1 tablet-lg:flex-col tablet-lg:w-40 mobile:w-full mobile:flex-nowrap mobile:flex-row mobile:justify-start mobile:overflow-x-auto mobile:snap-x mobile:snap-mandatory mobile:no-scrollbar mobile:scroll-smooth">
        {screenshots.map((item, index) => (
          <img
            onClick={() => showCurrentImage(index)}
            key={index}
            src={item}
            alt="gallery image"
            className="w-48 h-28 rounded-2xl selection:bg-transparent cursor-pointer border-2 border-transparent hover:border-primary transition-all desktop:w-40 desktop:h-24 tablet-lg:h-20 mobile:w-36 mobile:snap-start mobile:flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
