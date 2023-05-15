import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "@/app/types";

import useLoginModal from "./useLoginModal";

interface IUseDislike {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useDislike = ({ listingId, currentUser }: IUseDislike) => {
  const router = useRouter();

  const loginModal = useLoginModal();

  const hasDisliked = useMemo(() => {
    const list = currentUser?.dislikeIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleDislike = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (hasDisliked) {
          request = () => axios.delete(`/api/dislikes/${listingId}`);
        } else {
          request = () => axios.post(`/api/dislikes/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success("Success");
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasDisliked, listingId, loginModal, router]
  );

  return {
    hasDisliked,
    toggleDislike,
  };
};

export default useDislike;
