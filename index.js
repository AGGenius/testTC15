const express = require('express');
const app = express();

const dbConnection =  require('./config/config');
const routes = require('./routes');

const port = 3003;

app.use(express.json());
app.use('/', routes);

dbConnection();

app.listen(port, () => { console.log(`Server initialized at http://localhost:${port}`)});

module.exports = app;