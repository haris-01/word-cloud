const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SentenceSchema = new Schema({
  sentence: { type: String },
});
module.exports =
  mongoose.models.Sentence || mongoose.model("Sentence", SentenceSchema);
