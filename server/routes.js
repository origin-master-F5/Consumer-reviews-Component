const router = require('express').Router();
const controllers = require('./controllers.js');


//all get requests
router.get('/:sku', controllers.all)
router.get('/help/:sku', controllers.mostHelpful)
router.get('/recent/:sku', controllers.recent)
router.get('/oldest/:sku', controllers.old)
router.get('/highestRating/:sku', controllers.highRate)
router.get('/lowestRating/:sku', controllers.lowRate)

//all changes to the help/unhelp buttons
router.patch('/addHelp/:id', controllers.addHelpCount)
router.patch('/minusHelp/:id', controllers.minusHelpCount)
router.patch('/addUnhelp/:id', controllers.addUnhelpCount)
router.patch('/minusUnhelp/:id', controllers.minusUnhelpCount)

//all changes to comments' help/unhelp buttons
router.patch('/commentAddHelp/:id', controllers.commentAddHelpCount)
router.patch('/commentMinusHelp/:id', controllers.commentMinusHelpCount)
router.patch('/commentAddUnhelp/:id', controllers.commentAddUnhelpCount)
router.patch('/commentMinusUnhelp/:id', controllers.commentMinusUnhelpCount)
module.exports = router;