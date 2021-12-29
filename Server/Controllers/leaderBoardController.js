const db = require('../db');

const leaderBoardController = {};

leaderBoardController.getLeaderBoard = async (req, res, next) => {
  // write code here
  
  const getLeadersQuery = 'SELECT * FROM users LIMIT 10';
  res.locals.leaderBoard = await db.query(getLeadersQuery);
  
  if(!res.locals.leaderBoard){
    return next({
      log: 'res.locals.leaderBoard was not able to retreive data in leaderBoard controller', 
      error: 'Was not able to retrieve leaderBoard'
    });
  }
  next();

};
module.exports = leaderBoardController;