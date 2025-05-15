const express = require('express');
const router = express.Router();
const convertController = require('../controller/convertController');
const chartController = require('../controller/chartController'); 

router.get('/convert', convertController.convert);
router.get('/chart', chartController.getChartData); 

module.exports = router;