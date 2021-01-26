const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});
module.exports = app;
