"use client";

import { AiFillDislike, AiOutlineDislike } from "react-icons/ai";

import useDislike from "@/app/hooks/useDislike";
import { SafeUser } from "@/app/types";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
  listingTitle: string;
}

const DislikeButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
  listingTitle,
}) => {
  const { hasDisliked, toggleDislike } = useDislike({
    listingId,
    currentUser,
    listingTitle,
  });

  return (
    <div
      onClick={toggleDislike}
      className="
        relative
        cursor-pointer
        transition
        hover:opacity-80
      "
    >
      <AiOutlineDislike
        size={28}
        className="
          absolute
          -right-[2px]
          -top-[2px]
          fill-white
        "
      />
      <AiFillDislike
        size={24}
        className={hasDisliked ? "fill-blue-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default DislikeButton;
