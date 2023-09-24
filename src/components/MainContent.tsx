import React from "react";
import { Button, MainContentContainer } from "./common";
import { useDeleteAllSSentences } from "@hooks/useDeleteAllSentences";
import WordCloud from "./WordCloud";
import type { WordCloudType } from "src/types/wordCloudType";
import { Word } from "d3-cloud";

type MainContentPropsType = {
  wordCloud: WordCloudType[];
};

const words: Word[] = [
  { text: "haris", size: 100 },
  { text: "wahab", size: 70 },
];
for (let i = 0; i < 100; i++) {
  words.push({ text: `wahab${i}`, size: 70 });
}

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
    <>
      <WordCloud />
      {/* <MainContentContainer>
        <div className="flex flex-col gap-4">
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
      </MainContentContainer> */}
    </>
  );
};

export default MainContent;
