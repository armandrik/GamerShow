import React from "react";

type aboyGamePropType ={
  about : string
}

function AboutGame({about} : aboyGamePropType) {
  return (
    <div className="text-white">
      <h1 className="text-2xl font-medium mb-5">خلاصه بازی</h1>
      <p className="text-base leading-8">{about}</p>
    </div>
  );
}

export default AboutGame;
