const express = require("express");
const app = express();
/* const fs = require("fs"); */
const cors = require("cors");

app.listen(3000, console.log("¡Servidor encendido!"));

app.use(cors());

/* app.use(express.json()); */

app.get("/", (req, res) => {
  res.sendFile(__dirname.concat("/index.html"));
});
