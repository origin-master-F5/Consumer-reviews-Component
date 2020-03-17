const mongoose = require('mongoose');
const db = require('./index.js');
const Schema = mongoose.Schema;

const schemas = {
  listing: new Schema({
    name: String, // 
    type: String, //stay, experience etc...
    state: String,
    country: String,
    city: String,
    images: [{ image: String }], //imageurls
  }),

  languages: new Schema ({
    name: String,
    country: String
  }),

  currency: new Schema ({
    name: String,
    symbol: String
  })
};

