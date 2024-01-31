const express = require('express');
const port = 3000;
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/', (req, res) => {
  let count = req.query.count || 10;
  
  console.log(count)
  res.json(count);
});

app.listen(port, () => {
  console.log(`Приложение запущено и слушает порт ${port}`);
});
