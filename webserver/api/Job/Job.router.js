const router = require('express').Router();
console.log('request reach to router of job detail');
console.log('new update');
const jobController = require('./Job.controller.js');
router.get('/', jobController.getJobData);


exports = module.exports = router;