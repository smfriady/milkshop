import express from 'express';
import products from './data/data.js';

const app = express();
const port = process.env.PORT;

app.get('/api', (req, res) => {
  res.send('Api running!');
});

app.get('/api/products', (req, res) => {
  return res.json(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
