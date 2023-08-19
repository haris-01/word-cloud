import React from "react";
import WordCloudTable from "./WordCloudTable";
import { SideBarContainer, TextInput, Button } from "./common";
import { useAddSentence } from "@hooks/useAddSentence";
import type { WordCloudType } from "src/types/wordCloudType";

type SideBarPropsType = {
  wordCloud: WordCloudType[];
};

const SideBar = ({ wordCloud }: SideBarPropsType) => {
  const { addSentence } = useAddSentence();
  const [value, setValue] = React.useState("");

  const handleClick = () => {
    addSentence(value);
    setValue("");
  };

  return (
    <SideBarContainer>
      <TextInput
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button disabled={!value} onClick={handleClick} classes="mx-0">
        Add To Sentences
      </Button>
      <WordCloudTable wordCloud={wordCloud} />
    </SideBarContainer>
  );
};

export default SideBar;
