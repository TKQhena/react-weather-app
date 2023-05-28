const express = require('express');
const https = require('https');
const { url } = require('inspector');
const request = require('request');
const app = express();

url = `api.openweathermap.org/data/2.5/forecast/daily?q=${cityname}&cnt=7&appid=${APIkey}`;

APIkey = `d7c3bf0b33c4fda974496122d123ff28`;

request(url, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});