"use client";

import { AiFillDislike, AiOutlineDislike } from "react-icons/ai";

import useDislike from "@/app/hooks/useDislike";
import { SafeUser } from "@/app/types";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const DislikeButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasDisliked, toggleDislike } = useDislike({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleDislike}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <AiOutlineDislike
        size={28}
        className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
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
