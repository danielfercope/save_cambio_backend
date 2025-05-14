require('dotenv').config();
const express = require('express');
const cors = require('cors'); 

const app = express();

app.use(cors({
  origin: 'http://localhost:5173' 
}));

app.use(express.json());

const convertRoutes = require('./routes/convertRoutes');

app.use(convertRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
