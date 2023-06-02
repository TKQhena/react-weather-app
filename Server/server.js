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
    url: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
    params: {
      unitGroup: units,
      key: process.env.API_KEY,
      location: cityname,
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
    
})

app.listen(port, () => {
  console.log(`Example app listening on https://localhost:${port}`)
})
