"use client";
import React from "react";

type scrollArrowPropType = {
  elementId: string;
  display : string
};

function ScrollArrows({ elementId ,display }: scrollArrowPropType) {
  const scrollLeft = () => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollLeft += 300; // Scroll left
    } else {
      console.error(`Element with id "${elementId}" not found.`);
    }
  };

  const scrollRight = () => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollLeft -= 300; // Scroll right
    } else {
      console.error(`Element with id "${elementId}" not found.`);
    }
  };

  return (
    <div className={`${display} items-center justify-start gap-4 mb-4 text-rose-400/90 mobile:flex`}>
      <svg
        onClick={scrollLeft}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-9 cursor-pointer mobile:size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
      <svg
        onClick={scrollRight}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-9 cursor-pointer mobile:size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
        />
      </svg>
    </div>
  );
}

export default ScrollArrows;
