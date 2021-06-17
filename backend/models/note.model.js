const db = require("mongoose");

const Note = db.model(
  "Note",
  new db.Schema({
    title: String,
    date: {
      default: Date.now,
      type: Date,
    },
    text: String,
  })
);

module.exports = Note;
