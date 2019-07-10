const https = require("https");
const urlOpenWeatherMap = "https://api.openweathermap.org/data/2.5/weather?q=";
const userKey = "&APPID=caf1764f2fe5e1a34e01377fc1b5e6f0";
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
const request = require('request');
var port = 8000;

const cities = ['Toronto', 'Kuala Lumpur', 'Prague', 'Paris', 'Tokyo', 'NY', 'Barselona', 'Dubai'];

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/city', function(req, res) {
    var data;
    //var url = urlOpenWeatherMap + req.url.slice(5) + userKey;
    var url = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=caf1764f2fe5e1a34e01377fc1b5e6f0";
    request(url, function (err, response, body) {
        res.send(JSON.parse(body));
    });
    
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`));

