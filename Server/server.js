const express = require('express');

const app  = express();
const pool = require('./db')
const leaderBoardRouter = require('./Routers/leaderBoardRouter')

const port = 8080;

app.use(express.json())

app.use('/leader-board', leaderBoardRouter)
app.get('/leader-board', (req,res) => {
})
app.listen(port, () => console.log(`Server started on port ${port}`))