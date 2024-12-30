import Link from "next/link";
import React from "react";

function Articles(): JSX.Element {
  const articleImages = [
    {
      id: 1,
      title: "این هفته چه بازی های معرفی می شوند.",
      src: "https://media.rawg.io/media/crop/600/400/games/490/49016e06ae2103881ff6373248843069.jpg",
    },
    {
      id: 2,
      title: "جدیدترین تریلر بازی های جدید",
      src: "https://media.rawg.io/media/crop/600/400/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg",
    },
    {
      id: 3,
      title: "این هفته چه بازی های معرفی می شوند.",
      src: "https://media.rawg.io/media/crop/600/400/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
    },
  ];

  return (
    <div className="">
      {articleImages.map((item) => (
        <div key={item.id} className="flex items-start justify-start gap-2 w-80 mb-5">
          <img src={item.src} alt="articles image" className="w-24 h-16 rounded-xl"/>
          <p className="text-base font-normal cursor-pointer">
            <Link href='/blog/id'>{item.title}</Link>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Articles;
