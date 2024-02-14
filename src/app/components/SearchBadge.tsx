"use client";
import React, { Dispatch, SetStateAction } from "react";

const SearchBadge = ({
  badges,
  setBadge,
  currentBadge,
}: {
  badges: string[];
  setBadge: Dispatch<SetStateAction<string>>;
  currentBadge: string;
}) => {
  return (
    <div className="flex items-center pl-20 text-sm">
      {badges.map((badge) => (
        <div
          key={badge}
          onClick={() => setBadge(badge)}
          className={`mr-2 mb-3 px-3 py-1 rounded-xl text-black bg-hoverGray hover:bg-black/50 cursor-pointer transition-colors duration-150 ${
            badge === currentBadge ? "bg-blc text-white" : "bg-hoverGray"
          }`}
        >
          {badge}
        </div>
      ))}
    </div>
  );
};

export default SearchBadge;
