const express = require("express");
const app = express();

const crudrouter = require("./routes/crud.routes");

app.use(express.json());

app.use("/crud", crudrouter);

module.exports = app;
