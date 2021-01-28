const express = require('express');

const app = express();

app.listen(3000);

app.get('/',(req, res) => {
res.send('<h3>Hello World</h3>')
})

app.get('/api',(req, res) => {
    res.send('<p>Api route</p>')
    })