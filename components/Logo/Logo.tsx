import React from "react";
import { LogoContainer } from "./style";

interface Props {
  mobile?: boolean;
}

const Logo: React.FC<Props> = ({ mobile }) => {
  return <LogoContainer mobile={mobile}>The Jelet Setters</LogoContainer>;
};

export default Logo;
