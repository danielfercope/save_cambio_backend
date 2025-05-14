const exchangeService = require('../service/exchangeService');
const validateParams = require('../util/validateParams');

exports.convert = async (req, res) => {
  let { from, to, amount } = req.query;

  from = from?.toUpperCase();
  to = to?.toUpperCase();

  const validationError = validateParams(from, to, amount);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    const result = await exchangeService.convertCurrency(from, to, parseFloat(amount));
    res.json(result);
  } catch (error) {
    console.error('Erro na conversão:', error.message);
    res.status(error.statusCode || 500).json({ error: error.message || 'Erro interno.' });
  }
};

exports.getHistory = async (req, res) => {  
  try {
    const history = exchangeService.getConversionHistory();
    console.log('Histórico atual:', history);  
    res.json(history || []);  
  } catch (error) {
    console.error('Erro no histórico:', error);
    res.status(500).json({ 
      error: 'Erro ao buscar histórico de conversões.',
      details: error.message 
    });
  }
};
