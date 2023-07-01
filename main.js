const expresss = require("express");
const socketio = require("socket.io");

const axios = require("axios");

const app = expresss();
const server = require("http").createServer(app);
const io = socketio(server);

// Static files
app.use(expresss.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// run server

server.listen(80, () => {
    console.log("Server is running on port 3000");
});