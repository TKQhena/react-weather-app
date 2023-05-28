const express = require('express');
const https = require('https');
const request = require('request');
const app = express();

const options = {
  method: "GET",
  url: "https://yahoo-weather5.p.rapidapi.com/weather",
  qs: {
    location: `${cityname}`,
    format: "json",
    u: `${metric}`,
  },
  headers: {
    "X-RapidAPI-Key": "7e978dc152mshbfba3c9c73f0746p19d966jsn71a8411948a8",
    "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
  },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});