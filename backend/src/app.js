const sequelize = require('./config/database');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('CHANGAN backend is running');
});

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('DB error:', err));

sequelize.sync()
  .then(() => console.log('Models synced'));

  const authRoutes = require('./routes/authRoutes');
  app.use('/api/auth', authRoutes);
  
  const productRoutes = require('./routes/productRoutes');
  app.use('/api/products', productRoutes);
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
