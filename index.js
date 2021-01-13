const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const skillRoutes = require('./src/routes/skills');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/v1/skill', skillRoutes);

app.listen(4000, () => {
  console.log(`Server started on 4000`);
});
