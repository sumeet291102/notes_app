
const express = require("express");
const cors = require("cors");
const router = require("./routes/notes_router.js");
app = express();



// middleware don't know about them completely so...
app.use(express.json());
app.use(cors());

app.use(router);

module.exports = app;









