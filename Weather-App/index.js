const http = require('http')
var rp = require('request-promise');
const port = 8080
  
const server = http.createServer(function (req, res) {
      res.write('Test')
      rp('api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=')
    .then(function (htmlString) {
        const response = htmlSptring;
        // Process html...
        console.log(htmlString.json())
    })
    .catch(function (err) {
        // Crawling failed...
    });
      res.end()
})
  
server.listen(port, function (error) {
  
    if (error) {
        console.log('An error occurred', error);
    }
    else {
        console.log('Server is listening on port' + port);
    }
})







    