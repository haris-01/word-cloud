export type WordCloudType = {
  word: string;
  frequency: number;
};

export type SentenceTypeData = {
  __typename: "Sentence";
  wordCloud: WordCloudType[];
};
