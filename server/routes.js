const router = require('express').Router();
const controllers = require('./controllers.js');

// router
//     .route()
//     .get();


router.get('/', controllers.all)
router.get('/help', controllers.mostHelpful)
router.get('/recent', controllers.recent)
router.get('/oldest', controllers.old)
router.get('/highestRating', controllers.highRate)
router.get('/lowestRating', controllers.lowRate)
module.exports = router;