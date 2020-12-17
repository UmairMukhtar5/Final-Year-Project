const express = require("express");
const app = express.Router();
const mongoose = require('mongoose');
const spawn = require("child_process").spawn;
const Server = require('mongodb').Server,

  MongoClient = require('mongodb').MongoClient,

  url = 'mongodb+srv://umair:12345@cluster0.hgkkb.mongodb.net/<dbname>?retryWrites=true&w=majority'


// const sdfksd=MongoClient(url);


app.post("/instra/button", async (req, res) => {
  const youtubeUrl = req.body.youtube;

  console.log("hello, I am Processing, wait");


  const spawn = require("child_process").spawn;
  // let youtubeUrl= 'https://www.youtube.com/watch?v=gjPCYfXJIQU';

  const process1 = spawn("python", ["./YouTubeVideoProcess.py", youtubeUrl], { stdio: "inherit" });

  process1.on("data", (data) => {
    console.log(data.toString());
    res.status(200).json({ msg: data.toString() });
  });

  process1.on('close', function (code) {
    if (code === 1) {
      process.stderr.write("error occured", code);
      process.exit(1);
    }
    else {
      process.stdout.write('"python script exited with code: ' + code + '\n');
    }
  });

  MongoClient.connect(url, function (err, db) {

    var dbo = db.db("mydb");

    dbo.collection("insta").findOne({ URL: youtubeUrl }, async function (err, result) {
      if (result) {

        const answer = result.process_comments;

        await db.close();


        return res.send({ result: answer })


      } else {
        return res.send({ result: false })

      }

    });
  });

})


// for instra

app.post("/instra", async (req, res) => {

  const youtubeUrl = req.body.youtube;

  console.log("hello");

  console.log('here it is commint ', req.body.youtube);

  // const youtubeUrl = req.body.youtube;


  const spawn = require("child_process").spawn;
  // let youtubeUrl= 'https://www.youtube.com/watch?v=gjPCYfXJIQU';

  const process1 = spawn("python", ["./Scrape YouTube.py", youtubeUrl], { stdio: "inherit" });

  process1.on("data", (data) => {
    console.log(data.toString());
    res.status(200).json({ msg: data.toString() });
  });

  process1.on('close', function (code) {
    if (code === 1) {
      process.stderr.write("error occured", code);
      process.exit(1);
    }
    else {
      process.stdout.write('"python script exited with code: ' + code + '\n');
    }
  });

});
module.exports = app;

