const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/books", (req, res) => {
  res.send({
    A_Suitable_boy: "By Vikram Seth",
    Five_point_someone: "Chetan bhagat",
    Angry_river: "Ruskin Bond",
    Gitanjali: "Rabindranath Tagore",
  });
});

app.listen(7000, () => {
  console.log("listening at 7000");
});
