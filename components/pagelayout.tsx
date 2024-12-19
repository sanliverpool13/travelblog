import React from "react";

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FC<{
  children: React.ReactNode;
  noPaddingTop?: boolean;
}> = ({ children, noPaddingTop = false }) => {
  return (
    <main
      className={`flex-grow w-full ${
        noPaddingTop ? "" : "pt-[192px]"
      } pb-[400px] flex flex-col relative text-bg-clr-footer `}
    >
      {children}
    </main>
  );
};

export default PageLayout;
