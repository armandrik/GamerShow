import React from "react";

function Article() {
  const articles = [
    "https://media.rawg.io/media/crop/600/400/games/909/909974d1c7863c2027241e265fe7011f.jpg",
    "https://media.rawg.io/media/crop/600/400/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
    "https://media.rawg.io/media/crop/600/400/games/d97/d97f663b752a6484df105993f17abb49.jpg",
  ];

  return (
    <div id="scrollarticles" className="flex flex-col items-start justify-between gap-9 desktop:gap-3 tablet-lg:w-full mobile:flex-row mobile:justify-start mobile:overflow-x-auto mobile:snap-x mobile:snap-mandatory mobile:no-scrollbar mobile:scroll-smooth">
      {articles.map((item, index) => (
        <div
          key={index}
          className="group flex items-center gap-6 text-white rounded-3xl bg-secondary p-[9px] hover:bg-primary/40 desktop:gap-3 tablet-lg:w-full mobile:flex-shrink-0 mobile:snap-start mobile:flex-col mobile:rounded-xl"
        >
          <img
            src={item}
            className="w-72 object-cover rounded-3xl desktop:w-52 desktop:h-44 tablet-lg:w-64 tablet-lg:object-cover mobile:w-full mobile:object-cover"
          />
          <div className="mobile:w-full">
            <div className="flex items-center justify-start gap-2 [&>p]:rounded-lg [&>p]:text-primary [&>p]:bg-primary/10 [&>p]:text-sm [&>p]:px-3 [&>p]:py-1 desktop:[&>p]:text-xs tablet-lg:[&>p]:text-sm mobile:[&>p]:text-xs">
              <p className="group-hover:text-white group-hover:bg-zinc-600/30">
                اکشن
              </p>
              <p className="group-hover:text-white group-hover:bg-zinc-600/30">
                سوم شخص
              </p>
            </div>
            <h2 className="font-bold text-lg my-4 desktop:text-base tablet-lg:text-lg mobile:text-base">
              موسیقی بازی The Last of Us رکورد دار بیشترین دانلود.
            </h2>
            <p className="text-xs text-zinc-400">
              <span className="text-font ml-2 group-hover:text-primary">⬤</span>
              ۲۰۰ نفر این مقاله را خوانده اند.
            </p>
            <button className="w-36 h-9 mt-4 bg-zinc-700/70 text-white rounded-lg  text-base hover:bg-zinc-700 group-hover:bg-primary mobile:w-full mobile:h-9 mobile:text-sm">
              مشاهده مقاله
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Article;
