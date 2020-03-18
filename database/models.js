const Review = require('./schemas.js');

module.exports = {
    //all get queries
    getAll: () => Review.find({}),
    getMostHelpful: () => Review.find({}).sort({"helpfulCount": -1}),
    getRecent: () => Review.find({}).sort({"createdAt": -1}),
    getOld: () => Review.find({}).sort({"createdAt": 1}),
    getHighRate: () => Review.find({}).sort({"rating": -1}),
    getLowRate: () => Review.find({}).sort({"rating": 1}),

    //all help/unhelp queries
    addHelp: (id) => Review.findByIdAndUpdate(id, {$inc: {"helpfulCount": 1}}, {new: true}),
    minusHelp: (id) => Review.findByIdAndUpdate(id, {$inc: {"helpfulCount": -1}}, {new: true}),
    addUnhelp: (id) => Review.findByIdAndUpdate(id, {$inc: {"unhelpfulCount": 1}}, {new: true}),
    minusUnhelp: (id) => Review.findByIdAndUpdate(id, {$inc: {"unhelpfulCount": -1}}, {new: true}),

    //all comments' help/unhelp queries
    commentAddHelp: (id) => Review.update(id, {$inc: {"comments.$.helpfulCount": 1}}, {new: true}),
    commentMinusHelp: (id) => Review.update(id, {$inc: {"comments.$.helpfulCount": -1}}, {new: true}),
    commentAddUnhelp: (id) => Review.update(id, {$inc: {"comments.$.unhelpfulCount": 1}}, {new: true}),
    commentMinusUnhelp: (id) => Review.update(id, {$inc: {"comments.$.unhelpfulCount": -1}}, {new: true}),
}