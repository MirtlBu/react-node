var https = require("https");
var urlOpenWeatherMap = "https://api.openweathermap.org/data/2.5/weather?q=";
var userKey = "&units=metric&APPID=caf1764f2fe5e1a34e01377fc1b5e6f0";
var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var port = 8000;
var fs = require('fs');


app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    
});

app.get('/current', function(req, res) {

    function getTemp(data) {
        var url = urlOpenWeatherMap + data + userKey;
        request(url, function (err, response, body) {
            res.send(JSON.parse(body));
        });
    }

    request('https://ipinfo.io', function (err, response, body) {
        var obj = JSON.parse(body);
        getTemp(obj.city);
    });
});


app.get('/:city', function(req, res) {
    
    var url = urlOpenWeatherMap + req.params.city + userKey;
    request(url, function (err, response, body) {
        var response = JSON.parse(body);
        res.send(response);
    });
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));