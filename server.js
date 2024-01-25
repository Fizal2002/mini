const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve static files like index.html

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

let submissions = [];

app.post("/submit", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const country = req.body.country;

  const submission = {
    name: name,
    email: email,
    country: country,
    timestamp: new Date().toLocaleString(),
  };

  submissions.push(submission);

  console.log("Form submitted:", submission);
  res.send(`Form submitted successfully. Name: ${name}, Email: ${email}, Country: ${country}`);
});

app.get("/submissions", (req, res) => {
  res.json(submissions);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
