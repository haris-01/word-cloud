import React from "react";
import SideBar from "../SideBar";
import MainContent from "../MainContent";
import { MainContainer } from "../common";
import { useGetWordCloud } from "src/hooks/useGetWordCloud";

const HomePage = () => {
  const { wordCloud } = useGetWordCloud();

  return (
    <MainContainer>
      <SideBar wordCloud={wordCloud} />
      <MainContent wordCloud={wordCloud} />
    </MainContainer>
  );
};

export default HomePage;
