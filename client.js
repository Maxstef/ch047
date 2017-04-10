'use strict';

var express = require('express'),
    app = express(),
    path = require('path');

app.use(express.static('dist'));
app.set('views', path.join(__dirname, 'dist'));
// app.set('view engine', 'js');
// app.set("view options", {layout: false});
app.use(app.router);
app.get('/', function (req, res) {
    res.render(path.join('dist/index.html'));
});

app.set('port', (process.env.PORT || 5000));

console.log('Server up and running on http://localhost:/' + app.get('port'));
app.listen(app.get('port'));
//

// app.set('views', path.join(__dirname, 'app'));
// app.set('view engine', 'html');
