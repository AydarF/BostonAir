var express = require('express');

//Create our app

var app = express();

app.use(express.static('www'));

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});