import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "@/app/types";

import useLoginModal from "./useLoginModal";

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
  listingTitle: string;
}

const useFavorite = ({
  listingId,
  currentUser,
  listingTitle,
}: IUseFavorite) => {
  const router = useRouter();

  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      const fetchData = async (hasFavorited: boolean) => {
        let response;
        if (hasFavorited) {
          response = await axios.delete(`/api/favorites/${listingId}`);
        } else {
          response = await axios.post(`/api/favorites/${listingId}`);
        }
        console.log(response);
        return response;
      };

      const callback = fetchData(hasFavorited)
        .catch((error) => {
          return error.message;
        })
        .then(() => {
          router.refresh();
        });

      const successComment = hasFavorited
        ? `Success! You removed your favorite on ${listingTitle}!`
        : `Success! You favorited the ${listingTitle} listing!`;

      toast.promise(callback, {
        loading: "Saving...",
        success: <b>{successComment}</b>,
        error: <b>Could not favorite.</b>,
      });
    },
    [currentUser, hasFavorited, listingId, loginModal, router, listingTitle]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
