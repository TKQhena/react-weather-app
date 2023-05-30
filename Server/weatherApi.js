const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

const cityname = ''
// Is currently printing index.html in console.
app.get("/", (req, res) => {
    cityname = req.body;
  const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityname}?unitGroup=us&key=4WSNHNESR8HZVVKD5V9TVARUF`;
  request(api, (error, response, body) => {
    if (error) {
      console.log('Retards')
    }
    console.log('WE got here')
  });
});



app.listen(port, () => {
  console.log(`Example app listening on https://localhost:${port}`)
})
