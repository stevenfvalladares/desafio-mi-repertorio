const express = require("express");
const app = express();

const fs = require("fs");
const cors = require("cors");

app.listen(3000, console.log("¡Servidor encendido!"));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname.concat("/index.html"));
});

app.get("/canciones", (req, res) => {
  const songs = JSON.parse(fs.readFileSync("./repertorio.json"));
  res.json(songs);
});

app.post("/canciones", (req, res) => {
  const song = req.body;
  const songs = JSON.parse(fs.readFileSync("./repertorio.json"));

  songs.push(song);
  fs.writeFileSync("./repertorio.json", JSON.stringify(songs));
  res.send("¡Canción agregada con exito!");
});

app.put("/canciones/:id", (req, res) => {
  const { id } = req.params;
  const song = req.body;
  const songs = JSON.parse(fs.readFileSync("./repertorio.json"));
  const index = songs.findIndex((song) => song.id == id);

  songs[index] = song;
  fs.writeFileSync("./repertorio.json", JSON.stringify(songs));
  res.send("¡Canción modificada con exito! ");
});

app.delete("/canciones/:id", (req, res) => {
  const { id } = req.params;
  const songs = JSON.parse(fs.readFileSync("./repertorio.json"));
  const index = songs.findIndex((song) => song.id == id);

  songs.splice(index, 1);
  fs.writeFileSync("./repertorio.json", JSON.stringify(songs));
  res.send("¡Canción eliminada con exito!");
});

