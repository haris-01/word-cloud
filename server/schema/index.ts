const Sentence = require("../models/Sentence");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");

const SentenceType = new GraphQLObjectType({
  name: "Sentence",
  fields: () => ({
    id: { type: GraphQLID },
    sentence: { type: GraphQLString },
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
        console.log("ARGS============>", args);
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
