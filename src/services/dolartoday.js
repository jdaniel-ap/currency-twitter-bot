const fetch = require("node-fetch");

const bolivarValue = async () => {
  const request = await fetch('https://s3.amazonaws.com/dolartoday/data.json');
  const { USD } = await request.json();

  return Math.ceil(USD.promedio_real);
}

module.exports = bolivarValue;