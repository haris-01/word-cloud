import { useQuery } from "@apollo/client";
import { WORD_CLOUD } from "@queries/wordCloudQueries";
import { SentenceTypeData } from "src/types/wordCloudType";

export const useGetWordCloud = () => {
  const { data, ...rest } = useQuery<SentenceTypeData>(WORD_CLOUD, {
    onError: (error) =>
      console.error(`Failed to Fetch WordCloud: ${error.message}`),
  });
  const wordCloud = data?.wordCloud || [];

  return {
    wordCloud,
    ...rest,
  };
};
