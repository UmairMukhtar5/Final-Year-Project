const express = require("express");
const app = express.Router();
const mongoose = require('mongoose');
const spawn = require("child_process").spawn;
const Server = require('mongodb').Server,

MongoClient = require('mongodb').MongoClient,

url='mongodb+srv://umair:12345@cluster0.hgkkb.mongodb.net/<dbname>?retryWrites=true&w=majority'





// const sdfksd=MongoClient(url);


app.post("/",  async(req, res)=> {

  //const youtubeUrl = 'https://www.youtube.com/watch?v=bmVKaAV_7-A';
  //console.log("Bye hello");
  

  console.log(req.body.youtube);
    
  console.log("hello, I am scraping, wait");

  const youtubeUrl = req.body.youtube;
  
  console.log(youtubeUrl);

  const spawn = require("child_process").spawn;
  // let youtubeUrl= 'https://www.youtube.com/watch?v=gjPCYfXJIQU';

  const process1 = spawn("py", ["./youtube.py", youtubeUrl]);

  process1.on("data", (data) => {
    console.log(data.toString());
    res.status(200).json({ msg: data.toString() });
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
  // process1.stdout.on("data", (data) => {
  //   console.log(data.toString());
  //   res.status(200).json({ msg: data.toString() });
  // });

  // res.status(200).json({ msg: "a message" });

 
  // const youtubeUrl = req.body.youtube;
  

  
  console.log("hello, I am Processing, wait");

    // let sdfhks='https://www.youtube.com/watch?v=bmVKaAV_7-A'
    // let youtubeUrl= 'https://www.youtube.com/watch?v=gjPCYfXJIQU';
  
    const process2 = spawn("py", ["./YouTubeProcessing.py", youtubeUrl]);
  
    process2.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
    // process2.stdout.on("data", (data) => {
    //   console.log(data.toString());
    //   res.status(200).json({ msg: data.toString() });
    // });
  
    // res.status(200).json({ msg: "a message" });


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



  





  });




// for instra

app.post("/instra",  async(req, res)=> {

  const youtubeUrl = 'https://www.instagram.com/p/CIED0vFh6Zt/';

    console.log("hello");
  
    console.log('here it is commint ',req.body.youtube);
    
 
    // const youtubeUrl = req.body.youtube;
   
   

    MongoClient.connect(url, function(err, db) {

      var dbo = db.db("mydb");

      dbo.collection("insta").findOne({URL:youtubeUrl}, async function(err, result) {
        if(result){

          const answer=result.process_comments;

          await db.close();


          return res.send({result:answer})


        }else{
          return res.send({result:false})

        }
        
      });
    });



  
  //   let sdfhks='https://www.youtube.com/watch?v=bmVKaAV_7-A'
  // //   // let youtubeUrl= 'https://www.youtube.com/watch?v=gjPCYfXJIQU';
  
  //   const process1 = spawn("py", ["./YouTubeProcessing.py", 'https://www.youtube.com/watch?v=5qap5aO4i9A']);
  
  //   process1.stdout.on("data", (data) => {
  //     console.log(data.toString());
  //     res.status(200).json({ msg: data.toString() });
  //   });
  
  //   res.status(200).json({ msg: "a message" });




  });
  


module.exports = app;

