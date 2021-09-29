
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const sql = require("./DB/db.js");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const axios = require('axios');

const  express = require('express')
const yanir_shuval_app = express();
const port = 8080;

yanir_shuval_app.get('/', (req, res) => {
res.send('Hello World!')
})
yanir_shuval_app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})