const http = require("http");




let peers=[];
const initSocket=(app)=>{
    const server = http.createServer(app);
    const io = require("socket.io")(server);
    io.sockets.on("error", e => console.log(e));
    io.sockets.on("connection", socket => {
        socket.on("newPeer",(id)=>{

            if (peers.length>=2){
                console.log("peers limit")
                return;
            }
            if (peers[0]){

                socket.to(peers[0]).emit("newPeer",id)

            }
            peers.push(id)
            console.log(peers)

        })


        socket.on("disconnect", () => {
            socket.broadcast.emit("peerDc")
            peers=peers.filter((peer)=>peer!==socket.id)
            console.log(peers)
        });
    });
    return server
}
module.exports=initSocket;
