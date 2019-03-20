var express = require('express');
var cors = require ('cors');
import path from 'path';
import compression from 'compression';

const app = express();
app.use(cors());
/* eslint-disable no-console */
app.set('port', (process.env.PORT || 3000));

app.use(express.static('dist'));
app.use(compression());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
    {"id": 1, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com"},
    {"id": 1, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com"}
  ]);
});

app.listen(app.get('port'), function() {
  console.log("app is running on port " + app.get('port'));
});


