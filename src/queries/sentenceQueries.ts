import { gql } from "@apollo/client";

const GET_SENTENCES = gql`
  query getSentences {
    sentences {
      id
      sentence
    }
  }
`;

export { GET_SENTENCES };
