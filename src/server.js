'use strict';

const express = require('express');

// Constants
const PORT = parseInt(process.env.PORT || 8080);
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello world from ${process.env.SERVICE_NAME}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

