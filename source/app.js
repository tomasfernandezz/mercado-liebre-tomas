const express = require('express');
const {resolve} = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.listen(port);
const public = resolve(__dirname, '../public');
const static = express.static(public);
app.use(static);

app.get('/', (req, res) => {
  let view = resolve(__dirname, 'views','home.html');
  return res.sendFile(view);
}) 

app.get('/register', (req, res) => {
  let view = resolve(__dirname, 'views','register.html');
  return res.sendFile(view);
}) 

app.get('/login', (req, res) => {
  let view = resolve(__dirname, 'views','login.html');
  return res.sendFile(view);
}) 
