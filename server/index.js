const express = require("express");
const socketio = require("socket.io");
const http = require("http");

//one port for local server and other for deployment
const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//socket.io code
io.on("connection", socket => {
  console.log("We have a new connection");

  socket.on("join", ({ name, room }, callback) => {
    console.log(name, room);

    //implement error handling later
  });

  socket.on("disconnect", () => {
    console.log("User has left the chat");
  });
});

//use as a middleware
app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
