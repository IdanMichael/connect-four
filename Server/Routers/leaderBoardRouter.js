const express = require('express');
const leaderBoardController = require('../Controllers/leaderBoardController');

const router = express.Router();

router.get('/', leaderBoardController.getLeaderBoard,
  (req, res) => res.status(200).json(res.locals.leaderBoard)
);


module.exports = router;
