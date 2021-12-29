import { createStore } from 'redux';

const initialState = {
  turnsPlayed: 0,
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
    if(newBoard[action.payload].length === 7){
      return state
    }
    newBoard[action.payload].push(colorDropped)
    return{
      turnsPlayed: state.turnsPlayed + 1,
      board: newBoard,
      isRedTurn: !state.isRedTurn
    }
  }
  if(action.type === 'RESET'){
    return {
      turnsPlayed: 0,
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
  }
  return state
}


export default createStore(reducer, initialState);