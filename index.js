const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 3000;
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors());
let count;

app.listen(port, () => {
  console.log(`Приложение запущено и слушает порт ${port}`);
});

app.put('/count/create', (req, res) => {
  let count = req.body.count;
  const database = fs.readFileSync(
    path.join(__dirname, 'database.json'),
    'utf-8'
  );

  let data = JSON.parse(database);

  count = +count + 1;
  data.count = count;
  console.log(data);
  fs.writeFileSync(
    path.join(__dirname, 'database.json'),
    JSON.stringify(data, null, 4),
    'utf-8'
  );
  console.log(data);
  res.send(
    JSON.stringify({
      count,
    })
  );
});

app.get('/', (req, res) => {
  res.sendFile('/Users/nnl/expressHW1/database.json');
});
