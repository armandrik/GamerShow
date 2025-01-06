import React from "react";

function TagGame() {
  const tagList = [
    "Singleplayer",
    "Steam Achievements",
    "Full controller support",
    "Steam Cloud",
    " Atmospheric",
    "RPG",
    "Story Rich",
    "Third Person",
    "Fantasy",
    "Gore",
    "Exploration",
    "Violent",
    "Action-Adventure",
    "Action RPG",
    "Hack and Slash",
    "exclusive",
    "Crafting",
    "3D",
    "combat",
    "true exclusive",
    "3rd-Person Perspective",
    "Blood",
    "PvE",
    "Emotional",
    "Souls-like",
    "Mythology",
    "Remote Play on TV",
  ];

  return (
    <div className="my-10">
      <p className="font-semibold text-zinc-500">تگ‌ها</p>
      <div>
        {tagList.map((item, index) => (
          <span key={index} className="underline cursor-pointer hover:text-white/70 mx-1">{item}, </span>
        ))}
      </div>
    </div>
  );
}

export default TagGame;
