const express = require('express');

const app  = express();
const pool = require('./db')
const leaderBoardRouter = require('./Routers/leaderBoardRouter')
const addMatchRouter = require('./Routers/matchRouter')
const port = 8080;

app.use(express.json())

app.use('/leader-board', leaderBoardRouter)
app.use('/matches',addMatchRouter)

app.listen(port, () => console.log(`Server started on port ${port}`))