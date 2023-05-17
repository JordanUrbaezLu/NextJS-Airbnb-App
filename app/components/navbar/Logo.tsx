"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {
  isLink?: boolean;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ isLink = true, size }) => {
  const router = useRouter();

  return (
    <Image
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
