import React from "react";
// import styled from "styled-components";

// export const Section = styled.section`
//   width: 100%;
//   /* top | horizontal | bottom */
//   padding: 0 0 4rem;
//   min-height: calc(100vh - var(--height-navbar) - var(--height-footer));
//   position: relative;
// `;

// export const SectionCenter = styled.section`
//   width: 100%;
//   padding-top: 4rem;
// `;

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FC<{
  children: React.ReactNode;
  noPaddingTop?: boolean;
}> = ({ children, noPaddingTop = false }) => {
  return (
    <main
      className={`w-full ${
        noPaddingTop ? "" : "pt-[192px]"
      } pb-[400px] min-h-screen flex flex-col relative text-bg-clr-footer`}
    >
      {children}
    </main>
  );
};

export default PageLayout;
