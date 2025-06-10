

const express = require('express');
const cors = require('cors');
const Comic = require('./models/comicModel');
const connectDB = require('./db/connect');

// Setup app and set port
const app = express();
const port = process.env.PORT || 5000;

// Basic middleware
app.use(cors());
app.use(express.json());
console.log(process.env.PORT);
console.log(process.env.MONGO_URI);

// GET all
app.get('/', (req, res) => {
    res.send('Server up and running...');
});

app.get('/comics', async (req, res) => {
    try {
        const comics = await Comic.find();
        console.log('Comics Fetched!');
        return res.status(200).json({ comics: comics });
    } catch (error) {
        console.error('An error occurred while fetching the comics!');
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: 'Server Error' });
    }
})

// POST a comic
app.post('/comics', async (req, res) => {
    const { title, author, issue, volume, releaseDate } = req.body;
    if (!title) return res.status(400).json({ message: 'Title is required for this type of request!' });

    try {
        const comic = await Comic.create({
            title: title,
            author: author,
            issue: issue,
            volume: volume,
            releaseDate: releaseDate
        });

        console.log('Comic Created Successfully!');
        return res.status(201).json({ message: 'Comic entry created successfully!' });
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Connect to the db
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`App listening on http://localhost:${port}/`);
    });
}).catch((error) => {
    console.error(`Connection Error: ${error.message}`);
});