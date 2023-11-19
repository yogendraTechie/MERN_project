const express = require("express");
const dotenv = require("dotenv");

const notes = require("./data/notes");

const app = express();
dotenv.config(); // to enable .env

app.get("/", (req, res) => {
  res.send("get response");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n.id == req.params.id);
  res.send(note);
});

const PORT = process.env.PORT; // use env variables like- process.env.<variable_name>
app.listen(PORT, console.log(PORT));
