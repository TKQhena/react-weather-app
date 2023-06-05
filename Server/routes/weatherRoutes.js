const express = require('express')
const axios = require('axios')
const router = express.Router()

const app = express()
require('dotenv').config()

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get("/Search/zip", (req, res) => {
  const cityname = req.query.zip;
  const unit = req.query.units
  console.log(req.query);
  

  const options = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/forecast",
    params: {
      zip: cityname,
      appid: process.env.API_KEY,
      units: unit,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.status(400).send(error);
    });
});

router.get("/Search/city", (req, res) => {
  const cityname = req.query.city;
  const unit = req.query.units
  console.log(req.query);

  const options = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/forecast",
    params: {
      q:cityname,
      appid: process.env.API_KEY,
      units: unit,
    },
  }

  axios
  .request(options)
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    res.status(400).send(error);
  })
})


module.exports = router



