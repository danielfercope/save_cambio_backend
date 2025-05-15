require('dotenv').config();
const express = require('express');
const cors = require('cors'); 

const app = express();
const allowedOrigins = [
  'http://localhost:5173',
  'https://save-cambio-frontend.vercel.app'
];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  }
}));

app.use(express.json());
const convertRoutes = require('./routes/convertRoutes');
app.use(convertRoutes);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
