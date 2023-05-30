const express = require('express');
const request = require('request');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    let cityname = req.query.cityname;
    const api = {
        method: 'GET',
        url:`https://yahoo-weather5.p.rapidapi.com/weather`,
        qs: {
            format: 'json',
            location: cityname,
            u: 'c',
        },
        headers: {
            'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com',
            'x-rapidapi-key': '7e978dc152mshbfba3c9c73f0746p19d966jsn71a8411948a8'
        }
    }
    request(api, (error, response, body) => {
        if (error) {
            res.send(error);
        }
        res.send(body);
    })
    
})



app.listen(port, () => {
  console.log(`Example app listening on https://localhost:${port}`)
})
