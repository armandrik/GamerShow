import React from "react";

type notifPropType = {
  msg?: String;
  status?: String;
};

function Notif({ msg, status }: notifPropType) {
  return (
    <div className="fixed -top-10 left-0 right-0 mx-auto w-80 flex items-center justify-start gap-3 z-50 p-3 rounded-md bg-secondary shadow transition-all">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <p className="text-white/80">ابتدا وارد اکانت شوید</p>
    </div>
  );
}

export default Notif;
