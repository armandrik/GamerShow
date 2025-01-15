import React from "react";

function ProductSkeleton() {
  return (
    <div className="w-auto relative flex flex-col items-center justify-between gap-5 shadow-md rounded-2xl overflow-hidden bg-secondary transition-all snap-start flex-shrink-0 mobile:w-full">
      {/* Placeholder for metaScore */}
      <div className="absolute w-8 h-8 flex items-center justify-center top-5 right-5 rounded-full bg-secondary/50  mobile:right-2 mobile:top-2 mobile:w-6 mobile:h-6">
        <div className="w-4 h-4 bg-gray-500 rounded-full animate-pulse"></div>
      </div>

      {/* Placeholder for image */}
      <div className="selection:bg-transparent h-48 w-full mobile:h-32 bg-gray-700 animate-pulse"></div>

      {/* Placeholder for title */}
      <div className=" py-3 pointer-events-none transition-all mobile:py-0">
        <div className="w-3/4 h-6 bg-gray-500 rounded-md animate-pulse mx-auto"></div>
      </div>

      {/* Placeholder for price */}
      <div className="flex items-center justify-between text-lg px-7 mobile:px-3">
        <div className="w-1/3 h-6 bg-gray-500 rounded-md animate-pulse"></div>
        <div className="w-1/4 h-6 bg-gray-500 rounded-md animate-pulse"></div>
      </div>

      {/* Skeleton buttons */}
      <div className="w-full border-t border-zinc-700/50 flex items-center justify-between">
        <button className="w-40 bg-gray-700 p-5 rounded-br-2xl rounded-tl-2xl pointer-events-none animate-pulse mobile:p-3 mobile:w-28 small:rounded-none small:flex-grow mobile:h-12">
          <div className="w-20 h-6 bg-gray-500 rounded-md mx-auto mobile:hidden"></div>
        </button>
        <button className="bg-gray-700 p-5 rounded-bl-2xl rounded-tr-2xl pointer-events-none animate-pulse mobile:p-3 small:rounded-none">
          <div className="w-6 h-6 bg-gray-500 rounded-full mx-auto"></div>
        </button>
      </div>
    </div>
  );
}

export default ProductSkeleton;
