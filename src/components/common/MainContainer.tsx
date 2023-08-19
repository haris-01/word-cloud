import React from "react";

type MainContainerPropsType = { children: React.ReactNode };

const MainContainer = ({ children }: MainContainerPropsType) => {
  return <div className="flex ">{children}</div>;
};

export default MainContainer;
