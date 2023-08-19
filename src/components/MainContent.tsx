import React from "react";
import { Button, MainContentContainer } from "./common";
import { useDeleteAllSSentences } from "@hooks/useDeleteAllSentences";
import WordCloudContainer from "./WordCloudContainer";
import type { WordCloudType } from "src/types/wordCloudType";

type MainContentPropsType = {
  wordCloud: WordCloudType[];
};

const MainContent = ({ wordCloud }: MainContentPropsType) => {
  const { deleteAllSentences } = useDeleteAllSSentences();
  const [wordCloudData, setWordCloudData] = React.useState<WordCloudType[]>([]);

  const handleGenerate = () => {
    setWordCloudData(wordCloud);
  };

  const handleDeleteAll = () => {
    setWordCloudData([]);
    deleteAllSentences();
  };

  return (
    <MainContentContainer>
      <div className="flex flex-col gap-4">
        <WordCloudContainer wordCloudData={wordCloudData} />
        <div className="flex gap-4 ">
          <Button disabled={!wordCloudData.length} onClick={handleDeleteAll}>
            Clear
          </Button>
          <Button
            disabled={Boolean(!wordCloud.length)}
            onClick={handleGenerate}
          >
            Generate Word Cloud
          </Button>
        </div>
      </div>
    </MainContentContainer>
  );
};

export default MainContent;
