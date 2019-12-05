const express = require("express");
const cors = require("cors");
const cowsay = require("cowsay");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api/cow/:text", (req, res) => {
  const { text } = req.params;
  console.log("api request");
  console.log(text);
  const result = cowsay.say({
    text: text
  });
  return res.send(result);
});

app.get("/", (req, res) => {
  console.log("get request");
  return res.send(
    cowsay.say({
      text: "Hello World.\nAdding extra line for testing!"
    })
  );
});

app.listen(4000);
