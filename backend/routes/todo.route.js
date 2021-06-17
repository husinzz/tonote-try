const router = require("express").Router();
const Todo = require("../models/todo.model");

router.route("/api/todo/show").get((req, res) => {
  Todo.find()
    .then((note) => {
      res.json(note);
    })
    .catch((err) => {
      console.log("Error fetching data");
    });
});

router.route("/api/todo/add").post((req, res) => {
  const title = req.body.title;
  const state = req.body.text;

  new Todo({
    title,
    state,
  })
    .save()
    .then(() => {
      res.send("Items added succesfully");
    })
    .catch((err) => {
      res.send("Error occurd while adding");
    });
});

router.route("/api/todo/edit/:id").post((req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => {
      todo.title = req.body.title;
      todo.state = req.body.state;

      todo
        .save()
        .then(() => {
          res.send("Edits succesfully saved");
        })
        .catch((err) => {
          res.send("Error occured while saving edits ");
        });
    })
    .catch((err) => {
      res.send("Error occured while fetching data");
    });
});

router.route("/api/todo/delete/:id").delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send("Todo deleted succesfully!");
    })
    .catch((err) => {
      res.send("Error occured while deleting");
    });
});

module.exports = router;
