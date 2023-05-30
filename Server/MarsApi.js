const express = require('express');
const request = require('request');
const app = express();

app.get("/", (req, res) => {
  const url =
    "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver";
  request(url, (error, response, body) => {
    if (error) {
      res.send(error);
    }
    res.send(body);
  });
});
