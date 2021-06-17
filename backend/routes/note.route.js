const router = require("express").Router();
const Note = require("../models/note.model");

router.route("/api/note/show").get((req, res) => {
  Note.find()
    .then((note) => {
      res.json(note);
    })
    .catch((err) => {
      console.log("Error fetching data");
    });
});

router.route("/api/note/add").post((req, res) => {
  const title = req.body.title;
  const text = req.body.text;

  new Note({
    title,
    text,
  })
    .save()
    .then(() => {
      res.send("Items added succesfully");
    })
    .catch((err) => {
      res.send("Error occurd while adding");
    });
});

router.route("/api/note/edit/:id").post((req, res) => {
  Note.findById(req.params.id)
    .then((note) => {
      note.title = req.body.title;
      note.text = req.body.text;

      note
        .save()
        .then(() => {
          res.send("Edits succesfully saved!");
        })
        .catch((err) => {
          res.send("Error saving changes : ");
        });
    })
    .catch((err) => {
      res.send("Error occured while fetching data");
    });
});

router.route("/api/note/delete/:id").delete((req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send("Note deleted succesfully!");
    })
    .catch((err) => {
      res.send("Error occured while deleting");
    });
});

module.exports = router;
