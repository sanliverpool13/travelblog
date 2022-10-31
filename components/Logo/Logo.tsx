import { useRouter } from "next/router";
import React from "react";
import { LogoContainer } from "./style";

interface Props {
  mobile?: boolean;
  isNavbar: boolean;
}

const Logo: React.FC<Props> = ({ mobile, isNavbar }) => {
  const router = useRouter();

  return (
    <LogoContainer
      mobile={mobile}
      isNavbar={isNavbar}
      onClick={() => router.push("/")}
    >
      Beyond Us Two
    </LogoContainer>
  );
};

export default Logo;
