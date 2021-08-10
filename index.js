const express = require('express');
const currencyValues = require('./src/server');

const app = express();
const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  currencyValues();
  setInterval(currencyValues, 1000 * 60 * 60 * 12);
});

