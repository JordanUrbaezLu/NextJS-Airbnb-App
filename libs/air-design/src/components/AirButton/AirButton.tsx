"use client";

import React from "react";
import { IconType } from "react-icons";
import classNames from "classnames";

export interface AirButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * The content for the AirButton
   */
  children: string;
  /**
   * If the AirButton is disabled
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * The callback fired when the AirButton is clicked
   */
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * If the AirButton has an outline
   */
  outline?: boolean;
  /**
   * If the AirButton is small
   */
  small?: boolean;
  /**
   * The icon for the AirButton
   */
  icon?: IconType;
}

const AirButton = React.forwardRef<HTMLButtonElement, AirButtonProps>(
  (props, ref) => {
    const {
      children,
      className,
      disabled,
      icon: Icon,
      onClick,
      outline,
      small,
    } = props;
    return (
      <button
        className={classNames(
          className,
          ` relative
              w-full
              rounded-lg
              transition
              hover:opacity-80
              disabled:cursor-not-allowed
              disabled:opacity-70
              ${outline ? "bg-white" : "bg-rose-500"}
              ${outline ? "border-black" : "border-rose-500"}
              ${outline ? "text-black" : "text-white"}
              ${small ? "text-sm" : "text-md"}
              ${small ? "py-2" : "py-3"}
              ${small ? "font-light" : "font-semibold"}
              ${small ? "border-[1px]" : "border-2"}`
        )}
        disabled={disabled}
        onClick={onClick}
        ref={ref}
      >
        {Icon && (
          <Icon
            aria-label="icon"
            className={`
              absolute
              left-4
              ${small ? "top-0" : "top-3"}
            `}
            size={24}
            role="img"
          />
        )}
        {children}
      </button>
    );
  }
);

AirButton.displayName = "AirButton";
export default AirButton;
