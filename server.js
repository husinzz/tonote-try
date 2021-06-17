const express = require("express");
const db = require("mongoose");

const app = express();
const port = 8080;
const db_uri = "mongodb://localhost:27017/tonote";

db.connect(db_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connection established!");
  })
  .catch((err) => {
    console.log("Error occured : ", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./backend/routes/note.route"));
app.use(require("./backend/routes/todo.route"));

app.listen(port, () => {
  console.log("Server is running ", port);
});
