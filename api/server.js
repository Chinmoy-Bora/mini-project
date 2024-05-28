const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');

const app = express();
const port = 4040;

app.use(bodyParser.json());
app.use(cors());

app.post('/send', (req, res) => {
  res.json({ reply: 'hello' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
