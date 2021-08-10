const client = require('./config');
const currencyValue = require('./services/dolartoday');

function formatValues(value) {
  const stringToInt = +(value)
  return stringToInt.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

async function handleCurrencies () {
  const value = await currencyValue();

  const veb = formatValues(`${value}`.padEnd(15, 0));
  
  const vef = formatValues(`${value}`.padEnd(12, 0));

  const ves = formatValues(value);

  const checkRecord = () => {
    return veb.length >= 25 ? 'WORLD RECORD!!!':''
  }

  return {sob: ves, fue: vef, bol: veb, dig: 0, record: checkRecord() }
}

const valuesContainer = () => handleCurrencies().then((res) => {
  client.post('statuses/update', {status: `El valor de la familia Bolivar con respecto al dolar: \n VEB: ${res.bol} \n VEF: ${res.fue} \n VES: ${res.sob} \n`})
  .then((tweet) => {
    console.log(tweet)
  }).catch((err) => console.log(err));
});

module.exports = valuesContainer;
