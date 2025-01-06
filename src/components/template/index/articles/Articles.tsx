import Article from "@/components/modules/article/Article";
import React from "react";
import ScrollArrows from "../latestgames/ScrollArrows";

function Articles() {
  return (
    <>
      <h2 className="text-white text-2xl text-center mt-16 mb-14 font-bold tablet:mt-5 mobile:text-xl">
        جدیدترین مقالات
      </h2>
      <div className="flex items-start justify-center px-12 mb-11 gap-10 desktop:gap-5 mobile:px-4 tablet-lg:flex-col tablet-lg:items-center mobile:items-start">
        <div className='w-[600px] h-[700px] flex flex-col items-start justify-end gap-2 text-white px-11 py-12 rounded-3xl bg-cover bg-center shadow-articel bg-[url("https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg")] desktop:h-[605px] tablet-lg:h-[500px] tablet-lg:w-full mobile:rounded-xl mobile:px-5 mobile:py-7 mobile:h-[400px]'>
          <div className="flex items-center justify-start gap-2 [&>p]:rounded-lg [&>p]:bg-primary/70 [&>p]:font-semibold [&>p]:text-sm [&>p]:px-3 [&>p]:py-1 mobile:[&>p]:text-xs mobile:[&>p]:font-normal">
            <p>سبک سولز لایک</p>
            <p>دارک فانتزی</p>
          </div>
          <h2 className="font-medium text-3xl mobile:text-2xl">
            بازی Elden Ring منتشر شد
          </h2>
          <p className="font-normal leading-8 mobile:text-base">
            الدن رینگ از خاص ترین، زیباترین و محبوب ترین بازیهای ماجراجویی –
            فانتزی با ساخت فوق العاده از میازاکی برای pc, ps5, xbox است که
            دقایقی پیش ...
          </p>
          <button className="bg-primary px-10 py-3 rounded-2xl font-bold text-base mt-3 hover:bg-primary/80 transition-all mobile:px-7 mobile:py-2">
            مشاهده مقاله
          </button>
        </div>
        <ScrollArrows display="hidden" elementId="scrollarticles" />
        <Article />
      </div>
    </>
  );
}

export default Articles;
