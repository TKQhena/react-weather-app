const express = require('express')
const axios = require('axios')
const router = express.Router()

const app = express()
require('dotenv').config()

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get("/Search", (req, res) => {

  const location = req.query.location;
  const unitGroup = req.query.units;
  console.log(req.query);

  const options = {
    method: "GET",
    url: "api.openweathermap.org/data/2.5/forecast",
    params: {
      zip: location,
      appid: process.env.API_KEY,
      units: unitGroup,
    },
  };
  
  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  
});

module.exports = router



