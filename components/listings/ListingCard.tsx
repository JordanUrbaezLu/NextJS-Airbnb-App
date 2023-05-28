"use client";

import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

import { useCountries } from "../../hooks";
import { SafeListing, SafeReservation, SafeUser } from "../../types";

import AirButton from "../../libs/air-design/src/components/AirButton/AirButton";
import DislikeButton from "../DislikeButton";
import HeartButton from "../HeartButton";

interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="group col-span-1 cursor-pointer"
    >
      <div className="flex w-full flex-col gap-2">
        <div
          className="
            relative 
            aspect-square 
            w-full 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              h-full 
              w-full 
              object-cover 
              transition 
              group-hover:scale-110
            "
            src={data.imageSrc}
            alt="Listing"
            sizes="(max-width: 768px) 100vw"
          />
          <div
            className="
            absolute
            right-3
            top-3
            flex
            flex-row
            gap-2
          "
          >
            <DislikeButton
              listingId={data.id}
              currentUser={currentUser}
              listingTitle={data.title}
            />
            <HeartButton
              listingId={data.id}
              currentUser={currentUser}
              listingTitle={data.title}
            />
          </div>
        </div>
        <div className="text-lg font-semibold text-neutral-500 dark:text-neutral-300">
          {location?.region}, {location?.label}
        </div>
        <div className="font-light text-neutral-500 dark:text-neutral-300">
          {reservationDate || data.category}
        </div>
        <div className="flex flex-row items-center gap-1 text-neutral-500 dark:text-neutral-300">
          <div className="font-semibold">$ {price}</div>
          {!reservation && <div className="font-light">night</div>}
        </div>
        {onAction && actionLabel && (
          <AirButton disabled={disabled} small onClick={handleCancel}>
            {actionLabel}
          </AirButton>
        )}
      </div>
    </div>
  );
};

export default ListingCard;
