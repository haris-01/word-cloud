import { SentenceType } from "src/types/sentenceType";

const Sentence = require("../models/Sentence");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");

const SentenceType = new GraphQLObjectType({
  name: "Sentence",
  fields: () => ({
    id: { type: GraphQLID },
    sentence: { type: GraphQLString },
  }),
});
const WordCloudType = new GraphQLObjectType({
  name: "WordCloud",
  fields: () => ({
    word: { type: GraphQLString },
    frequency: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    sentences: {
      type: new GraphQLList(SentenceType),
      resolve() {
        return Sentence.find();
      },
    },
    wordCloud: {
      type: new GraphQLList(WordCloudType),
      async resolve() {
        const res: SentenceType[] = await Sentence.find({});
        const sentences = res.map((sentence) => sentence.sentence);
        const words = sentences.join(" ").split(/\s+/);
        const wordFrequencies = words.reduce(
          (freqMap: Record<string, number>, word) => {
            freqMap[word] = (freqMap[word] || 0) + 1;
            return freqMap;
          },
          {}
        );

        const wordCloudData = Object.keys(wordFrequencies).map((word) => ({
          word: word,
          frequency: wordFrequencies[word],
        }));

        return wordCloudData;
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addSentence: {
      type: SentenceType,
      args: {
        sentence: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(_: any, args: any) {
        const newSentence = new Sentence({
          sentence: args.sentence,
        });
        return newSentence.save();
      },
    },
    deleteSentence: {
      type: SentenceType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(_: any, args: any) {
        const id = args.id;
        return Sentence.findByIdAndRemove(id);
      },
    },
    deleteAllSentences: {
      type: SentenceType,

      resolve() {
        return Sentence.deleteMany({});
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
