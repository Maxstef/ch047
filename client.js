'use strict';

var express = require('express'),
    app = express(),
    path = require('path');
app.use(express.static('dist'));

app.get('*', function (req, res) {
    res.sendFile(path.join('dist/index.html'));
});

var port = 3009;

console.log('Server up and running on http://localhost:/' + port);
app.listen(port);
