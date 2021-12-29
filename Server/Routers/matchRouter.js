const express = require('express');
const matchController = require('../Controllers/matchController');
const router = express.Router();

router.post('/new-match', matchController.addMatch,(req, res) => {
    console.log('in router: ' + res.locals.updatedUser)
    res.status(200).json(res.locals.updatedUser)
  }
);
router.get('/match-history', matchController.matchHistory,

  (req, res) => res.status(200).json(res.locals.matchHistory.rows)
);

module.exports = router;