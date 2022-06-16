var express = require('express');
var app = express();

app.use('/', express.static(__dirname + "/"));
app.get('/', function (req, res) {
    res.redirect('/index.html');
});

app.get('/tpDocker', function (req, res) {
    var name = req.query.username;
    res.send("Bonjour " + name + ", vous êtes bien matinal !");
});

app.listen(8081)