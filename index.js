
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const app = express();
const port = 3001;

// mongoose.connect('mongodb://localhost:27018/testdocker', {useNewUrlParser: true,})

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("connect database")
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all("/*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    next();
  });

app.get("/", (req, res)=> {
    res.send("test connect with host")
})

app.listen(port, () => {
    console.log("server listening on port :", port);
});