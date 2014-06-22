var express = require('express');

var willy = require('./libraries/willy.js');

var app = willy.App();

app.get('/', function(req, res) {
    res.send('Alo!');
});

app.listen(5555);
