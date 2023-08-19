import { gql } from "@apollo/client";

const WORD_CLOUD = gql`
  query getWordCloud {
    wordCloud {
      word
      frequency
    }
  }
`;

export { WORD_CLOUD };
