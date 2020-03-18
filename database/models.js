const Review = require('./schemas.js');

module.exports = {
    getAll: () => Review.find({}),
    getMostHelpful: () => Review.find({}).sort({"helpfulCount": -1}),
    getRecent: () => Review.find({}).sort({"createdAt": 1}),
    getOld: () => Review.find({}).sort({"createdAt": -1}),
    getHighRate: () => Review.find({}).sort({"rating": -1}),
    getLowRate: () => Review.find({}).sort({"rating": 1})
}