const db = require('../db');

const matchController = {};

matchController.addMatch = async (req, res, next) => {
  // write code here
  const {yellowPlayer, redPlayer, turns, winner } = req.body; 
  const newMatch = 'INSERT INTO matches (yellow_player, red_player, winner, turns) VALUES ($1, $2, $3, $4)';
  res.locals.addMatch = await db.query(newMatch, [yellowPlayer, redPlayer, winner, turns]);

  const userQuery = 'SELECT * FROM users WHERE name = $1'
  const newUserQuery = 'INSERT INTO users (name, wins, matches) VALUES ($1, $2, $3)'
  const updateUser = 'UPDATE users SET wins = $1, matches = $2 WHERE name = $3'

  let redWinsAdd = 0
  let yellowWinsAdd = 0
  console.log(winner)
  if(winner === 'red'){
    redWinsAdd++
  }else{
  
    yellowWinsAdd++
  }
  
  let redUser = await db.query(userQuery, [redPlayer]);
  if(redUser.rows.length == 0){
    redUser = await db.query(newUserQuery, [redPlayer, 0, 0]);
  }
  redUser = await db.query(userQuery, [redPlayer]);
  let redWins = redUser.rows[0].wins + redWinsAdd
  let redMatches = redUser.rows[0].matches + 1
  redUser = await db.query(updateUser, [redWins, redMatches, redPlayer])

    
  let yellowUser = await db.query(userQuery, [yellowPlayer]);
  if(yellowUser.rows.length == 0){
    yellowUser = await db.query(newUserQuery, [yellowPlayer, 0, 0]);
  }
  yellowUser = await db.query(userQuery, [yellowPlayer]);
  let yellowWins = yellowUser.rows[0].wins + yellowWinsAdd
  let yellowMatches = yellowUser.rows[0].matches + 1
  yellowUser = await db.query(updateUser, [yellowWins, yellowMatches, yellowPlayer])
  
  // await db.query('DELETE FROM users WHERE wins > -1')
  // await db.query('DELETE FROM matches WHERE turns > -1')


  if(!res.locals.matchHistory){
    return next({
      log: 'res.locals.matchHistory was not able to retreive data in matchHistory controller', 
      error: 'Was not able to retrieve match history'
    });
  }
  next();
};

matchController.matchHistory = async (req,res,next) => {
 
  const matchHistory = 'SELECT * FROM matches LIMIT 10';
  res.locals.matchHistory = await db.query(matchHistory);
  
  if(!res.locals.matchHistory){
    return next({
      log: 'res.locals.matchHistory was not able to retreive data in matchHistory controller', 
      error: 'Was not able to retrieve match history'
    });
  }
  next();
  
}
module.exports = matchController;