const express = require('express');

const app  = express();
const pool = require('./db')

const port = 8080;

app.use(express.json())

app.get('/', async (req,res) => {
  const name = 'idan'
  const newPlayer = await pool.query("SELECT * FROM users")
  res.status(200).json(newPlayer.rows)
})
app.get('/leader-board', (req,res) => {
})
app.listen(port, () => console.log(`Server started on port ${port}`))