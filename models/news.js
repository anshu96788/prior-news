const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }, date: {
    type: Date,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

const News = mongoose.model("news", NewsSchema);

module.exports = News;