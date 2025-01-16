import React from "react";

function CartProductSkeleton() {
  return (
    <div className="w-full p-3 pb-6 border-b border-zinc-700 flex items-start justify-start gap-4 last:border-b-0 mobile:p-1 mobile:pb-4 small:flex-col">
      {/* Placeholder for image */}
      <div className="w-52 h-32 bg-gray-700 rounded-lg animate-pulse mobile:w-52 mobile:h-28 small:w-full small:h-auto"></div>

      {/* Placeholder for text */}
      <div className="h-32 flex flex-col items-start justify-start mobile:h-28 small:h-auto">
        <div>
          <div className="w-32 h-6 bg-gray-500 rounded-md animate-pulse mobile:w-28"></div>
          <div className="w-20 h-4 bg-gray-500 rounded-md mt-2 animate-pulse mobile:mb-4"></div>
        </div>
        <div className="w-24 h-6 bg-gray-500 rounded-md mt-10 animate-pulse mobile:mt-4"></div>
      </div>

      {/* Placeholder for delete icon */}
      <div className="w-6 h-6 bg-gray-500 rounded-full animate-pulse self-start mr-auto small:size-6 small:-mt-9"></div>
    </div>
  );
}

export default CartProductSkeleton;
