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
    }
};