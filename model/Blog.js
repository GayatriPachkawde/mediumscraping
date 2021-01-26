const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  tag: {
    type: String,
  },
  blogs: [
    {
      author: { type: String },
      article: { type: String },
      title: { type: String },
      src: { type: String },
      datails: { type: String },
      responses: { type: String },
    },
  ],
});

module.exports = mongoose.model("Blog", blogSchema);
