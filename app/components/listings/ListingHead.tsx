"use client";

import Image from "next/image";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Heading from "../Heading";
import HeartButton from "../HeartButton";
import DislikeButton from "../DislikeButton";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div
        className="
          relative
          h-[60vh]
          w-full 
          overflow-hidden
          rounded-xl
        "
      >
        <Image
          src={imageSrc}
          fill
          className="w-full object-cover"
          alt="Image"
        />
        <div
          className="
            absolute
            right-5
            top-5
           flex
            flex-row
            gap-3
          "
        >
          <HeartButton
            listingId={id}
            currentUser={currentUser}
            listingTitle={title}
          />
          <DislikeButton
            listingId={id}
            currentUser={currentUser}
            listingTitle={title}
          />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
