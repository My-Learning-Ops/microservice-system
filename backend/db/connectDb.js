
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO URI)
        console.log('Connected to MongoDB Successfully!');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
}