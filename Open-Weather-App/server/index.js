const express = require("express");
var request = require("request");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from our server!" })
})


app.get("/weather", (req, res) => {
    request(
        "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9c76e519b2c8bc3792e37dda0bf8ccab",
        function (error, response, body){
            res.send(body)
        }
    )
})

// app.get("/weather", (req, res) => {
//     request(
//         "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9c76e519b2c8bc3792e37dda0bf8ccab",
//         // function(error, response, body){
//         //     if(!error && response.statusCode == 200){
//         //         var parsedBody = JSON.parse(body);
//         //         var coord = parsedBody['coord'];
//         //         res.send({coord});
//         //     }
//         // }
//     )
// })






app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})