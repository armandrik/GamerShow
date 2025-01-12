"use client";
import React, { useState } from "react";
import CardComments from "./CardComments";
import { ObjectId } from "mongoose";
import { toasMessage } from "@/utils/helper";
import { sendComment } from "@/services/commentService";

export type CommentType = {
  name: string; // Name of the commenter
  body: string; // Comment content
  productID: ObjectId; // ID of the associated product
  createdAt: Date; // Timestamp of creation
  updatedAt: Date; // Timestamp of last update
};

type commentsPropType = {
  comments: CommentType[];
  productID: string;
  name: string | undefined;
};

function Comments({ comments, productID, name }: commentsPropType) {
  const [body, setBody] = useState("");

  const handleCommentSubmission = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name) {
      toasMessage("ابتدا وارد اکانت شوید", "error")();
      setTimeout(() => {
        window.location.href = "/login-register";
      }, 600);
      return;
    }

    const comment = { name, body, productID };
    try {
      const response = await sendComment(comment); // Use the imported function here

      if (response.status === 201) {
        setBody("");
        toasMessage("نظر ثبت شد", "success")();
        setTimeout(() => {
          window.location.reload();
        }, 400);
      } else if (response.status === 400) {
        toasMessage("مقادیر وارد شده اشتباه است", "error")();
      } else {
        toasMessage("دوباره تلاش کنید", "error")();
      }
    } catch (error) {
      console.error(error);
      toasMessage("دوباره تلاش کنید", "error")();
    }
  };

  return (
    <div className="w-[1150px] mx-auto text-white px-12 desktop:w-[1000px] tablet-lg:w-full mobile:px-4">
      <h2 className="text-2xl font-medium mb-5">نظرات({comments?.length})</h2>
      <form className="mb-5" onSubmit={handleCommentSubmission}>
        <div className="flex w-full items-center p-2 rounded-lg bg-black/20 backdrop-blur-sm">
          <textarea
            id="chat"
            rows={2}
            className="block p-2.5 ml-2 w-full text-sm text-white bg-transparent outline-none rounded-lg border-2 border-zinc-700/40 focus:border-primary"
            placeholder="پیام شما..."
            required={true}
            onChange={(e) => setBody(e.target.value)}
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
      {comments.map((item, index) => (
        <CardComments key={index} data={item} />
      ))}
    </div>
  );
}

export default Comments;
