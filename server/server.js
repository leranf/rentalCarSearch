const express = require('express');
const app = express();

// dotenv sets up the process.env variables. Put env variables in a .env file in your root
const PORT = 8000;

app.use(express.static('../client'));

app.set('port', PORT);
const server = app.listen(PORT);
console.log(`Listening on port ${PORT}`);

module.exports = app;
