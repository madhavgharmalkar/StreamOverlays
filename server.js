var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);


const PORT = process.env.PORT || 3000;

io.on("connection", (socket) => {

    socket.on("message", (msg) => {
        io.emit("message", msg);
    });

    socket.on("update", (msg) => {
        io.emit("update", msg);
    });
});

app.use("/", express.static("client"));
http.listen(PORT);
