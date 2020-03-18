const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airbnb', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Mongo is connected!');
});

module.exports = db;