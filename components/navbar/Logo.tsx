"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useToasterStore, toast } from "react-hot-toast";

interface LogoProps {
  isLink?: boolean;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ isLink = true, size }) => {
  const router = useRouter();

  // Add one useEffect for amount of max toasts
  const { toasts } = useToasterStore();

  const TOAST_LIMIT = 2;

  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit?
      .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) for no exit animation
  }, [toasts]);
  // Add one useEffect for amount of max toasts

  return (
    <Image
      priority
      style={{ width: "auto", height: "auto" }}
      onClick={isLink ? () => router.push("/") : undefined}
      className={`hidden ${isLink && "cursor-pointer"} md:block`}
      src="/images/logo.png"
      height={size ? `${size}` : "100"}
      width={size ? `${size}` : "100"}
      alt="Logo"
    />
  );
};

export default Logo;
