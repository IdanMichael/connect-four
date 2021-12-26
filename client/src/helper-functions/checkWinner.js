

const colChecker = (board) => {
  for(let i = 0; i < board.length; i++){
    let stack = [];
    for(const tile of board[i]){
      let len = stack.length
      if(len === 0){stack.push(tile)}
      else if(stack[0] === tile){
        stack.push(tile)
        if(stack.length === 4){
          return true
        }
      }else{
        stack = [tile]
      }
    }
  }
  return false
}
const boardParser = (board) => {
  //fills out blank tiles in board for winner checking purposes 
  let newBoard = [];
  for(const arr of board){
    newBoard.push(arr.slice())
  }
  for(let column of newBoard){
    while(column.length !== 7){
      column.push('noTile')
    }
  }
  return newBoard
}
const rowChecker = (board) =>{
  const parsedBoard = boardParser(board);
  for(let i = 0; i < parsedBoard.length; i++){
    let stack = [];
    for(let j = 0; j < parsedBoard[i].length; j++){
      if(parsedBoard[j][i] === 'noTile'){
        stack = []
        continue
      }
      let len = stack.length
      if(len === 0){stack.push(parsedBoard[j][i])}
      else if(stack[0] === parsedBoard[j][i]){
        stack.push(parsedBoard[j][i])
        if(stack.length === 4){
          return true
        }
      }else{
        stack = [parsedBoard[j][i]]
      }
    }
  }
  return false
}

const leftDiagonalChecker = (board) => {
  const parsedBoard = boardParser(board);
  for(let i = 0; i < 3; i++){
    let j = 0; 
    let stack = [];
    while(j + i < 6){
      if(parsedBoard[6 - j][j + i] === 'noTile'){
        j++
        continue
      }
      let len = stack.length
      if(len === 0){stack.push(parsedBoard[6 - j][j + i])}
      else if(stack[0] === parsedBoard[6 - j][j + i]){
        stack.push(parsedBoard[6 - j][j + i])
        if(stack.length === 4){
          return true
        }
      }else{
        stack = [parsedBoard[6 - j][j + i]]
      }
      j++
    }
  }
  for(let i = 1; i < 4; i++){
    let j = 0;
    let stack = [];
    while(j + i < 7){
      if(parsedBoard[6 - j - i][j] === 'noTile'){
        j++
        continue
      }
      let len = stack.length
      if(len === 0){stack.push(parsedBoard[6 - j - i][j])}
      else if(stack[0] === parsedBoard[6 - j - i][j]){
        stack.push(parsedBoard[6 - j - i][j])
        if(stack.length === 4){
          return true
        }
      }else{
        stack = [parsedBoard[6 - j - i][j]]
      }
      j++
    }
  }
  return false
}

const rightDiagonalChecker = (board) => {
  const parsedBoard = boardParser(board);
  for(let i = 0; i < 3; i++){
    let j = 0;
    let stack = [];
    while(j + i < 6){
      if(parsedBoard[j][j + i] === 'noTile'){
        j++
        continue
      }
      let len = stack.length
      if(len === 0){stack.push(parsedBoard[j][j + i])}
      else if(stack[0] === parsedBoard[j][j + i]){
        stack.push(parsedBoard[j][j + i])
        if(stack.length === 4){
          return true
        }
      }else{
        stack = [parsedBoard[j][j + i]]
      }
      j++
    }
  }
  for(let i = 1; i < 4; i++){
    let j = 0;
    let stack = [];
    while(j + i < 7){
      if(parsedBoard[j + i][j] === 'noTile'){
        j++
        continue
      }
      let len = stack.length
      if(len === 0){stack.push(parsedBoard[j + i][j])}
      else if(stack[0] === parsedBoard[j + i][j]){
        stack.push(parsedBoard[j + i][j])
        if(stack.length === 4){
          return true
        }
      }else{
        stack = [parsedBoard[j + i][j]]
      }
      j++
    }
  }
  return false
}
const checkWinner = (board) => {
  return (colChecker(board) || rowChecker(board) ||leftDiagonalChecker(board) || rightDiagonalChecker(board))
}

export default checkWinner