"use client";
import React, { useEffect, useRef, useState } from "react";

type selectedFilterPropType = {
  category: string;
  options: string[];
};

function SelectFilter({ category, options }: selectedFilterPropType) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>();
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleChangeOption = (e: React.MouseEvent<HTMLElement>) => {
    const value = (e.target as HTMLInputElement).textContent;
    if (value) {
      setSelectedOption(value);
      window.location.href = `/product?sort=${value}`;
    }
    setShowDropDown(false);
  };

  useEffect(() => {
    // Handler to close dropdown if clicked outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowDropDown(false);
      }
    };

    // Attach listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };


  }, [selectedOption]);

  return (
    <div ref={buttonRef} className="relative">
      <div
        onClick={() => setShowDropDown(!showDropDown)}
        className="text-white flex items-center justify-start gap-2 px-3 pt-2 bg-secondary shadow rounded-md cursor-pointer min-w-20 mobile:px-2 mobile:pt-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M2 3.75A.75.75 0 0 1 2.75 3h11.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 7.5a.75.75 0 0 1 .75-.75h7.508a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 7.5ZM14 7a.75.75 0 0 1 .75.75v6.59l1.95-2.1a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 1 1 1.1-1.02l1.95 2.1V7.75A.75.75 0 0 1 14 7ZM2 11.25a.75.75 0 0 1 .75-.75h4.562a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
        <p className="pb-3 mobile:pb-2 mobile:text-sm">
          {!selectedOption ? category : selectedOption}
        </p>
      </div>
      {showDropDown && (
        <div className="absolute z-50 top-0 right-0 space-y-3 bg-secondary shadow-md p-3 rounded-md w-full min-w-40 mobile:fixed mobile:top-auto mobile:bottom-0 mobile:p-5 mobile:border-t-4 mobile:border-primary mobile:divide-y mobile:divide-zinc-700/50 mobile:rounded-none mobile:rounded-tr-2xl mobile:rounded-tl-2xl">
          {options.map((item, index) => (
            <p
              className="text-sm text-white/80 cursor-pointer py-1 hover:text-rose-400 mobile:text-base"
              onClick={handleChangeOption}
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectFilter;
