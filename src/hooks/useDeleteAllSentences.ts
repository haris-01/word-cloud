import { useMutation } from "@apollo/client";
import { DELETE_ALL_SENTENCES } from "@mutations/sentenceMutations";
import { GET_SENTENCES } from "@queries/sentenceQueries";
import { WORD_CLOUD } from "@queries/wordCloudQueries";

export const useDeleteAllSSentences = () => {
  const [deleteAllSentences] = useMutation(DELETE_ALL_SENTENCES, {
    update(cache) {
      cache.writeQuery({
        query: GET_SENTENCES,
        data: { sentences: [] },
      });
      cache.writeQuery({
        query: WORD_CLOUD,
        data: { wordCloud: [] },
      });
    },
  });

  return {
    deleteAllSentences,
  };
};
