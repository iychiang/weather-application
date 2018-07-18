const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api/getWeather/:city', (req, res) => {
  const API_KEY = process.env.WEATHER_API_KEY;
  axios(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&units=imperial&APPID=${API_KEY}`)
  .then(response => res.send(response.data))
  .catch(err => console.log(err))
})

module.exports = app;
