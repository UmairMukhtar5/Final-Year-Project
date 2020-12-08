const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Streamings = require("../models/streaming");

const streamingRouter = express.Router();

streamingRouter.use(bodyParser.json());

var authenticate = require("../authenticate");

///////////////////////////////////////////////// file uploading code starts ////////////////////////////////

var multer = require("multer");
const DIR = "./public/streamimages";

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR);
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({
  storage: storage,
});

streamingRouter
  .route("/")

  // show all the streamings

  .get((req, res, next) => {
    Streamings.find({})
      .then(
        (streamings) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(streamings);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  // add a streaming by name and password

  // .get(authenticate.verifyUser,(req,res,next)=>{
  //     console.log(authenticate.verifyUser);
  // })

  .post(
    // authenticate.verifyUser,
    upload.single("photo"),
    (req, res, next) => {
      Streamings.create({
        name: req.body.name,
        // authour: req.body.authour,
        description: req.body.description,
        photo: "http://localhost:3000/streamimages/" + req.file.filename,
        streamcode: req.body.streamcode,
        allqueries: ["hi I am ifrst", "Hi I am secong"]        // Type: req.body.Type,
      })
        .then(
          (streaming) => {
            console.log("New streaming added  ", streaming);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(streaming);
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    }
  )
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /streamings");
  })

  // delete all streamings

  .delete((req, res, next) => {
    Streamings.remove({})
      .then(
        (resp) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(resp);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

//// by id operations carried here

// show streaming by id
// add query in a stream
streamingRouter
  .route("/addquery")
  .get((req, res, next) => {
    Streamings.find({ name: req.body.name })
      .then(
        (streaming) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(streaming);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  // edit streaming by id and body ... i.e. enter the id of the streaming in request url and the data in body ...

  .put((req, res, next) => {
    console.log(req.body.name);
    Streamings.findOneAndUpdate(
      { name: req.body.name }, { '$push': { allqueries: req.body.query } },
      { new: true }
    )
      .then(
        (streaming) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(streaming);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  // delete streaming by id

  .delete((req, res, next) => {
    Streamings.findByIdAndRemove(req.params.streamingId)
      .then(
        (resp) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(resp);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });





streamingRouter
  .route("/getstream/:streamname")
  .get((req, res, next) => {
    Streamings.find({ name: req.params.streamname })
      .then(
        (streaming) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(streaming);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })




module.exports = streamingRouter;
