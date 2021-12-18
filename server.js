const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/fc-barcelona'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/fc-barcelona/' }),
);

app.listen(process.env.PORT || 8080);