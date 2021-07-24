const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

const routes = require('./routes');

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Database connected');
  })
  .catch(error => {
    console.log(error);
  });

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'temp')));
app.use(routes);

app.listen(3000, () => console.log('Server started, port 3000'));
