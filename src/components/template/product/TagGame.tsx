import React from "react";

type tagGamePropType = {
  tag: string[];
};

function TagGame({ tag }: tagGamePropType) {

  return (
    <div className="my-10">
      <p className="font-semibold text-zinc-500">تگ‌ها</p>
      <div>
        {tag.map((item, index) => (
          <span
            key={index}
            className="underline cursor-pointer hover:text-white/70 mx-1"
          >
            {item},{" "}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagGame;
