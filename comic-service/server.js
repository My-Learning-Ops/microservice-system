
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connect');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server up and running.');
});

console.log(process.env.MONGO_URI);
// Connect to the db
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`App listening on http://localhost:${port}/`);
    });
}).catch((error) => {
    console.error(`Connection Error: ${error.message}`);
});