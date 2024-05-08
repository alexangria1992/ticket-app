const express = require('express');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello');
});

//Routes
app.use('/api/users', require('./routes/UserRoutes'));
app.use(errorHandler);
app.use('/api/users/login', require('./routes/UserRoutes'));

app.listen(PORT, () =>
  console.log(colors.cyan(`Server started on port ${PORT}`))
);
