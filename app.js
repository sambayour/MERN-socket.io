const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.get('/',(req, res) => { 
    // res.sendFile('./views/index.html',{root: __dirname})
    res.render('index');
})

app.get('/api',(rneq, res) => {
    // res.sendFile('./views/api.html',{root: __dirname})
    res.render('api');
    })

    app.use((req, res) => {
        // res.sendFile('./views/error.html',{root: __dirname})
        res.render('error');
        })