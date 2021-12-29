
import {boardParser} from './checkWinner'

const apiBoardParser = (board) => {
  let fullBoard = boardParser(board)
  let boardString = ""
  for(let i = 6; i >= 0; i--) {
    for(let j = 0; j < 7; j++){
      let tile = fullBoard[j][i] 
      if(tile === 'red'){boardString += '1'}
      else if(tile === 'yellow'){boardString += '2'}
      else{boardString += '0'}
    }
  }
  return boardString
}

const findMax = (fetchedObj) => {
  let max = 0
  for(const score in fetchedObj){
    max = fetchedObj[score] > fetchedObj[max] ? score : max
  }
  return max
}
const impossibleBot = async (board) => {
  const parsedBoard = apiBoardParser(board)
  
  const col = fetch(`http://kevinalbs.com/connect4/back-end/index.php/getMoves?board_data=${parsedBoard}&player=2`)
  .then(res => res.json())
  .then(data => {
    return findMax(data)
    })
  return col
}

export default impossibleBot