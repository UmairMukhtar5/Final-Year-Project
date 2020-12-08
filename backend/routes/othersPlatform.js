const express = require("express");
const app = express.Router();

app.get("/", function (req, res) {
  console.log("hello");

  const youtubeUrl = req.body.youtube;

  const spawn = require("child_process").spawn;
  // let youtubeUrl= 'https://www.youtube.com/watch?v=gjPCYfXJIQU';

  const process1 = spawn("py", ["./youtube.py", youtubeUrl]);

  process1.stdout.on("data", (data) => {
    console.log(data.toString());
    res.status(200).json({ msg: data.toString() });
  });

  res.status(200).json({ msg: "a message" });
});

app.post("/", function (req, res) {
  console.log("hello");

  const youtubeUrl = req.body.youtube;
  console.log(youtubeUrl);

  const spawn = require("child_process").spawn;
  // let youtubeUrl= 'https://www.youtube.com/watch?v=gjPCYfXJIQU';

  const process1 = spawn("py", ["./youtube.py", youtubeUrl]);

  process1.stdout.on("data", (data) => {
    console.log(data.toString());
    res.status(200).json({ msg: data.toString() });
  });

  res.status(200).json({ msg: "a message" });
});

module.exports = app;
