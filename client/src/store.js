import { createStore } from 'redux';

const initialState = {
  isRedTurn: true,
  board: [
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ]
}

function reducer (state = initialState,action){
  const newBoard = state.board.slice()
  let colorDropped = state.isRedTurn ? 'red' : 'yellow'
  if(action.type === 'DROP_TILE') {
    if(newBoard[action.payload].length === 6){
      return state
    }
    newBoard[action.payload].push(colorDropped)
    return{
      board: newBoard,
      isRedTurn: !state.isRedTurn
    }
    

  }
  return state
}


export default createStore(reducer, initialState);