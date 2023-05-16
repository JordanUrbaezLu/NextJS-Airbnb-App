"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import useFavorite from "@/app/hooks/useFavorite";
import { SafeUser } from "@/app/types";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
  listingTitle: string;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
  listingTitle,
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
    listingTitle,
  });

  return (
    <div
      onClick={toggleFavorite}
      className="
        relative
        cursor-pointer
        transition
        hover:opacity-80
      "
    >
      <AiOutlineHeart
        size={28}
        className="
          absolute
          -right-[2px]
          -top-[2px]
          fill-white
        "
      />
      <AiFillHeart
        size={24}
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default HeartButton;
