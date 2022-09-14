import Image from "next/image";
import React from "react";
import { LandingContainer } from "./style";

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <div>
        <h1>We are Madison and Sanjar</h1>
        <p>A couple that wants to see the world together. &#127758;</p>
        <p>Always on the hunt for good coffee and cafes. &#9749;</p>
        <p>Join us on our journey! </p>
      </div>
      <Image src="/images/us.jpg" alt="us" width="200" height="355.56" />
    </LandingContainer>
  );
};

export default Landing;
