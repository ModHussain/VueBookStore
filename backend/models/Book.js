const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let bookSchema = new Schema(
  {
    bookName: {
      type: String,
    },
    price: {
      type: Number,
    },
    bookImg: {
      type: String,
    },
  },
  {
    collection: "books",
  }
);
module.exports = mongoose.model("Books", bookSchema);
