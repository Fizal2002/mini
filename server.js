const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  // Perform any backend processing here

  res.send(`Form submitted successfully. Name: ${name}, Email: ${email}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
