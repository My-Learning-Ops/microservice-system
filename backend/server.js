
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Creates the express app
const app = express();
const port = 5000;

// Basic middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});