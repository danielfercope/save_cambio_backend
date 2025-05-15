const axios = require('axios');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 3600 });

const conversionHistory = [];

exports.convertCurrency = async (from, to, amount) => {
  let rates = cache.get(from);

  if (!rates) {
    const response = await axios.get(`${process.env.EXCHANGE_API_URL}/${process.env.EXCHANGE_API_KEY}/latest/${from}`);

    if (response.data.result !== 'success') {
      const error = new Error('Falha ao obter taxas de câmbio da API externa.');
      error.statusCode = 502;
      throw error;
    }

    rates = response.data.conversion_rates;
    cache.set(from, rates);
  }

  const rate = rates[to];
  if (!rate) {
    const error = new Error(`Moeda de destino "${to}" inválida ou não suportada.`);
    error.statusCode = 400;
    throw error;
  }

  const converted = (amount * rate).toFixed(2);
  const conversion = { from, to, amount, converted, rate, date: new Date().toISOString() };
  conversionHistory.push(conversion);
  return conversion;
};

exports.getConversionHistory = () => {
  return conversionHistory;
};
