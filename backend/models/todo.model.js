const db = require("mongoose");

const Todo = db.model(
  "Todo",
  new db.Schema({
    title: String,
    state: {
      type: Boolean,
      default: false,
    },
  })
);

module.exports = Todo;
