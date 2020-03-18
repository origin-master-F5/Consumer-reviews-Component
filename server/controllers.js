const query = require('../database/models.js');

module.exports = {
    all: (req, res) => {
        query.getAll()
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(400).send(err));
    },
    mostHelpful: (req, res) => {
        query.getMostHelpful()
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(400).send(err));
    },
    recent: (req, res) => {
        query.getRecent()
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(400).send(err));
    },
    old: (req, res) => {
        query.getOld()
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(400).send(err));
    },
    highRate: (req, res) => {
        query.getHighRate()
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(400).send(err));
    },
    lowRate: (req, res) => {
        query.getLowRate()
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(400).send(err));
    },
    //help/unhelp buttons
    addHelpCount: (req, res) => {
        let _id = req.params.id
        query.addHelp({_id})
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(400).send(err));
    },
    minusHelpCount: (req, res) => {
        let _id = req.params.id
        query.minusHelp({_id})
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(400).send(err));
    },
    addUnhelpCount: (req, res) => {
        let _id = req.params.id
        query.addUnhelp({_id})
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(400).send(err));
    },
    minusUnhelpCount: (req, res) => {
        let _id = req.params.id
        query.minusUnhelp({_id})
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(400).send(err));
    },
    //comments' unhelp/help button
    commentAddHelpCount: (req, res) => {
        let _id = req.params.id
        query.commentAddHelp({'comments._id': _id})
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(400).send(err));
    },
    commentMinusHelpCount: (req, res) => {
        let _id = req.params.id
        query.commentMinusHelp({'comments._id': _id})
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(400).send(err));
    },
    commentAddUnhelpCount: (req, res) => {
        let _id = req.params.id
        query.commentAddUnhelp({'comments._id': _id})
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(400).send(err));
    },
    commentMinusUnhelpCount: (req, res) => {
        let _id = req.params.id
        query.commentMinusUnhelp({'comments._id': _id})
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(400).send(err));
    }
};