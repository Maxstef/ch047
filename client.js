'use strict';

var express = require('express'),
    app = express(),
    enrouten = require('express-enrouten'),
    router  = app.ROUTES(),
    path = require('path');

app.use(express.static('dist'));
app.use('/user', router);
// app.use(function (req, res, next) {
//     if (req.url.indexOf('/apple/') !== 0) return next();
//     router(req, res, next)
// });
app.set('views', path.join(__dirname, 'dist'));
// app.set('view engine', 'js');

app.get('/', function (req, res) {
    res.sendFile(path.join('dist/index.html'));
});

app.set('port', (process.env.PORT || 5000));

console.log('Server up and running on http://localhost:/' + app.get('port'));
app.listen(app.get('port'));
//

// app.set('views', path.join(__dirname, 'app'));
// app.set('view engine', 'html');
