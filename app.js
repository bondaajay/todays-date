const express = require("express");

const app = express();

app.get("/", (request, response) => {
  let time = new Date();

  response.send(
    `${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()}`
  );
});

module.exports = app;
