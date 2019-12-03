const express = require("express");
const socketio = require("socket.io");
const http = require("http");

//one port for local server and other for deployment
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
