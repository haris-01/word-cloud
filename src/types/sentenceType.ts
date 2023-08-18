export type SentenceType = {
  id: string | number;
  __typename: "Sentence";
  sentence: string;
};

export type SentenceTypeData = {
  __typename: "Sentence";
  sentences: SentenceType[];
};
