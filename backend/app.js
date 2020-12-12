var createError = require("http-errors");
var cors = require("cors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var passport = require("passport");
var authenticate = require("./authenticate");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var streamings = require("./routes/streamings");
var othersPlatform = require("./routes/othersPlatform");
var othersPlatform2 = require("./routes/othersPlatform2");
var othersPlatform3 = require("./routes/othersPlatform3");

var neww = require("./routes/new");

/////////////////////
// var http = require("http").Server(app);
// var io = require("socket.io")(http);
// var users = 0;

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

var config = require("./config");

//// db connectivity ;;;;;;;;;;;;;;;;l

const mongoose = require("mongoose");

app.use(passport.initialize());

const url = config.mongoUrl;



const connect = mongoose.connect(url);

connect.then(
  (db) => {
    console.log(" Hi i am onnected correctly to server");
  },
  (err) => {
    console.log(err);
  }
);

///////-------------------------------db connect end
app.use("/", indexRouter);

app.use("/streamings", streamings);

app.use("/users", usersRouter);
app.use("/othersPlatform", othersPlatform);
app.use("/othersPlatform2", othersPlatform2);
app.use("/othersPlatform3", othersPlatform3);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
