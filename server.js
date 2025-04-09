const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = dotenv.parsed.PORT || 3000;

app.get("/api/contacts", (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
