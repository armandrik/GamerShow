"use client";
import React, { useEffect, useState } from "react";

function ScrollToTop(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const backToTop = (): void => {
    if (!isVisible) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const showButton = (): void => {
      window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", showButton);

    return () => window.removeEventListener("scroll", showButton);
  }, []);

  return (
    <div
      onClick={backToTop}
      className={`shadow-lg hover:bg-primary/80 transition-all scroll-to-top ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 15.75 7.5-7.5 7.5 7.5"
        />
      </svg>
    </div>
  );
}

export default ScrollToTop;
