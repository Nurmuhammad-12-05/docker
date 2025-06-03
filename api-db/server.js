const express = require("express");
const { Client } = require("pg");

const app = express();
const PORT = 3000;

const client = new Client({
  host: "postgres",
  user: "postgres",
  password: "hello12",
  database: "postgres",
});

app.get("/health", async (req, res) => {
  try {
    const result = await client.query("select now()");
    res.json({ status: "ok", time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

app.listen(PORT, () => console.log("Server running on port, ", PORT));
