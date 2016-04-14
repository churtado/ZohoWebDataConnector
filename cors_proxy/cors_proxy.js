var express = require('express');
var request = require('request');

var app = express();
/*app.use('/', function(req, res) {
    var url = apiServerHost + req.url;
    req.pipe(request(url)).pipe(res);
});*/

app.use('/proxy', function(req, res) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    var url = req.url.replace('/?url=','');
    req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000);  