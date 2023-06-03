const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();


const app = express();
const port = 8000;

app.use(cors());

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.get('/Search', (req, res) => {
  const cityname = req.query.location;
  const units = req.query.unitGroup;
  console.log(req.query)

  const options = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: {
       zip: "9499,ZA", 
       appid: process.env.API_KEY ,
      units: "metric"
     },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
    
})

app.listen(port, () => {
  console.log(`Example app listening on https://localhost:${port}`)
})
