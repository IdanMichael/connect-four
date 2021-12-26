const express = require('express');
const addMatchController = require('../Controllers/addMatchController')
const router = express.Router();

router.post('/', addMatchController.addMatch,
  (req, res) => res.status(200).json({it: 'worked'})
);


module.exports = router;
