import React from "react";

type Props = { children: React.ReactNode };

const MainContentContainer = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
      {children}
    </div>
  );
};

export default MainContentContainer;
