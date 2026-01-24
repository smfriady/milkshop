import express from 'express';

const app = express();
const port = process.env.PORT;
console.log(port);

app.get('/api', (req, res) => {
  res.json({
    id: '1',
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
