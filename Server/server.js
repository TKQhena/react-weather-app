const express = require('express');
const cors = require('cors');

const app = express();
const port = 5200;

app.use(cors())

app.use('/api', require('./routes/weatherRoutes'))

app.listen(port, () => {
  console.log(`Example app listening on https://localhost:${port}`)
})
