const db = require('../db');

const addMatchController = {};

addMatchController.addMatch = async (req, res, next) => {
  // write code here
  console.log(req.body)
  next();
};
module.exports = addMatchController;