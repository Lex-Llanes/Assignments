var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
    //res.send('hey I worked')
 })



// app.get('/index', function (req, res) {
//     res.send('Hello World');
//  })
 

 app.get('/about', function (req, res) {
    res.sendFile( __dirname + "/" + "about.html" );
 });


var server = app.listen(8080, function () {
var host = server.address().address
var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })