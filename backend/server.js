const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () =>
  console.log(colors.cyan(`Server started on port ${PORT}`))
);
