const http = require("http");




let peers=[];
const initSocket=(app)=>{
    const server = http.createServer(app);
    const io = require("socket.io")(server);
    io.sockets.on("error", e => console.log(e));
    io.sockets.on("connection", socket => {
        socket.on("newPeer",(id,peerID)=>{

            socket.to(peerID).emit("newPeer",id)


            console.log(peers)

        })


        socket.on("disconnect", () => {
            socket.broadcast.emit("peerDc")
            console.log(peers)
        });
    });
    return server
}
module.exports=initSocket;
