const query = require('../database/models.js');

module.exports = {
    all: (req, res) => {
        query.getAll()
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(400).send(err));
    }
};