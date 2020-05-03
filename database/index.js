const mongoose = require('mongoose');
require('dotenv').config()
    //use environment variable here instead
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('Mongo is connected!');
});

module.exports = db;