const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/hotels'; // Replace with your database name

// Connect to MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//Get th default connection
//mongoose maintain the connection object representing mongodb connection
const db = mongoose.connection;

// Define the eventn listeners for database connection
db.on('connected', () => {
    console.log('connected to mongodb server');
});
db.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});
db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});
module.exports = db; // Export the database connection for use in other files