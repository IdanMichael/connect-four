const db = require('../db');

const leaderBoardController = {};

leaderBoardController.getLeaderBoard = async (req, res, next) => {
  // write code here
  console.log('in controller')
  try{
    const getLeadersQuery = 'SELECT * FROM matches LIMIT 10';
    res.locals.leaderBoard = await db.query(getLeadersQuery);
    
    if(!res.locals.leaderBoard){
      return next({
        log: 'res.locals.addCharacters was not able to retreive data in leaderBoard controller', 
        error: 'Was not able to retrieve characters'
      });
    }
    next();
  } catch(error)  {
    throw new Error(error);
  }
};
module.exports = leaderBoardController;