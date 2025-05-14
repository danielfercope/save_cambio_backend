module.exports = function validateParams(from, to, amount) {
    if (!from || !to || !amount) {
      return 'Parâmetros "from", "to" e "amount" são obrigatórios.';
    }
  
    if (isNaN(amount) || parseFloat(amount) <= 0) {
      return 'O parâmetro "amount" deve ser um número maior que zero.';
    }
  
    return null;
  };
  