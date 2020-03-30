const Review = require('./schemas.js');

module.exports = {
    //all get queries
    getAll: (sku) => Review.find(sku),
    getMostHelpful: (sku) => Review.find(sku).sort({ "helpfulCount": -1 }),
    getRecent: (sku) => Review.find(sku).sort({ "createdAt": -1 }),
    getOld: (sku) => Review.find(sku).sort({ "createdAt": 1 }),
    getHighRate: (sku) => Review.find(sku).sort({ "rating": -1 }),
    getLowRate: (sku) => Review.find(sku).sort({ "rating": 1 }),

    //all help/unhelp queries
    addHelp: (id) => Review.findByIdAndUpdate(id, { $inc: { "helpfulCount": 1 } }, { new: true }),
    minusHelp: (id) => Review.findByIdAndUpdate(id, { $inc: { "helpfulCount": -1 } }, { new: true }),
    addUnhelp: (id) => Review.findByIdAndUpdate(id, { $inc: { "unhelpfulCount": 1 } }, { new: true }),
    minusUnhelp: (id) => Review.findByIdAndUpdate(id, { $inc: { "unhelpfulCount": -1 } }, { new: true }),

    //all comments' help/unhelp queries
    commentAddHelp: (id) => Review.update(id, { $inc: { "comments.$.helpfulCount": 1 } }, { new: true }),
    commentMinusHelp: (id) => Review.update(id, { $inc: { "comments.$.helpfulCount": -1 } }, { new: true }),
    commentAddUnhelp: (id) => Review.update(id, { $inc: { "comments.$.unhelpfulCount": 1 } }, { new: true }),
    commentMinusUnhelp: (id) => Review.update(id, { $inc: { "comments.$.unhelpfulCount": -1 } }, { new: true }),

    //changing help/report button detection
    commentAddUnhelp: (id) => Review.update(id, { $inc: { "comments.$.unhelpfulCount": 1 } }, { new: true }),
    commentMinusUnhelp: (id) => Review.update(id, { $inc: { "comments.$.unhelpfulCount": -1 } }, { new: true }),
}