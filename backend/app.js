require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = 4002;
const path  = require('path')

// middleware
app.use(express.json());
app.use(cors());
app.use(router);

const _dirname = path.dirname("")
const buildPath = path.join(_dirname  , "../frontend/build");

app.use(express.static(buildPath))

app.get("/*", function(req, res){

    res.sendFile(
        path.join(__dirname, "../frontend/build/index.html"),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );

})

app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})