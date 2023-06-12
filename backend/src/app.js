const express = require('express');
const cors = require('cors');

// initialize the app
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// router
const router = require('./routes');
app.use(router);

// routes
app.get('/', (req, res) => {
    res.send('Hello world!');
});



module.exports = app;