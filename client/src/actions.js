
export const dropTile = (col) => {
  return{
    type: 'DROP_TILE',
    payload: col
  }
}
export const resetBoard = () => {
  return{
    type: 'RESET'
  }
}