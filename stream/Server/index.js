var express = require("express");
var app = new express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var users = 0;
var port = 4001;

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  // res.redirect("index.html");
});

// h

io.on("connection", function (socket) {
  socket.on("stream", function (image, streamname) {
    socket.join("stream1");
    socket.to(streamname).broadcast.emit("stream", image);
  });

  socket.on("stream1", function (streamname) {
    socket.join(streamname);
    console.log(streamname + "rom joined");
  });

  // users = users + 1;
  // console.log(users + "user connected");
});

http.listen(port, "0.0.0.0", function () {
  console.log("Server running at port " + port);
});
