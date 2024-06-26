"use client";
import React from "react";
import { useRouter } from "next/navigation";
// import { LogoContainer } from "./style";

interface Props {
  mobile?: boolean;
}

const Logo: React.FC<Props> = ({ mobile }) => {
  const router = useRouter();

  return (
    <div
      className={`text-center font-bold font-logo flex items-center cursor-pointer ${
        mobile ? "text-2xl" : "text-4xl md:text-3xl lg:text-4xl"
      }`}
      onClick={() => router.push("/")}
    >
      Jelet Adventures
    </div>
  );
};

export default Logo;
