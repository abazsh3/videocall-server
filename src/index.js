const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT||4000;
const initSocket= require("./socket/socket")
const server=initSocket(app);



app.use(cors());

app.get("/", (req, res) => {
    res.send("v1")
})

server.listen(port, () => console.log(`Server is running on port ${port}`));


