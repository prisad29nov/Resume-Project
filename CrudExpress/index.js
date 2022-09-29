// require('dotenv').config()
const app = require("./app");
const port = 9090;
const mongoose = require("mongoose");
const path = "mongodb+srv://prisadtupe:M1WZT936ft4QUdPG@cluster0.s0bqdag.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(path).then(data => {
  console.log("Mongodb connected")
}).catch(err => {
  console.log(err);
})


app.listen(port, function() {
  console.log(`Server Running At Port ${port}`);
})