const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const infoArray = [1, 2, 3, 4, 5, 6, 7, 8]

app.get('/', (req, res) => {
  res.send(infoArray)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})