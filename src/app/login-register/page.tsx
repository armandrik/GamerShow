import React from "react";

function LoginRegister() {
  const bgList = [
    "https://media.rawg.io/media/games/734/7342a1cd82c8997ec620084ae4c2e7e4.jpg",
    "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
    "https://media.rawg.io/media/screenshots/d5d/d5d8a572ae165d6d0887101858f6e104.jpg",
    "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
    "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
    "https://media.rawg.io/media/games/526/526881e0f5f8c1550e51df3801f96ea3.jpg",
    "https://media.rawg.io/media/games/c6b/c6bd26767c1053fef2b10bb852943559.jpg",
    "https://media.rawg.io/media/games/cc1/cc196a5ad763955d6532cdba236f730c.jpg",
  ];

  // Randomly select a background image
  const randomBg = bgList[Math.floor(Math.random() * bgList.length)];

  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7)), url(${randomBg})`,
      }}
    ></div>
  );
}

export default LoginRegister;
