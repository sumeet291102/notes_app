const express = require("express");
const router = express.Router();
const note = require("../models/note_model.js");

router.route("/")
.get(async (req, res) => {
  try {
    const data = await note.find();
    res.status(200)
    .json({
      status: "success",
      data : {
        notes: data
      }
    });
  }
  catch(err) {
    console.log(err);
  }
})
.post(async (req, res) => {
  try {
    const new_note = new note(req.body);
    await new_note.save();
    console.log(req.body);
    
    res.status(201)
    .json({
      status: "success",
      data: {
        new_note: req.body
      }
    })
    // res.send({stat: "success"});
  }
  catch(err) {
    console.log(err.message);
  }
})
.delete(async (req, res) => {
  try {
    console.log(req.body.id);
    await note.findByIdAndDelete(req.body.id);
    res.status(204)
    .send({
      status: "success",
      data: null
    });
  }
  catch(err) {
    console.log(err);
  }
})


module.exports = router;