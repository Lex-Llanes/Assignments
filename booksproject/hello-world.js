const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World, from express!');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}`));