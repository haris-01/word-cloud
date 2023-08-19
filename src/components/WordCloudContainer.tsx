"use-client";
import React from "react";
// import WordCloud from "react-wordcloud";
import dynamic from "next/dynamic";
import type { OptionsProp, Word } from "react-wordcloud";
import type { WordCloudType } from "src/types/wordCloudType";

const WordCloud = dynamic(() => import("react-wordcloud"));

const size0 = 16;

type WordCloudContainerPropsType = {
  wordCloudData: WordCloudType[];
};

const WordCloudContainer = ({ wordCloudData }: WordCloudContainerPropsType) => {
  const words: Word[] = wordCloudData.map(({ word, frequency }) => ({
    text: word,
    value: frequency,
  }));

  const options: OptionsProp = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"],
    enableTooltip: true,
    deterministic: true,
    fontFamily: "impact",
    fontSizes: [size0 * 2, size0 * 8],
    rotations: 0,
  };

  return (
    <div
      className=" bg-white rounded-lg "
      style={{ width: "800px", height: "600px" }}
    >
      {process.browser && <WordCloud words={words || []} options={options} />}
    </div>
  );
};

export default WordCloudContainer;
