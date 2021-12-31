import React, {Component} from "react";
import GridComponent from "./GridComponent";
import checkWinner from "../../helper-functions/checkWinner";
import {connect} from 'react-redux';
import ToLeaderBoard from "./ToLeaderBoard";
import ToMatchHistory from "./ToMatchHistroy";
import postToServer from "../../helper-functions/postToServer";
import impossibleBot from "../../helper-functions/impossibleBot";
import { dropTile, resetBoard } from '../../actions.js'


const mapDispatchToProps = dispatch =>(
  {
    dropTile: (col) => dispatch(dropTile(col)),
    resetBoard: () => dispatch(resetBoard())
  }
)
const mapStateToProps = state => (
  {
    board: state.board,
    turns: state.turnsPlayed,
    isRedTurn: state.isRedTurn
  }
)
class BoardContainer extends Component {
  async componentDidUpdate (){
    let yellowPlayer = document.getElementById('yellowPlayerName').value
    let copyOfBoard = []

    if(!this.props.isRedTurn && yellowPlayer === 'bot'){
      for(let arr of this.props.board){
        copyOfBoard.push(arr.slice())
      }
      const col = await impossibleBot(copyOfBoard)
      this.props.dropTile(col)
    }

    copyOfBoard = []
    for(let arr of this.props.board){
      copyOfBoard.push(arr.slice())
    }
    if(checkWinner(copyOfBoard)){
      let redPlayer = document.getElementById('redPlayerName').value

      if(redPlayer === ''){ redPlayer = 'guest'}
      if(yellowPlayer === ''){ yellowPlayer = 'guest'}
      
      const winner = this.props.isRedTurn ? 'yellow' : 'red'
      postToServer(redPlayer, yellowPlayer, this.props.turns, winner)
      alert(winner + ' won')
    }

  }
  handleClick () {
    this.props.resetBoard()
  }
  render() {
    const grid = [];
    for(let y = 6; y >= 0; y--){
      const row = [];
      for(let x = 0; x < 7; x++){
        row.push(<GridComponent x = {x} y = {y} key = {x}></GridComponent>)
      }
      grid.push(<div className = "row" key = {y}>{row}</div>)
    }
    return(
      <div className = "BoardContainer">
        <h1>Connect Four</h1>
        <div id = 'gridAndInputs'>
          <span id = 'redPlayerInput'>
            <input type = 'text' id = 'redPlayerName'></input>
            <p>Red Player</p>
          </span>
          <div id = 'gridDiv'>
           {grid}
          </div>
          <span id = 'redPlayerInput'>
            <input type = 'text' id = 'yellowPlayerName'></input>
            <p>Yellow Player</p>
          </span>
        </div>
        <div id = 'navButtons'>
          <ToLeaderBoard></ToLeaderBoard>
          <button id = 'resetButton' className = 'navButton' onClick = {() => this.handleClick()}>Reset</button>
          <ToMatchHistory></ToMatchHistory>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (BoardContainer);