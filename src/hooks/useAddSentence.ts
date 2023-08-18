import { useMutation } from "@apollo/client";
import { ADD_SENTENCES } from "@mutations/sentenceMutations";
import { GET_SENTENCES } from "@queries/sentenceQueries";
import { SentenceType, SentenceTypeData } from "src/types/sentenceType";

export type SentenceMutationsType = {
  addSentence: SentenceType;
};

export const useAddSentence = () => {
  const [addSentence] = useMutation<SentenceMutationsType>(ADD_SENTENCES, {
    update(cache, { data }) {
      const addedSentence = data?.addSentence;
      const { sentences } = cache.readQuery({
        query: GET_SENTENCES,
      }) as SentenceTypeData;
      console.log(
        "caches",
        cache.readQuery({
          query: GET_SENTENCES,
        })
      );
      cache.writeQuery({
        query: GET_SENTENCES,
        data: { sentences: [...sentences, addedSentence] },
      });
    },
  });

  const add = (sentence: string) => {
    addSentence({ variables: { sentence } });
  };

  return {
    addSentence: add,
  };
};
