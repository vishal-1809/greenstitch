const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const FootprintRoutes = require('./routes/FootprintRoute');

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

const server = app.listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT}`);
});

app.use('/api', FootprintRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log('error');
    console.log(err.message);
  });