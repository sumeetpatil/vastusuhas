var express = require('express');
var vastuCal = require('./public/js/vastuCal');
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/calculate', function(req, res) {
    let length = req.query.length;
    let width = req.query.width;
    res.send(vastuCal.vastu.calculate(length,width));
  });

var server = app.listen(5000);