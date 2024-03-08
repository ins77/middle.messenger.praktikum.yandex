const express = require('express');
const serverless = require('serverless-http');
const path = require('node:path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('dist'))
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});

module.exports.handler = serverless(app);