const express = require("express");
const app = express.Router();
const mongoose = require('mongoose');
const spawn = require("child_process").spawn;
const Server = require('mongodb').Server,

MongoClient = require('mongodb').MongoClient,

url='mongodb+srv://umair:12345@cluster0.hgkkb.mongodb.net/<dbname>?retryWrites=true&w=majority'

// const sdfksd=MongoClient(url);

app.post("/button",  async(req, res)=> {
  const youtubeUrl = req.body.youtube;

  console.log("hello, I am Processing ON This, wait:", youtubeUrl);

  console.log(youtubeUrl)

  const spawn = require("child_process").spawn;
  // let youtubeUrl= 'https://www.youtube.com/watch?v=gjPCYfXJIQU';

  const process1 = spawn("py", ["./YouTubeProcessing.py", youtubeUrl], {stdio: "inherit"});

  process1.on("data", (data) => {
    console.log(data.toString());
    res.status(200).json({ msg: data.toString()});
  });

  process1.on('close', function(code) {
    if ( code === 1 ){
        process.stderr.write("error occured",code);
        process.exit(1);
    }
    else{
        process.stdout.write('"python script exited with code: ' + code + '\n');
    }
});



setTimeout(() => {
    MongoClient.connect(url, function(err, db) {

        var dbo = db.db("mydb");
  
        dbo.collection("customer").findOne({URL:youtubeUrl}, async function(err, result) {
          if(result){
  
            const answer=result.process_comments;
            await db.close();
            return res.send({result:answer})
  
          }else{
            return res.send({result:false})
          }
        });
      });
}, 30000);

})


// for instra

// app.post("/instra",  async(req, res)=> {

//   const youtubeUrl = 'https://www.instagram.com/p/CIED0vFh6Zt/';

//     console.log("hello");
  
//     console.log('here it is commint ',req.body.youtube);
     
//     // const youtubeUrl = req.body.youtube;
   
//     MongoClient.connect(url, function(err, db) {

//       var dbo = db.db("mydb");

//       dbo.collection("insta").findOne({URL:youtubeUrl}, async function(err, result) {
//         if(result){

//           const answer=result.process_comments;

//           await db.close();

//           return res.send({result:answer})

//         }else{
//           return res.send({result:false})

//         }
        
//       });
//    });

  //});


module.exports = app;

