const dotenv = require('dotenv');
const express = require('express');
const app = express()

dotenv.config();

const hostname = process.env.HOST_NAME
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening at http://${hostname}:${port}`)
})
