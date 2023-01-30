const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.listen(3000, console.log("¡Servidor encendido!"));

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.sendFile(__dirname.concat("/index.html"));
});
