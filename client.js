'use strict';

var express = require('express'),
    app = express(),
    path = require('path');

app.use(express.static('dist'));
app.set('views', path.join(__dirname, 'dist'));
// app.set('view engine', 'js');
app.use(function(req, res, next) {
    if (req.path !== '/')
        return res.redirect('/');
    next();
});
// app.get('/', function(req, res, next) {
//         // return res.sendfile('dist/index.html', { root: __dirname + '/..' });
//     next();
// });

app.get('/', function (req, res) {
    res.sendFile(path.join('dist/index.html'));
});

app.set('port', (process.env.PORT || 5000));

console.log('Server up and running on http://localhost:/' + app.get('port'));
app.listen(app.get('port'));
//

// app.set('views', path.join(__dirname, 'app'));
// app.set('view engine', 'html');
