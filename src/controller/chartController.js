const axios = require('axios');

exports.getChartData = async (req, res) => {
  const { from, to, start, end } = req.query;

  if (!from || !to || !start || !end) {
    return res.status(400).json({ 
      error: 'Parâmetros obrigatórios: from (moeda origem), to (moeda destino), start (data início), end (data fim)' 
    });
  }

  try {
    const url = `https://api.frankfurter.app/${start}..${end}?from=${from}&to=${to}`;
    const response = await axios.get(url);
    const formatted = Object.entries(response.data.rates).map(([date, rates]) => ({
      date,
      value: rates[to] 
    }));
    res.json(formatted);
    
  } catch (err) {
    console.error('Erro na API Frankfurter:', err.message);
    
    if (err.response?.data?.message) {
      return res.status(400).json({ error: err.response.data.message });
    }
    
    res.status(500).json({ error: 'Erro ao processar a requisição' });
  }
};