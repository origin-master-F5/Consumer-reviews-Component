const Review = require('./schemas.js');

module.exports = {
    getAll: () => Review.find({}),
    getMostHelpful: () => Review.find({}).sort({"helpfulCount": -1}),
    getRecent: () => Review.find({}).sort({"createdAt": -1}),
    getOld: () => Review.find({}).sort({"createdAt": 1}),
    getHighRate: () => Review.find({}).sort({"rating": -1}),
    getLowRate: () => Review.find({}).sort({"rating": 1}),

    addHelp: (id) => Review.findByIdAndUpdate(id, {$inc: {"helpfulCount": 1}}, {new: true}),
    minusHelp: (id) => Review.findByIdAndUpdate(id, {$inc: {"helpfulCount": -1}}, {new: true}),
    addUnhelp: (id) => Review.findByIdAndUpdate(id, {$inc: {"unhelpfulCount": 1}}, {new: true}),
    minusUnhelp: (id) => Review.findByIdAndUpdate(id, {$inc: {"unhelpfulCount": -1}}, {new: true})
}