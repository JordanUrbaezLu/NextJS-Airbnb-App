"use client";

import { Range } from "react-date-range";

import AirButton from "../../libs/air-design/src/components/AirButton/AirButton";
import DatePicker from "../inputs/DatePicker";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div
      className="
      overflow-hidden 
        rounded-xl 
        border-[1px]
      border-neutral-200 
        bg-white
      "
    >
      <div
        className="
      flex flex-row items-center gap-1 p-4"
      >
        <div className="text-2xl font-semibold">$ {price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <DatePicker
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <AirButton disabled={disabled} onClick={onSubmit}>
          Reserve
        </AirButton>
      </div>
      <hr />
      <div
        className="
          flex 
          flex-row 
          items-center 
          justify-between 
          p-4
          text-lg
          font-semibold
        "
      >
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
