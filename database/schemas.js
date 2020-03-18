const mongoose = require('mongoose');
const db = require('./index.js');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  title: {type: String, required: true},
  rating: {type: Number, required: true}, //star rating from 1-5
  user: {type: String, required: true},
  body: String,
  pics: [{ url: String }],
  helpfulCount: {type: Number, default: 0, min: 0},
  unhelpfulCount: {type: Number, default: 0, min: 0},
  // helpScore: {type: Number, validate: () => this.helpfulCount - this.unhelpfulCount},
  recommended: Boolean,
  verified: Boolean,
  purchasedDate: Date,
  comments: [{
    user: String,
    body: String,
    date: {type: Date, default: Date.now},
    helpfulCount: {type: Number, default: 0},
    unhelpfulCount: {type: Number, default: 0},
  }]
}, 
{
  timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;