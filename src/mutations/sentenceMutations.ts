import { gql } from "@apollo/client";

const DELETE_ALL_SENTENCES = gql`
  mutation deleteAllSentences {
    deleteAllSentences {
      id
      sentence
    }
  }
`;

const ADD_SENTENCES = gql`
  mutation addSentence($sentence: String!) {
    addSentence(sentence: $sentence) {
      id
      sentence
    }
  }
`;

export { DELETE_ALL_SENTENCES, ADD_SENTENCES };
