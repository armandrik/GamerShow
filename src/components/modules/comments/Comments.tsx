import React from "react";
import CardComments from "./CardComments";
import { ObjectId } from "mongoose";

export type CommentType = {
  _id: ObjectId; // ID of the comment
  name: string; // Name of the commenter
  body: string; // Comment content
  productID: ObjectId; // ID of the associated product
  createdAt: Date; // Timestamp of creation
  updatedAt: Date; // Timestamp of last update
  __v: number; // Version key
};

type commentsPropType = {
  comments: CommentType[];
};

function Comments({ comments }: commentsPropType) {

  return (
    <div className="w-[1150px] mx-auto text-white px-12 desktop:w-[1000px] tablet-lg:w-full mobile:px-4">
      <h2 className="text-2xl font-medium mb-5">نظرات(2)</h2>
      <form className="mb-5">
        <div className="flex w-full items-center p-2 rounded-lg bg-black/20 backdrop-blur-sm">
          <textarea
            id="chat"
            rows={2}
            className="block p-2.5 ml-2 w-full text-sm text-white bg-transparent outline-none rounded-lg border-2 border-zinc-700/40 focus:border-primary"
            placeholder="پیام شما..."
          ></textarea>
          <button
            type="submit"
            className="inline-flex justify-center p-3 rounded-full cursor-pointer hover:bg-primary/20 transition-all"
          >
            <svg
              className="size-5 -rotate-90 text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
          </button>
        </div>
      </form>
      {comments.map((item) => (
        <CardComments key={item._id.toString()} data={item}/>
      ))}
    </div>
  );
}

export default Comments;
