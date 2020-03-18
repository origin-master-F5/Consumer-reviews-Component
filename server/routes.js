const router = require('express').Router();
const controllers = require('./controllers.js');

router
    .route('/')
    .get(controllers.all);

module.exports = router;