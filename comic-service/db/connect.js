
const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error('An error occurred while connecting to the database!');
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;