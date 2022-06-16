var express = require('express');
var app = express();

app.use('/html', express.static(__dirname + "/html"));
app.get('/', function (req, res) {
    res.redirect('index.html');
});



app.listen(8081)