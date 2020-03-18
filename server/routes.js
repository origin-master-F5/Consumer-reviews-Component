const router = require('express').Router();
const controllers = require('./controllers.js');


//all get requests
router.get('/', controllers.all)
router.get('/help', controllers.mostHelpful)
router.get('/recent', controllers.recent)
router.get('/oldest', controllers.old)
router.get('/highestRating', controllers.highRate)
router.get('/lowestRating', controllers.lowRate)

//all changes to the help/unhelp buttons
router.patch('/addHelp/:id', controllers.addHelpCount)
router.patch('/minusHelp/:id', controllers.minusHelpCount)
router.patch('/addUnhelp/:id', controllers.addUnhelpCount)
router.patch('/minusUnhelp/:id', controllers.minusUnhelpCount)
module.exports = router;