import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "../../app/types";

import useLoginModal from "./useLoginModal";

interface IUseDislike {
  listingId: string;
  currentUser?: SafeUser | null;
  listingTitle: string;
}

const useDislike = ({ listingId, currentUser, listingTitle }: IUseDislike) => {
  const router = useRouter();

  const loginModal = useLoginModal();

  const hasDisliked = useMemo(() => {
    const list = currentUser?.dislikeIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleDislike = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      const fetchData = async (hasDisliked: boolean) => {
        let response;
        if (hasDisliked) {
          response = await axios.delete(`/api/dislikes/${listingId}`);
        } else {
          response = await axios.post(`/api/dislikes/${listingId}`);
        }
        return response;
      };

      const callback = fetchData(hasDisliked)
        .catch((error) => {
          return error.message;
        })
        .then(() => {
          router.refresh();
        });

      const successComment = hasDisliked
        ? `Success! You removed your dislike on ${listingTitle}!`
        : `Success! You disliked the ${listingTitle} listing!`;
      toast.promise(callback, {
        loading: "Saving...",
        success: <b>{successComment}</b>,
        error: <b>Could not favorite.</b>,
      });
    },
    [currentUser, hasDisliked, listingId, loginModal, router, listingTitle]
  );

  return {
    hasDisliked,
    toggleDislike,
  };
};

export default useDislike;
