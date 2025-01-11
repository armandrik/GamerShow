import React from "react";
import { CommentType } from "./Comments";

type cardCommentPropType = {
  data: CommentType;
};

function CardComments({ data }: cardCommentPropType) {
  const date = new Date(data.createdAt);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="grid grid-cols-1">
      <div className="p-5 rounded-lg bg-black/20 backdrop-blur-sm my-5 tablet:my-0">
        <div className="flex items-center gap-2">
          <svg
            className="size-9 mobile:size-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div className="font-medium">
            <p>{data.name}</p>
            <p className="text-sm text-gray-500 mt-2">{formattedDate}</p>
          </div>
        </div>
        <p className="font-light mt-5 mobile:text-sm mobile:mt-1">
          {data.body}
        </p>
        <div className="flex items-center justify-between gap-2 mt-5">
          <input
            type="text"
            className="w-full outline-none p-2.5 text-sm text-white bg-transparent rounded-lg border-2 border-zinc-700/40 focus:border-primary"
            placeholder="جواب بدید..."
            required={true}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer hover:text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CardComments;
