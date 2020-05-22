const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT||4000;
const initSocket= require("./socket/socket")
const server=initSocket(app);
const axios=require("./axios")

let i=1;
app.use(cors());

app.get("/", (req, res) => {
    res.send("v1")
    axios.post('/orders.json',{name:'aboli'+i}).then(result=>i++);
})
app.get("/orders",(req,res)=>{
    axios.get("/orders.json").then(result=>res.send(result.data));
})

server.listen(port, () => console.log(`Server is running on port ${port}`));


