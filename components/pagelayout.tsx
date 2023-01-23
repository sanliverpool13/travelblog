import React from "react";
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  /* top | horizontal | bottom */
  padding: 0 0 4rem;
  min-height: calc(100vh - var(--height-navbar) - var(--height-footer));
  position: relative;
`;

export const SectionCenter = styled.section`
  width: 100%;
`;

interface Props {
  children: React.ReactNode;
}

const Pagelayout: React.FC<Props> = ({ children }) => {
  return (
    <Section>
      <SectionCenter>{children}</SectionCenter>
    </Section>
  );
};

export default Pagelayout;
