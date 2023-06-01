const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const socketIo = require("socket.io")(server,{
    cors:{
        origin: "*",
    }
});
socketIo.on("connection", (socket) =>{
    console.log("New client connected" + socket.id);
    socket.on("sendDataClient", function(data){
        socketIo.emit("sendDataServer", { data });
    });
    socket.on("disconnect",()=>{
        console.log("Client disconnected");
    });
});
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

server.listen(3000, () => {
  console.log('listening on *:3000');
});