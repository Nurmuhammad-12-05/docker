const express = require("express");
const { Client } = require("pg");

const app = express();
const PORT = 4000;

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "hello12",
  database: "postgres2",
  port: 5432,
});

app.get("/", (req, res) => {
  res.send(`hello from Backend, DB: ${client}`);
});

app.listen(PORT, () => console.log("Server running port"), PORT);
