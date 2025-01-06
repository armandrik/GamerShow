import React from "react";

type badgePropType = {
  showNotif: number;
  bg : string
};

function Badge({ showNotif , bg}: badgePropType) {
  return <div className={`absolute -top-2 -right-1 w-4 h-4 ${bg} text-white rounded-full  flex items-center justify-center text-xs font-medium mobile:hidden`}>{showNotif}</div>;
}

export default Badge;
