const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var passport = require("passport");
var authenticate = require("../authenticate");

const Users = require("../models/users");
const userRouter = express.Router();
userRouter.use(bodyParser.json());

var nodemailer = require("nodemailer");

///////////////////////////////////////////////// file uploading code starts ////////////////////////////////

var multer = require("multer");
const DIR = "./public/userimages";

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

// mailer code ... code for email sending .......................

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "creativeandinnovative1010@gmail.com",
    pass: "redrighthand",
  },
});

// genenrate a random code of 4 digits  so that we can send it to email ...

userRouter.post("/getcode", (req, res) => {
  var randomnumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  var mailOptions = {
    from: "creativeandinnovative1010@gmail.com",
    to: req.body.username,
    subject: "Verifiction Code",
    html:
      "<h3>Your verification code is:</h3><h1><b>" + randomnumber + "</b></h1>",
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    success: true,
    status: "Successful !!",
    code: randomnumber,
  });
});

/// signup method using file upload method ...

userRouter.post("/signup", upload.single("profilephoto"), (req, res, next) => {
  Users.register(
    new Users({
      username: req.body.username,
      profilephoto: "http://localhost:3000/userimages/" + req.file.filename,
      recoveryemail: req.body.recoveryemail,
    }),
    req.body.password,
    (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err: err });
      } else {
        passport.authenticate("local")(req, res, () => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({ success: true, status: "Registration Successful!" });
        });
      }
    }
  );
});

/// signup method for mobile requests ...

userRouter.post("/msignup", (req, res, next) => {
  Users.register(
    new Users({
      username: "req.body.username",
      profilephoto: "http://localhost:3000/userimages/logoBlack.png",
      recoveryemail: "req.body.recoveryemail",
    }),
    " req.body.password,",
    (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err: err });
      } else {
        passport.authenticate("local")(req, res, () => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({ success: true, status: "Registration Successful!" });
        });
      }
    }
  );
});

// this login method will authenticate the username and password using local strategy of passport and create a new jwt token

userRouter.post("/login", passport.authenticate("local"), (req, res) => {
  var token = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    success: true,
    token: token,
    status: "You are successfully logged in!",
    User: req.user,
  });
});

userRouter
  .route("/")

  // show all the users

  .get((req, res, next) => {
    Users.find({})
      .then(
        (users) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(users);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  // delete all users

  .delete((req, res, next) => {
    Users.remove({})
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

// show user by id

userRouter
  .route("/:userId")
  .get((req, res, next) => {
    Users.findById(req.params.userId)
      .then(
        (user) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(user);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  // edit user by id and body ... i.e. enter the id of the user in request url and the data in body ...

  .put((req, res, next) => {
    Users.findByIdAndUpdate(
      req.params.userId,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then(
        (user) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(user);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  // delete user by id

  .delete((req, res, next) => {
    Users.findByIdAndRemove(req.params.userId)
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

module.exports = userRouter;
