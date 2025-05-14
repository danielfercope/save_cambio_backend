const express = require('express');
const router = express.Router();
const convertController = require('../controller/convertController');

router.get('/convert', convertController.convert);
router.get('/history', convertController.getHistory);


module.exports = router;
