
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./db/connectDb');
const Message = require('./models/messageModel');

// Creates the express app
const app = express();
const port = process.env.PORT || 5000;

// Basic middleware
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    const messages = await Message.find();
    console.log('Loaded all messages');
    res.status(200).json(messages);
});

app.post('/', async (req, res) => {
    try {
        const { user, message } = req.body;
        if (!message) return res.status(400).json({ message: 'A message is required!' });

        const newMessage = new Message({ user, message });
        const savedMessage = await newMessage.save();
        console.log('Comic Saved Successfully!');
        res.status(201).json(savedMessage);
    } catch (error) {
        console.error(`Error creating a message entry: ${error.messages}`);
        res.status(500).json({ error: 'Server Error' });
    }
})

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}`);
    });
}).catch((error) => {
    console.log(`Failed to start server: ${error.messages}`);
    process.exit(1);
})
