import { useQuery } from "@apollo/client";
import { GET_SENTENCES } from "@queries/sentenceQueries";
import type { SentenceTypeData } from "src/types/sentenceType";

export const useGetAllSentences = () => {
  const { data, ...rest } = useQuery<SentenceTypeData>(GET_SENTENCES);
  const sentences = data?.sentences || [];

  return {
    sentences,
    ...rest,
  };
};
